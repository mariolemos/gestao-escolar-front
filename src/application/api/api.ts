import { useAlert } from '@/layout/components/alert/AlertContext';
import { useCallback } from 'react';

export const useApi = () => {
    const { showAlert } = useAlert();

    const showError = useCallback((msg: string) => {
        console.error("❌ API Error:", msg);
        showAlert(msg, "error");
    }, [showAlert]);

    const showSuccess = useCallback((msg?: string) => {        
        showAlert(msg ?? "Requisição realizada com sucesso", "success");
    }, [showAlert]);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // ============================================================
    // 🔵 PADRÃO DE RETORNO SEGURO
    // ============================================================
    const safeReturn = (success: boolean, data: any, error: string | null) => ({
        success,
        data,
        error
    });

    const parseResponse = async (response: Response) => {
        try {
            const contentType = response.headers.get("content-type");

            if (contentType?.includes("application/json")) {
                return await response.json();
            }

            return await response.text();
        } catch {
            return null;
        }
    };

    // ============================================================
    // 🔵 GET SEGURO
    // ============================================================
    const GETRequest = useCallback(async <T,>(path: string) => {
        const fullUrl = `${baseUrl}${path}`;
        console.log("🔵 GET:", fullUrl);

        try {
            const response = await fetch(fullUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            const result = await parseResponse(response);

            if (!response.ok) {
                const msg = result?.mensage || `Erro ${response.status}`;
                showError(msg);

                return safeReturn(false, null, msg);
            }

            

            return safeReturn(true, result as T, null);

        } catch (err: any) {
            let msg = "Erro na requisição";

            if (err?.message === "Failed to fetch") msg = "Servidor indisponível. Tente novamente mais tarde.";
            if (err?.name === "TypeError") msg = "Erro de conexão com o servidor.";

            showError(msg);
            return safeReturn(false, null, msg);
        }
    }, [baseUrl, showError]);

    // ============================================================
    // 🟢 POST SEGURO
    // ============================================================
    const POSTRequest = useCallback(async <T,>(path: string, body: T) => {
        const fullUrl = `${baseUrl}${path}`;
        console.log("🟢 POST:", fullUrl);

        try {
            const response = await fetch(fullUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const result = await parseResponse(response);

            if (!response.ok) {
                const msg = result?.mensage || `Erro ${response.status}`;
                showError(msg);

                return safeReturn(false, null, msg);
            }
            showSuccess()

            return safeReturn(true, result, null);

        } catch (err: any) {
            let msg = "Erro ao enviar dados";

            if (err?.message === "Failed to fetch") msg = "Servidor indisponível. Tente novamente mais tarde.";
            if (err?.name === "TypeError") msg = "Erro de conexão com o servidor.";

            showError(msg);
            return safeReturn(false, null, msg);
        }
    }, [baseUrl, showError]);

    // ============================================================
    // 🟡 PUT SEGURO
    // ============================================================
    const PUTRequest = useCallback(async <T,>(path: string, body: T) => {
        const fullUrl = `${baseUrl}${path}`;
        console.log("🟡 PUT:", fullUrl);

        try {
            const response = await fetch(fullUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const result = await parseResponse(response);

            if (!response.ok) {
                const msg = result?.mensage || `Erro ${response.status}`;
                showError(msg);

                return safeReturn(false, null, msg);
            }
            showSuccess()

            return safeReturn(true, result, null);

        } catch (err: any) {
            let msg = "Erro ao atualizar dados";

            if (err?.message === "Failed to fetch") msg = "Servidor indisponível. Tente novamente mais tarde.";
            if (err?.name === "TypeError") msg = "Erro de conexão com o servidor.";

            showError(msg);
            return safeReturn(false, null, msg);
        }
    }, [baseUrl, showError]);

    return {
        GETRequest,
        POSTRequest,
        PUTRequest
    };
};
