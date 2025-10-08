import { Box, Stack } from "@mui/material";
import HeroHome from "../components/HeroHome";
import TechnologiesSection from "../components/TecnologiesSection";
import ServicesSection from "../components/ServicesSection";

const HomePage: React.FC = () => {
  return (
    <Stack spacing={6}>
      <HeroHome />
      <TechnologiesSection />
      <ServicesSection />
    </Stack>
  );
};

export default HomePage;
