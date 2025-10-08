import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SiteLayout: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        background:
          "radial-gradient(1200px 600px at 50% -80%, rgba(11,76,254,0.35), transparent), linear-gradient(180deg, #060a15 0%, #0a0f1e 70%, #0a0f1e 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ pb: 8, flex: 1, width: "100%" }}
        disableGutters
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default SiteLayout;
