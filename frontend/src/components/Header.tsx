import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "../assets/logo.png";
import { useDrawerContext } from "../contexts/DrawerContext";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { LoginDialog } from "../pages/Login";

const pages = [
  {
    label: "Disciplinas",
    route: "/subjects",
  },
  {
    label: "Novidades",
    route: "/news",
  },
  {
    label: "Contatos",
    route: "#Contacts",
  },
  {
    label: "Sobre",
    route: "/about",
  },
];

interface positonHeader{
  position: string;
  backgroundColor: string;
  boxShadow: string
  
}
function Header(props:positonHeader) {
  const { toggleDrawerOpen } = useDrawerContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styleAppBar = {
    position: props.position,
    backgroundColor: props.backgroundColor,
    boxShadow: props.boxShadow,
    color: "#030024",
    padding: "0px 1rem 0px 1rem",
  }
 
  return (
    <AppBar
     
      sx={styleAppBar}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            src={Logo}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Bricolage Grotesque",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Helped Academy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Avatar
            src={Logo}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "sans-serif",
              fontWeight: 700,
              color: "inherit",
              fontSize: "20px",
              textDecoration: "none",
            }}
          >
            Helped Academy
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                marginRight: "3rem",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                href={page.route}
                sx={{
                  my: 2,
                  color: "inherit",
                  display: "block",
                  fontFamily: "Archivo",
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Button
            sx={{
              color: "#fff",
              background:
                "linear-gradient(92deg, #005C97 3.39%, #363795 96.13%)",
              width: "6rem",
              borderRadius: "50px",
            }}
            onClick={handleOpen}
          >
            Entrar
          </Button>
          <React.Fragment>
            <LoginDialog open={open} onClose={handleClose} />
          </React.Fragment>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
