import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import * as Yup from "yup";
import type { ModalType } from "../../../../stores/modalStore";
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface SignUpModalProps {
  openModal: ModalType;
  closeModal: () => void;
}

const SignUpModal = ({ openModal, closeModal }: SignUpModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signUpFromSchema = Yup.object({
    name: Yup.string()
      .required("Name — обязательное поле"),
    email: Yup.string()
      .email("Email должен быть корректным")
      .required("Email — обязательное поле"),
    password: Yup.string()
      .required("Password — обязательное поле")
      .min(8, "Password минимум из 8 символов"),
    confirmPassword: Yup.string()
      .required("Password — обязательное поле")
      .oneOf([Yup.ref("password")], "Пароли должны совпадать")
      .min(8, "Password минимум из 8 символов"),
  });

  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signUpFromSchema),
  });

  const nameController = useController({
    name: "name",
    control: methods.control,
  });

  const emailController = useController({
    name: "email",
    control: methods.control,
  });

  const passwordController = useController({
    name: "password",
    control: methods.control,
  });

  const confirmPasswordController = useController({
    name: "confirmPassword",
    control: methods.control,
  });

  const onSubmit = () => { null }

  return (
    <Dialog
      open={Boolean(openModal)}
      onClose={() => closeModal()}
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
        Регистрация
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
          label="Name"
          type="text"
          value={nameController.field.value}
          onChange={nameController.field.onChange}
          error={Boolean(nameController.fieldState.error?.message)}
          helperText={nameController.fieldState.error?.message}
        />
        <TextField
          label="Email"
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
        <TextField
          label="Confirm password"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPasswordController.field.value}
          onChange={confirmPasswordController.field.onChange}
          error={Boolean(confirmPasswordController.fieldState.error?.message)}
          helperText={confirmPasswordController.fieldState.error?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
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
          Зарегистрироваться
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpModal;
