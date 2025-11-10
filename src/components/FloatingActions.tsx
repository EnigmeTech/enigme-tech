import { useEffect, useState } from "react";
import { Box, Fab, Tooltip, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { keyframes } from "@mui/system";
import { ScheduleMeetingFab } from "./ScheduleMeetingFab";

const whatsappUrl =
  "https://wa.me/5592992313988?text=Oi%2C%20pessoal%20da%20Enigme%20Tech!%20Tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs.";

const pulseGreen = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
  70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
`;

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 160) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const delay = setTimeout(() => setVisible(true), 1200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(delay);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    setAttention(true);
    const t = setTimeout(() => setAttention(false), 6000);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <Box
      sx={{
        position: "fixed",
        right: 24,
        bottom: 34,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        pointerEvents: "none",
      }}
    >
      <Zoom in={visible} style={{ transitionDelay: visible ? "100ms" : "0ms" }}>
        <Box sx={{ pointerEvents: "auto" }}>
          <ScheduleMeetingFab />
        </Box>
      </Zoom>

      <Zoom in={visible} style={{ transitionDelay: visible ? "220ms" : "0ms" }}>
        <Box sx={{ pointerEvents: "auto" }}>
          <Tooltip title="Falar no WhatsApp" placement="left">
            <Fab
              aria-label="WhatsApp"
              onClick={() =>
                window.open(whatsappUrl, "_blank", "noopener,noreferrer")
              }
              sx={{
                width: 56,
                height: 56,
                bgcolor: "#25D366",
                color: "#fff",
                "&:hover": { bgcolor: "#1ebe5d" },
                animation: attention
                  ? `${pulseGreen} 2.2s ease-out 0.8s 2`
                  : "none",
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 26 }} />
            </Fab>
          </Tooltip>
        </Box>
      </Zoom>
    </Box>
  );
}
