import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRouteAdmin = () => {
    const roleId = localStorage.getItem('roleId');
    const token = localStorage.getItem("userData");
    const [isToastOpen, setIsToastOpen] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        if (!token) {
            showToast("You need to log in to access this page.", "error");
        } else if (roleId !== '1') {
            showToast("You are not authorized to access this page.", "error");
        }
    }, [roleId, token]);

    const showToast = (message, status) => {
        toast({
            title: "Alert!",
            description: message,
            status: status,
            duration: 5000,
            isClosable: true,
            onCloseComplete: () => {
                setIsToastOpen(false);
                if (status === "error") {
                    navigate(-1);
                }
            },
        });
        setIsToastOpen(true);
    };

    return (
        <>
            {isToastOpen ? null : <Outlet />}
        </>
    );
};

export default ProtectedRouteAdmin;
