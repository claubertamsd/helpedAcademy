import { Box, Avatar, Typography } from "@mui/material";

interface AboutProps {
    image: string;
    name: string;
    description: string;
  }
  
  function AboutUsCard(props: AboutProps) {
    return (
        <Box
        display={"flex"}
        alignContent={"center"}
        width={"30rem"}
        gap={"15px"}
      > 
        <Avatar sx={{height:'60px', width:'60px'}} src={props.image} />
        <Box>
          <Typography
            fontSize={"1.3em"}
            fontFamily={"Bricolage Grotesque"}
          >
            {props.name}
          </Typography>
          <Typography
            fontSize={".9em"}
            fontFamily={"Poppins"}
            fontWeight={"300"}
            textAlign={"left"}
          >
            {props.description}
          </Typography>
        </Box>
        </Box>
    )
  }

  export default AboutUsCard;