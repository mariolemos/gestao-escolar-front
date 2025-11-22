import { useState } from "react";

export const useBasicModal = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return {
        data: {
            open
        },
        actions: {
            handleOpen,
            handleClose
        }
    }
}