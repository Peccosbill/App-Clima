import { useToast, WrapItem, Button } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();
  const variant = "subtle";

  return (
    <WrapItem>
      <Button
        onClick={() =>
          toast({
            title: `${variant} toast`,
            variant: variant,
            isClosable: true,
          })
        }
      >
        Show {variant} toast
      </Button>
    </WrapItem>
  );
}

export default Toast;
