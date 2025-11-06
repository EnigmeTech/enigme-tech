import { Box, Fab, Zoom, keyframes } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";

type Props = {
  whatsappUrl?: string;
};

const WhatsappFloatButton: React.FC<Props> = ({
  whatsappUrl = "https://wa.me/5592992313988?text=Oi%2C%20pessoal%20da%20Enigme%20Tech!%20Tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs.",
}) => {
  const [showButton, setShowButton] = useState(false);
  const [highlight, setHighlight] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!highlight) return;
    const timer = setTimeout(() => setHighlight(false), 6000);
    return () => clearTimeout(timer);
  }, [highlight]);

  const openWhatsApp = () => window.open(whatsappUrl, "_blank");

  const pulse = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
    50% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  `;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1200,
      }}
    >
      <Zoom in={showButton}>
        <Fab
          onClick={openWhatsApp}
          aria-label="WhatsApp"
          sx={{
            bgcolor: "#25D366",
            "&:hover": { bgcolor: "#1ebe5d" },
            color: "#fff",
            width: 64,
            height: 64,
            animation: highlight ? `${pulse} 1.5s ease-out infinite` : "none",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default WhatsappFloatButton;
