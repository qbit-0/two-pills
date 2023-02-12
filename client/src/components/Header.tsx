import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box py={8}>
      <Container>
        <Typography variant="h1" fontWeight="bold">
          Two pills, red and blue.
        </Typography>
        <Typography variant="h4">
          "This is your last chance. After this, there's no turning back."
        </Typography>
        <Typography variant="h6">
          Clicking a pill will take you to a rabbithole submitted by a previous
          player.
        </Typography>
        <Typography variant="h6">
          Beware. You won't know where you're going until you get there.
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
