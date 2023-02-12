import Pill from "@/components/Pill";
import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Main = () => {
  return (
    <Box
      component="main"
      flexGrow={1}
      display="flex"
      flexDirection="column"
      pb={6}
    >
      <Container>
        <Grid2 container rowSpacing={8} columnSpacing={1}>
          <Grid2 xs={12}>
            <Typography variant="h2" textAlign="center">
              Make. Your. Decision.
            </Typography>
          </Grid2>
          <Grid2 xs={5}>
            <Pill pillId="red" />
          </Grid2>
          <Grid2 xs={2}>
            <Typography variant="h3" textAlign="center">
              Or
            </Typography>
          </Grid2>
          <Grid2 xs={5}>
            <Pill pillId="blue" />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Main;
