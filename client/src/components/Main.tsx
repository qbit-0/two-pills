import Pill from "@/components/Pill";
import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Main = () => {
  const theme = useTheme();
  const useLargeLayout = useMediaQuery(theme.breakpoints.up("md"));

  const divider = useLargeLayout ? (
    <Divider orientation={"vertical"} flexItem>
      <Typography variant="h3">Or</Typography>
    </Divider>
  ) : (
    <Box width="100%">
      <Divider orientation="horizontal" flexItem sx={{ width: "100%" }}>
        <Typography variant="h3">Or</Typography>
      </Divider>
    </Box>
  );

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

        <Grid2 container flexGrow={1} rowSpacing={2} columnSpacing={4}>
          <Grid2 xs={12} md>
            <Pill pillId={0} />
          </Grid2>
          {divider}
          <Grid2 xs={12} md>
            <Pill pillId={1} />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Main;
