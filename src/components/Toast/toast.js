// toast.js
import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = (status, description) => {
    toast({
      title: status === "success" ? "Success" : "Error",
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return { showToast };
};
