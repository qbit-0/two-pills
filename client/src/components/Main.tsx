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
      <Box
        component={Container}
        flexGrow={1}
        display="flex"
        flexDirection="column"
        rowGap={4}
      >
        <Typography variant="h2" textAlign="center" fontWeight="bold">
          MAKE. YOUR. DECISION.
        </Typography>
        <Grid2 container flexGrow={1}>
          <Grid2 xs>
            <Pill pillId={0} />
          </Grid2>
          <Divider orientation="vertical" flexItem>
            <Typography variant="h3">Or</Typography>
          </Divider>
          <Grid2 xs>
            <Pill pillId={1} />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Main;
