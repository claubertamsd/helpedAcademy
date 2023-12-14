import {Box, CardContent, CardMedia, Link, Paper, Typography } from "@mui/material";

interface cardSubject {
  title: string;
  description: string;
  image: string;
  link: string;
  alternative:string;
}
function CardBook(props: cardSubject) {
  return (
    
      <CardContent sx={{ flex: "1 0 auto", marginBottom: "5px" , marginTop:'10px'}}>
        <Link href="#" underline="none">
          <Paper
            elevation={1}
            sx={{
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              display={"flex"}
              gap={"12px"}
              padding={"10px"}
              alignItems={"center"}
              sx={{
                transition: ".5s",
                "&:hover": {},
              }}
            >
              <CardMedia
                component="img"
                height={'100px'}
                sx={{ objectFit: "contain", width:'20%'}}
                image={props.image}
                alt={props.alternative}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
                <Typography
                  fontFamily={"Poppins"}
                  color={"#252525"}
                  fontWeight={"700"}
                  fontSize={"1.2em"}
                >
                  {props.title}
                </Typography>
                <Typography
                  fontFamily={"Poppins"}
                  color={"#252525"}
                  fontSize={"0.9em"}
                >
                  {props.description}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Link>
      </CardContent>

  );
}
export default CardBook;
