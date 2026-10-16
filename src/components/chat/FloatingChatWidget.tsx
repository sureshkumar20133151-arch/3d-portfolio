"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, ExternalLink, Sparkles, User } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Vanakkam! 👋 I am Suresh's AI Partner at **Solo Developer** (Madurai).\n\nAsk me anything about our **7-day website delivery**, pricing packages, portfolio projects, or custom AI solutions!",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSessionId("web_" + Math.random().toString(36).substring(2, 9));
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: "msg_" + Date.now(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId }),
      });

      const data = await res.json();
      const replyText =
        data.reply ||
        "I'm here to help! Would you like to connect directly with Suresh on WhatsApp at +91 93615 99097?";

      const botMsg: ChatMessage = {
        id: "bot_" + Date.now(),
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: "bot_err_" + Date.now(),
          sender: "bot",
          text: "I'm having trouble reaching the server right now. You can reach Suresh directly on WhatsApp at **+91 93615 99097**!",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    "Website Packages & Pricing?",
    "How does the 7-day delivery work?",
    "Do you build AI WhatsApp bots?",
    "Can I see your portfolio projects?",
  ];

  const formatText = (content: string) => {
    // Basic formatting for **bold** or *italic*
    const parts = content.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <strong key={index} className="font-semibold text-white">{part.slice(1, -1)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[92vw] sm:w-[380px] h-[520px] max-h-[80vh] flex flex-col bg-zinc-950/95 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-b border-zinc-800 p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-zinc-950 shadow-md font-bold text-sm">
                  <Bot className="w-5 h-5 text-zinc-950" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-zinc-950 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white flex items-center gap-1.5 leading-none">
                  Suresh's AI Assistant
                  <Sparkles className="w-3 h-3 text-emerald-400 inline" />
                </h3>
                <span className="text-[11px] text-zinc-400">Solo Developer • Online 24/7</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="https://wa.me/919361599097?text=Hi%20Suresh,%20I%20am%20chatting%20from%20solodeveloper.pro!"
                target="_blank"
                rel="noopener noreferrer"
                title="Open WhatsApp"
                className="p-1.5 text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-800"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.sender === "user"
                      ? "bg-emerald-600 text-white rounded-br-none"
                      : "bg-zinc-900/90 text-zinc-200 border border-zinc-800/80 rounded-bl-none shadow-sm whitespace-pre-wrap"
                  }`}
                >
                  {formatText(m.text)}
                  <div
                    className={`text-[9px] mt-1 text-right ${
                      m.sender === "user" ? "text-emerald-200" : "text-zinc-500"
                    }`}
                  >
                    {m.timestamp}
                  </div>
                </div>
                {m.sender === "user" && (
                  <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-zinc-400 text-xs py-1">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-3.5 py-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts (if only 1 or 2 messages) */}
          {messages.length <= 3 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5">
              {quickPrompts.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  disabled={isLoading}
                  className="text-[11px] bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white px-2.5 py-1 rounded-full transition-colors text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* WhatsApp Direct Banner */}
          <div className="bg-emerald-950/40 border-t border-emerald-900/40 px-3 py-1.5 flex items-center justify-between text-[11px] text-emerald-300">
            <span className="flex items-center gap-1.5">
              <FaWhatsapp className="w-3.5 h-3.5 text-emerald-400" />
              Prefer human WhatsApp chat?
            </span>
            <a
              href="https://wa.me/919361599097?text=Hi%20Suresh,%20I%20am%20interested%20in%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline font-semibold flex items-center gap-0.5"
            >
              Open <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-zinc-950 border-t border-zinc-800/80 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about website packages, pricing..."
              disabled={isLoading}
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-zinc-950 p-2 rounded-xl transition-all font-medium shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 active:scale-95"
        aria-label="Toggle AI Chat"
      >
        <span className="relative flex items-center justify-center">
          <FaWhatsapp className="w-5 h-5 text-zinc-950" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-tight">
          {isOpen ? "Close Chat" : "Chat with AI & WhatsApp"}
        </span>
      </button>
    </div>
  );
}
