import { Box, Flex, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Center } from "@chakra-ui/react";

const Register = () => {
  return (
    <Flex>
      <Center
        width={"100vw"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Box
          bg="gray.800"
          width="50%"
          height="70%"
          padding={10}
          rounded={30}
          shadow={"sm"}
        >
          <form>
            <Stack>
              <Field label="Username">
                <Input placeholder="Enter Username"></Input>
              </Field>
            </Stack>
          </form>
        </Box>
      </Center>
    </Flex>
  );
};

export default Register;
