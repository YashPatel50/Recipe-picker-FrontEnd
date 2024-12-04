import { Box, Button, Flex, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Center } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, {
    message:
      "Username must be 8-20 characters. At least 1 Letter. At least 1 Number.  No Special characters",
  }),
  password: z
    .string()
    .regex(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\d)[A-Za-z\d\W_]{8,20}$/, {
      message:
        "Password must be 8-20 characters long, include at least one uppercase letter, one special character, and one number.",
    }),
});

type LoginFormData = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });

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
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Stack>
              <h1>Register</h1>
              <Field label="Username" required>
                <Input
                  {...register("username")}
                  placeholder="Enter Username"
                ></Input>
                {errors.username && (
                  <p className="text-danger">{errors.username.message}</p>
                )}
              </Field>
              <Field label="Password" required>
                <Input
                  {...register("password")}
                  placeholder="Enter Password"
                ></Input>
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Field>
              <Button
                disabled={!isValid}
                mt={4}
                colorScheme="teal"
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </Flex>
  );
};

export default Register;
