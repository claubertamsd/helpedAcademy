import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface search{
  width:string;
}

function SearchInput(props:search) {
  const paperStyle ={
    p: "2px 4px", display: "flex", alignItems: "center", width: props.width
  }
  return (
    <Paper
    elevation={3}
      component="form"
      sx={paperStyle}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontFamily:'Poppins' }}
        placeholder="Busque sua matéria"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    
    </Paper>
  );
}
export default SearchInput;
