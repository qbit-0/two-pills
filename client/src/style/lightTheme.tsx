import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";

const theme = responsiveFontSizes(
  createTheme({ palette: { primary: red, secondary: blue } })
);

export default theme;
