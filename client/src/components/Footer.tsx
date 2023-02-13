import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" py={2} bgcolor="grey.200">
      <Container>
        <Typography variant="h6">
          Created by <a href="https://duypham.tech/">Duy</a> and{" "}
          <a href="https://shino022.github.io/Portfolio-website/">Shin</a>. This
          website has no relation with the movie.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
