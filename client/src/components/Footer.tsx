import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" py={2}>
      <Container>
        <Typography variant="body2">
          Created by <a href="https://duypham.tech/">Duy</a> and{" "}
          <a href="https://shino022.github.io/Portfolio-website/">Shin</a>. This
          website has no relation with the movie.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
