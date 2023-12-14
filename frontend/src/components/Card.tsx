import {Box, CardMedia, Paper, Typography } from "@mui/material";

interface CardProps {
  image: string;
  title: string;
  description: string;
  alternative: string;
}

function Card(props: CardProps) {
  return (
    <Paper elevation={3} sx={{ borderRadius: "10px" }}>
      <Box
        width={"18rem"}
        height={"18rem"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <CardMedia
        component="img"
        width={'100%'}
        height="55%"
        
        sx={{objectFit:"contain"}}
        image={props.image}
        alt={props.alternative}
      />
        <Box 
        sx={{
            padding:'.8rem 4px 1.8rem 4px'
        }}>

        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{ fontFamily: "Archivo",
        fontSize:'1.2em' }}
        >
          {props.title}
        </Typography>
        <Typography textAlign={"center"} sx={{ fontFamily: "Poppins", fontSize:'0.8em', fontWeight:'400'}}>
          {props.description}
        </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Card;
