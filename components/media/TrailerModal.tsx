"use client";
import { createPortal } from "react-dom";

interface TrailerModalProps {
  trailerKey: string;
  setIsOpen: (arg0: boolean) => void;
}

export default function TrailerModal({
  trailerKey,
  setIsOpen,
}: TrailerModalProps) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <div className="w-[1200px] aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>,
    document.body,
  );
}
