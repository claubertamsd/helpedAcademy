import Email from "@mui/icons-material/Email";
import Password from "@mui/icons-material/Lock";
import logo from "../../assets/logo.png";
import Facebook from "../../assets/Facebook.png";
import Google from "../../assets/Google.png";
import Close from "@mui/icons-material/Close";
import {
  Typography,
  Button,
  Link,
  TextField,
  Box,
  Divider,
  Dialog,
  IconButton,
  Slide,
} from "@mui/material";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog sx={containerLogin} open={open} onClose={onClose} TransitionComponent={Transition}>
      <Box sx={cardLogin}>
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <img height={40} width={40} src={logo} alt="HelpedAcademy" />
          </Link>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={title}>Faça login na sua conta</Typography>
          <Typography sx={subtitle}>
            Bem vindo, selecione o metodo para entrar
          </Typography>

          <Box sx={loginAndMediasContainer}>
            <Button
              id="btn_googleLogin"
              variant="outlined"
              size="large"
              sx={customButtonStyle}
            >
              <img height={30} width={30} src={Google} alt="Logo Google" />
              Google
            </Button>
            <Button
              id="btn_FacebookLogin"
              variant="outlined"
              size="large"
              sx={customButtonStyle}
            >
              <img height={30} width={30} src={Facebook} alt="Logo Facebook" />
              Facebook
            </Button>
          </Box>
        </Box>

        <Box sx={Boxdivider}>
          <Divider sx={{ flexGrow: 1 }} />
          <Typography variant="body2" sx={typographyDivider}>
            Ou continue por email
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>
        <Box component="form" sx={formContainer} noValidate autoComplete="on">
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "1.5rem;",
            }}
          >
            <Email sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="inputEmail"
              label="Email"
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "1rem;",
            }}
          >
            <Password sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="passwordInput"
              type="password"
              label="Senha"
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>

          <Box sx={btnBox}>
            <Button variant="contained" disableElevation sx={btnSave}>
              Entrar
            </Button>
          
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

const containerLogin = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowY: "hidden",
};

const cardLogin = {
  width: "22rem",
  boxShadow: "-1px 7px 22px 0px rgba(0, 0, 0, 0.25)",
  fontFamily: "Poppins, sans-serif",
  borderRadius: "10px",
  padding: "1.3rem 2.5rem 2rem 2.5rem",
  transition: "width 0.3s",
  overflow:'auto',
  overflowX:'hidden',
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
  },


};
const loginAndMediasContainer = {
  display: "flex",
  width: "100%",
  marginTop: "1rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
};

const customButtonStyle = {
  border: "1px solid #002500",
  color: "#002500",

  fontWeight: "Regular;",
  width: "50%",
  height: "50px",
  fontFamily: "Poppins",
};
const title = {
  color: "#030024",
  fontFamily: "Poppins",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "700",
};

const subtitle = {
  color: "#AAA",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
};

const Boxdivider = {
  display: "flex",
  alignItems: "center",
  marginTop: "1.5rem",
  marginBottom: "1rem",
};
const typographyDivider = {
  px: 2,
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "300;",
  lineHeight: "normal",
};
const formContainer = {
  marginTop: "20px",
};
const btnBox = {
  display: "flex",
  marginTop: "2rem",
  gap: "5px",
};
const btnSave = {
  width: "100%",
  height: "50px",
  background: "linear-gradient(92deg, #005C97 3.39%, #363795 96.13%)",
};

