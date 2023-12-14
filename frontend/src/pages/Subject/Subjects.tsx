import { Box, Divider, Typography } from "@mui/material";

import { DrawerSide } from "../../components/DrawerSide";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import CardBook from "../../components/CardBook";
import Book from "../../assets/Livro.jpg";
import Footer from "../../components/Footer";
function Subjects() {
  return (
    <DrawerSide>
      <Box
        sx={{ backgroundColor: "#f7f7f7" }}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Header
          position={"relative"}
          backgroundColor={"#ffffff"}
          boxShadow={""}
        />
        <Divider />
        <Box
          position={"relative"}
          width={"60%"}
          height={"50rem"}
          margin={"2rem 2rem"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          borderRadius={"8px"}
          sx={{
            background: "linear-gradient(92deg, #005C97 3.39%, #363795 96.13%)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            transition:'.5s',
            '@media (max-width:600px)': {
              width:'80%'
            },
            '@media (max-width:400px)': {
              width:'100%'
            },
          }}
        >
          <Typography
            color={"#fff"}
            fontFamily={"Poppins"}
            fontWeight={"700"}
            fontSize={"1.4em"}
            textAlign={"center"}
            marginTop={"40px"}
            marginBottom={"40px"}
          >
            Pesquise a máteria abaixo
          </Typography>
          <SearchInput width={"80%"} />

          <Box
            marginTop={"35px"}
            bgcolor={"#ffff"}
            borderRadius={"0px 0px 8px 8px"}
            width={"100%"}
            sx={{
              overflow: "auto",
              overflowX: "hidden",
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
            }}
          >
            <CardBook
              title={"Matématica para Computação"}
              description={
                "Essa disciplina explora conceitos como lógica, teoria dos conjuntos, álgebra, e teoria dos grafos, fornecendo a estrutura necessária para a formulação e resolução de problemas complexos na computação. "
              }
              image={Book}
              link={"/#"}
              alternative={"Link para materia escolhida"}
            />
            <CardBook
              title={"Matématica para Computação"}
              description={
                "Essa disciplina explora conceitos como lógica, teoria dos conjuntos, álgebra, e teoria dos grafos, fornecendo a estrutura necessária para a formulação e resolução de problemas complexos na computação. "
              }
              image={Book}
              link={"/#"}
              alternative={"Link para materia escolhida"}
            />
            <CardBook
              title={"Matématica para Computação"}
              description={
                "Essa disciplina explora conceitos como lógica, teoria dos conjuntos, álgebra, e teoria dos grafos, fornecendo a estrutura necessária para a formulação e resolução de problemas complexos na computação. "
              }
              image={Book}
              link={"/#"}
              alternative={"Link para materia escolhida"}
            />
            <CardBook
              title={"Matématica para Computação"}
              description={
                "Essa disciplina explora conceitos como lógica, teoria dos conjuntos, álgebra, e teoria dos grafos, fornecendo a estrutura necessária para a formulação e resolução de problemas complexos na computação. "
              }
              image={Book}
              link={"/#"}
              alternative={"Link para materia escolhida"}
            />
            <CardBook
              title={"Matématica para Computação"}
              description={
                "Essa disciplina explora conceitos como lógica, teoria dos conjuntos, álgebra, e teoria dos grafos, fornecendo a estrutura necessária para a formulação e resolução de problemas complexos na computação. "
              }
              image={Book}
              link={"/#"}
              alternative={"Link para materia escolhida"}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </DrawerSide>
  );
}
export default Subjects;
