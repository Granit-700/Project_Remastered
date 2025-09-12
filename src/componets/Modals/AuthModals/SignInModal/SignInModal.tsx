import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useController, useForm } from "react-hook-form";
import type { SignInRequest } from "../../../../types/auth/auth";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useError, useSignIn } from "../../../../stores/authStore";
import { Typography } from "@mui/material";

interface SignInModalProps {
  isOpenModal: string | null;
  setIsOpenModal: (value: "signIn" | null) => void;
}

const SignInModal = ({ isOpenModal, setIsOpenModal }: SignInModalProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const signInFromSchema = Yup.object({
    email: Yup.string()
      .email("Email должен быть корректным")
      .required("Email — обязательное поле"),
    password: Yup.string()
      .required("Password — обязательное поле")
      .min(8, "Password минимум из 8 символов"),
  });

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInFromSchema),
  });

  const emailController = useController({
    name: "email",
    control: methods.control,
  });

  const passwordController = useController({
    name: "password",
    control: methods.control,
  });

  const signIn = useSignIn();

  const onSubmit = (data: SignInRequest) => {
    signIn({
      email: data.email,
      password: data.password
    })
      .then(() => {
        console.log("процесс завершен");

        // setIsOpenModal(null);
      })
  };

  const error = useError();

  return (
    <Dialog
      open={Boolean(isOpenModal)}
      onClose={() => setIsOpenModal(null)}
      slotProps={{ paper: { sx: { p: "24px", gap: "8px" } } }}
    >
      <DialogTitle
        sx={{
          p: 0,
          fontWeight: 600,
          fontSize: "24px",
          mx: "auto",
          lineHeight: "100%",
          color: "#FFAB08",
          mb: "8px"
        }}
      >
        Вход
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: "8px 0",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <TextField
          label={"Email"}
          type="email"
          value={emailController.field.value}
          onChange={emailController.field.onChange}
          error={Boolean(emailController.fieldState.error?.message)}
          helperText={emailController.fieldState.error?.message}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={passwordController.field.value}
          onChange={passwordController.field.onChange}
          error={Boolean(passwordController.fieldState.error?.message)}
          helperText={passwordController.fieldState.error?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
      {error ? <Typography sx={{ color: "#ff0000ff", mx: "auto" }}>
        {error}
      </Typography> : null}
      <DialogActions sx={{ px: 0 }}>
        <Button
          TouchRippleProps={{ style: { color: "#fff" } }}
          sx={{
            backgroundColor: "#FFAB08",
            width: "100%",
            color: "#fff",
          }}
          onClick={methods.handleSubmit(onSubmit)}
        >
          Войти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInModal;
