import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

function App() {
  const [res, setRes] = useState(JSON);
  useEffect(() => {
    // const res = fetch("/api/boxes/link/1", {
    //   method: 'Get',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    const data = {
      link: "a link",
      label: "a label",
    };
    const res = fetch("/api/boxes/1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setRes(data));
  }, []);

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
