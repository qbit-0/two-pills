import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton>
            <LightMode />
            <DarkMode />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Header />
      <Main />
      <Footer />
    </Box>
  );
};

export default App;
