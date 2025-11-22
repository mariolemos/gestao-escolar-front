import CircularProgress from "@mui/material/CircularProgress"

export const Load = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(255, 255, 255, 0.7)", // opcional
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <CircularProgress
                color="primary"
                variant="indeterminate"
                size={100}
                thickness={3.6}
            />
        </div>
    )
}