import Pill from "@/components/Pill";
import { Box, Container, Divider, Typography } from "@mui/material";
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
        <Grid2 container rowSpacing={8} columnSpacing={4}>
          <Grid2 xs={12}>
            <Typography variant="h2" textAlign="center" fontWeight="bold">
              MAKE. YOUR. DECISION.
            </Typography>
          </Grid2>
          <Grid2 xs>
            <Pill pillId="red" />
          </Grid2>
          <Divider orientation="vertical" flexItem>
            <Typography variant="h3">Or</Typography>
          </Divider>
          <Grid2 xs>
            <Pill pillId="blue" />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Main;
