import { useState } from "react";
import { Box, Button, Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Container>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count: {count}
        </Button>
      </Container>
    </Box>
  );
}
export default App;
