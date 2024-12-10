import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Center } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, {
    message:
      "Username must be 8-20 characters.\nAt least 1 Letter.\nAt least 1 Number.\nNo Special characters",
  }),
  password: z
    .string()
    .regex(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\d)[A-Za-z\d\W_]{8,20}$/, {
      message:
        "Password must be 8-20 characters.\nAt least 1 Letter.\nAt least 1 Number.\nAt least 1 Capital Letter.\nAt least 1 special character",
    }),
});

type LoginFormData = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Flex
      width="100vw"
      height="100vh"
      justify="center"
      align="flex-start" // Align to the top
      paddingTop="20vh"
    >
      <Box
        background="gray.800"
        width="50%"
        height="40%"
        padding={10}
        rounded={30}
        shadow={"sm"}
        maxWidth="600px"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Heading size={"2xl"} paddingBottom={4}>
              Register
            </Heading>
            <Field label="Username" paddingBottom={4} aria-required required>
              <Input
                type="text"
                borderColor="borderColor.primary"
                {...register("username")}
                placeholder="Enter Username"
              ></Input>
              <Show when={errors.username}>
                <Text color={"text-error"} whiteSpace="pre-line">
                  {errors.username?.message}
                </Text>
              </Show>
            </Field>
            <Field label="Password" paddingBottom={4} aria-required required>
              <Input
                type="password"
                borderColor="borderColor.primary"
                {...register("password")}
                placeholder="Enter Password"
              ></Input>
              <Show when={errors.password}>
                <Text color={"text-error"} whiteSpace="pre-line">
                  {errors.password?.message}
                </Text>
              </Show>
            </Field>
            <Button color="primary" disabled={!isValid} type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
