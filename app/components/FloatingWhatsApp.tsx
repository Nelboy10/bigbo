"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/33600000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-green-500 text-white shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
