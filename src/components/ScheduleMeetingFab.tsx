// src/components/ScheduleMeetingFab.tsx
import { useCallback, useEffect, useState } from "react";
import { Fab, Tooltip } from "@mui/material";
import EventAvailableRounded from "@mui/icons-material/EventAvailableRounded";
import { PopupModal } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/enigmetech/30min";

const CALENDLY_URL_WITH_UTM = `${CALENDLY_URL}?utm_source=site&utm_medium=fab&utm_campaign=agendamento`;

const isMobileViewport = () =>
  typeof window !== "undefined" && window.innerWidth < 768;

export function ScheduleMeetingFab() {
  const [open, setOpen] = useState(false);

  const openSmart = useCallback(() => {
    try {
      if (isMobileViewport()) {
        window.open(CALENDLY_URL_WITH_UTM, "_blank", "noopener,noreferrer");
        return;
      }
      setOpen(true);

      // Fallback: se o modal não renderizar em ~1s, abre o link
      const safety = setTimeout(() => {
        const modalExists = !!document.querySelector(
          '.calendly-overlay, [data-calendly="modal"]'
        );
        if (!modalExists) {
          window.open(CALENDLY_URL_WITH_UTM, "_blank", "noopener,noreferrer");
        }
      }, 1000);

      setTimeout(() => clearTimeout(safety), 2000);
    } catch {
      window.open(CALENDLY_URL_WITH_UTM, "_blank", "noopener,noreferrer");
    }
  }, []);

  // marca no DOM quando abrir (ajuda o fallback a detectar)
  useEffect(() => {
    if (!open) return;
    const marker = document.createElement("div");
    marker.setAttribute("data-calendly", "modal");
    document.body.appendChild(marker);
    return () => marker.remove();
  }, [open]);

  return (
    <>
      <Tooltip title="Agendar reunião" placement="left">
        <Fab
          aria-label="Agendar reunião"
          onClick={openSmart}
          sx={{
            width: 56,
            height: 56,
            bgcolor: (t) => (t.palette.mode === "dark" ? "#2b8cff" : "#2b8cff"),
            color: "#fff",
            boxShadow: 6,
            "&:hover": { bgcolor: "#2474d1" },
          }}
        >
          <EventAvailableRounded sx={{ fontSize: 26 }} />
        </Fab>
      </Tooltip>

      <PopupModal
        url={CALENDLY_URL_WITH_UTM}
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={
          typeof document !== "undefined" ? document.body : undefined
        }
        prefill={{ name: "", email: "" }}
      />
    </>
  );
}
