import { useState } from "react";
import { DataTable } from "../../dataTable/DataTable";

export const useNaveBar = () => {


    const [auth, setAuth] = useState<boolean>(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const testando = () => {
        alert("teste..")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const rendenrizarAluno = () => {


    }

    return {
        data: {
            auth,
            anchorEl
        },
        action: {
            handleChange,
            handleMenu,
            handleClose,
            testando,
            rendenrizarAluno
        }
    }
}