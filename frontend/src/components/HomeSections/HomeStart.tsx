import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { RegisterDialog } from "../../pages/Register";
import Header from "../Header";

function HomeStart(){
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
      <>
      <Header position="absolute" backgroundColor={"transparent"} boxShadow={"none  "}/>
        <Box
        width={"100vw"}
        height={"100%"}
        
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "start",
          overflowX:'hidden',
        }}
      >
        <Avatar
          variant="square"
          src="none"
          sx={{
            backgroundImage: 'url("/src/assets/Background.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            width: "100%",
            position: "relative",
            opacity: ".5",
          }}
        >
          .
        </Avatar>
        <Box width={"65%"} sx={{ marginLeft: "50px", position: "absolute" }}>
          <Typography
            sx={{
              color: "#030024",
              fontWeight: "700",
              fontSize: "40px",
              fontFamily: "Archivo",
            }}
          >
            Sua ajuda acadêmica aqui
          </Typography>
          <Typography            
            sx={{
              fontFamily: "Archivo",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            Tenha acesso a conhecimentos de altos níveis. Aqui você encontra
            livros e aulas prontos para te ajudar nessa jornada. Se inscreva
            para ter acesso completo.
          </Typography>

          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              borderRadius: "50px",
              padding: "10px",
              width: "10rem",
              fontSize: "18px",
              background:
                "linear-gradient(92deg, #005C97 3.39%, #363795 96.13%)",
              marginTop: "25px",
              textTransform: "none",
            }}
          >
            Inscreva-se
          </Button>
          <React.Fragment>
            <RegisterDialog open={open} onClose={handleClose} />
          </React.Fragment>

        </Box>
         
    </Box>
    </>
    )
}
export default HomeStart;