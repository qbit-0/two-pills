import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Box>
      <Container>
        <Typography variant="h4">
          Two boxes in red and blue. <br />
          Boxes were crafted by previous players. <br />
          Each box will take you to a link. <br />
          You may pick one to visit. <br />
          The other will remain a mystery forever. <br />
          Chose carefully...
        </Typography>
      </Container>
    </Box>
  );
}
export default App;
