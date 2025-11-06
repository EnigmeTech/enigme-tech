import { Stack } from "@mui/material";
import HeroHome from "../components/HeroHome";
import TechnologiesSection from "../components/TecnologiesSection";
import ServicesSection from "../components/ServicesSection";
import { FloatingActions } from "../components/FloatingActions";

const HomePage: React.FC = () => {
  return (
    <Stack spacing={6}>
      <HeroHome />
      <TechnologiesSection />
      <ServicesSection />
      <FloatingActions />
    </Stack>
  );
};

export default HomePage;
