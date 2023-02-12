import { Box, Container, Typography, useTheme } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" py={2} bgcolor="grey.200">
      <Container>
        <Typography variant="h6">
          Created by <a href="">Duy</a> and <a href="">Shin</a>. This website
          has no relation with the movie.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
