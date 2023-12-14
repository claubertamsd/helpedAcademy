import { DrawerSide } from "../../components/DrawerSide";

import HomeStart from "../../components/HomeSections/HomeStart";
import Card from "../../components/Card";
import { Box, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import classroom from "../../assets/VectorMovie.jpg";
import books from "../../assets/books.jpg";
import Teacher from "../../assets/Teacher.jpg";
import Carlos from "../../assets/Carlos.jpeg";
import Claubert from "../../assets/Claubert.jpg";
import Footer from "../../components/Footer";
import AboutUsCard from "../../components/AboutUsCard";
function Home() {
  return (
    <DrawerSide>
      <HomeStart />

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography textAlign={"center"} sx={{ fontFamily: "Archivo" }}>
          O que você encontrará aqui?
        </Typography>
        <KeyboardArrowDown />
      </Box>
      <Box
        display={"flex"}
        sx={{ gap: "2rem" }}
        justifyContent={"center"}
        marginTop={"0.2rem"}
        padding={"2rem"}
        flexWrap={"wrap"}
      >
        <Card
          image={classroom}
          title={"Vídeos"}
          description={
            "Ao acessar a sua disciplina de estudos, você terá a chance de assistir videos para facilitar seu desenvolvimento."
          }
          alternative="Image by storyset on Freepik"
        />
        <Card
          image={books}
          title={"Livros"}
          description={"Em breve uma biblioteca com livros em pdf para você."}
          alternative=""
        />
        <Card
          image={Teacher}
          title={"Professores"}
          description={
            "Escolha tutores, e agende um horário para estudar com um professor particular remotamente."
          }
          alternative=""
        />
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography textAlign={"center"} fontFamily={"Archivo"}>
          Quem Somos
        </Typography>
        <KeyboardArrowDown />
        <Box
          display={"flex"}
          sx={{ gap: "2rem" }}
          justifyContent={"center"}
          marginTop={"0.2rem"}
          padding={"2rem"}
          flexWrap={"wrap"}
        >
          <AboutUsCard
            name="Carlos Cezar"
            image={Carlos}
            description=" Formado em administração, cursando Análise e desenvolvimento
            de sistemas pela universidade Unicesumar, Pós-graduado em
            desenvolvimento Mobile, e ADS."
          />

          <AboutUsCard
            name="Claubert Santos"
            image={Claubert}
            description=" Atualmente cursando Análise e desenvolvimento de sistemas pela
                  universidade Unicesumar, desenvolvo softwares ERP para algumas empresas que tem o foco
                  em vendas."
          />
        </Box>
        <Box width={"60%"} marginBottom={"5rem"}>
          <Typography
            textAlign={"center"}
            fontFamily={"Poppins"}
            fontWeight={"500"}
          >
            Somos estudantes universitários, que tem o objetivo de ajudar mais
            pessoas a concluir esse passo importante na vida com a facilidade de
            encontrar conteúdos de altissima qualidade, e ter um crescimento de
            carreira.
          </Typography>
        </Box>
      </Box>

      <Footer />
    </DrawerSide>
  );
}
export default Home;
