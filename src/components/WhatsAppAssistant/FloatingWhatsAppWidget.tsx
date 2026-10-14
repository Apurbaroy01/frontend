"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import WhatsAppAssistant from "./WhatsAppAssistant";

export default function FloatingWhatsAppWidget() {
  const [showFloatingBot, setShowFloatingBot] = useState(false);

  return (
    <>
      {/* -- FLOATING WHATSAPP AI ASSISTANT WIDGET -- */}
      <AnimatePresence>
        {showFloatingBot && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 w-[360px] max-w-[calc(100vw-2rem)] h-[min(580px,calc(100vh-6rem))] z-[99999] shadow-2xl rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#0b141a]"
          >
            <button
              onClick={() => setShowFloatingBot(false)}
              className="absolute top-2 right-2 z-50 bg-[#202c33] text-[#8696a0] hover:text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
              title="Close Chat"
            >
              <IoClose size={16} />
            </button>
            <WhatsAppAssistant />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setShowFloatingBot(!showFloatingBot)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[99998] bg-[#00a884] hover:bg-[#008f70] text-white px-5 py-3 rounded-full font-bold text-xs shadow-xl flex items-center gap-2.5 transition-all duration-200 border border-white/20"
      >
        {showFloatingBot ? (
          <IoClose size={18} />
        ) : (
          <BsWhatsapp size={18} />
        )}
        <span>{showFloatingBot ? "Close AI Chat" : "Chat WhatsApp AI"}</span>
        {!showFloatingBot && (
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
        )}
      </motion.button>
    </>
  );
}
