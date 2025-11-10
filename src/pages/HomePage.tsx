import { Stack } from "@mui/material";
import HeroHome from "../components/HeroHome";
import TechnologiesSection from "../components/TecnologiesSection";
import ServicesSection from "../components/ServicesSection";
import { FloatingActions } from "../components/FloatingActions";
import { FoundersSection } from "../components/FoundersSection";

const HomePage: React.FC = () => {
  return (
    <Stack spacing={0} sx={{ flex: "unset", pb: 0 }}>
      <HeroHome />
      <TechnologiesSection />
      <ServicesSection />
      <FoundersSection />
      <FloatingActions />
    </Stack>
  );
};

export default HomePage;
