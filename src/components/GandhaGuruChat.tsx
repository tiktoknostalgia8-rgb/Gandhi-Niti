import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'guru';
  text: string;
}

export const GandhaGuruChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'guru',
      text: 'Namaskar. I am the Gandha Guru, your guide to traditional Kannauj ittar hydro-distillation, scent profiles, application methods, and guild policies.'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "How to apply pure ittar?",
    "How does Kannauj distillation work?",
    "Shipping & returns policy?",
    "Can ittar cure anxiety or insomnia?",
    "Difference between Mitti and Khus?"
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Deterministic response engine
    setTimeout(() => {
      const lower = query.toLowerCase();
      let reply = "";

      // Health / Medical Claim Check (MANDATORY DECLINE)
      if (
        lower.includes('cure') ||
        lower.includes('anxiety') ||
        lower.includes('insomnia') ||
        lower.includes('sleep') ||
        lower.includes('health') ||
        lower.includes('medic') ||
        lower.includes('heal') ||
        lower.includes('disease') ||
        lower.includes('therapy') ||
        lower.includes('therapeutic')
      ) {
        reply = "In accordance with GandhaNiti's strict transparency principles and regulatory ethics, we make zero medicinal, therapeutic, or health claims. Our hydro-distilled botanical ittars are formulated exclusively for personal scent appreciation, sensory joy, and mood-inspired daily rituals.";
      } else if (lower.includes('apply') || lower.includes('wear') || lower.includes('use')) {
        reply = "Traditional roll-on application: Apply a delicate swipe to warm pulse points—the inner wrists, behind the earlobes, and the collarbone. Because pure ittar contains zero alcohol or synthetic carrier evaporants, its botanical notes warm with body temperature and blossom steadily over hours. You can also lightly brush it onto natural cotton or silk hems.";
      } else if (lower.includes('ship') || lower.includes('courier') || lower.includes('delivery')) {
        reply = "We ship across India directly from our Kannauj craft cluster via insured couriers. Shipping is a flat ₹70, and complimentary (free) for orders above ₹2,500. Orders typically arrive within 3 to 6 business days.";
      } else if (lower.includes('return') || lower.includes('refund') || lower.includes('exchange')) {
        reply = "Under our Danda (Pillar VI) quality charter, we offer a 15-day return window for unopened flacons with intact wax seals. If a bottle arrives damaged or unsealed, contact customersupport.gandhiniti@gmail.com for an immediate complimentary batch replacement.";
      } else if (lower.includes('distill') || lower.includes('deg') || lower.includes('craft') || lower.includes('how it is made')) {
        reply = "Authentic ittar is hydro-distilled in Kannauj using heavy copper cauldrons (Degs) sealed with wet alluvial mud (Sarposh). Aromatics vaporize under gentle wood heat, travel down a hollow curved bamboo pipe (Chonga), and condense inside a copper receiver pot (Bapka) submerged in cold water, where the fragrance molecules marry into pure sandalwood oil.";
      } else if (lower.includes('difference') || lower.includes('mitti') || lower.includes('khus') || lower.includes('scents')) {
        reply = "Mitti Attar captures the petrichor of baked river clay meeting the first rain. Khus is distilled from wild riverbed vetiver roots, yielding a green, cooling reed scent. Gulab is dawn-plucked Damask rose. Chandan is pure creamy aged sandalwood. Shamama is an intricate secret courtly recipe of 40 spices and herbs.";
      } else if (lower.includes('authentic') || lower.includes('fake') || lower.includes('synthetic') || lower.includes('passport')) {
        reply = "Every GandhaNiti flacon comes with a verifiable Batch Passport QR code. By scanning the bottle seal, you can inspect the exact copper deg number, master distiller, distillation hours, harvest date, and GC-MS chromatography validation confirming zero synthetic phthalates (DEP).";
      } else {
        reply = "Thank you for asking. You can reach our founders directly at customersupport.gandhiniti@gmail.com or call +91 92667 46123. Would you like to explore our 6-question Scent Quiz or inspect our Saptanga statecraft model?";
      }

      setMessages(prev => [
        ...prev,
        {
          id: `guru-${Date.now()}`,
          sender: 'guru',
          text: reply
        }
      ]);
    }, 400);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#2E1B0F] hover:bg-[#5A3A22] text-[#F1E6CC] border-2 border-[#B8902B] rounded-[2px] shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8902B]"
          aria-label="Open Gandha Guru craft assistant"
        >
          <Sparkles className="w-4 h-4 text-[#D9B44A]" />
          <span className="font-serif text-xs font-bold tracking-wide">Gandha Guru FAQ</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[320px] sm:w-[380px] h-[480px] bg-[#F1E6CC] border-2 border-[#B8902B] rounded-[3px] shadow-2xl flex flex-col justify-between overflow-hidden text-[#2E1B0F]">
          {/* Header */}
          <div className="px-4 py-3 bg-[#2E1B0F] text-[#F1E6CC] flex items-center justify-between border-b border-[#B8902B]/40">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-[#B8902B] flex items-center justify-center bg-[#3D2515] text-[10px] text-[#D9B44A] font-bold">
                ग
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold leading-tight">Gandha Guru</h4>
                <p className="text-[10px] text-[#D9B44A] font-mono leading-none">Craft & Policy Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#E4D2A8] hover:text-white transition-colors"
              aria-label="Close Gandha Guru"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-2.5 rounded-[2px] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#8A5A36] text-[#F1E6CC]'
                      : 'bg-[#E4D2A8]/70 border border-[#B8902B]/40 text-[#2E1B0F]'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-1.5 bg-[#E4D2A8]/30 border-t border-[#5A3A22]/15 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[10px] px-2 py-0.5 bg-[#F1E6CC] border border-[#8A5A36]/40 hover:border-[#B8902B] text-[#5A3A22] rounded-[2px] whitespace-nowrap transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#F1E6CC] border-t border-[#5A3A22]/20 flex gap-2"
          >
            <input
              type="text"
              placeholder="Ask about distillation, notes, policy..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-[#E4D2A8]/30 border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
            />
            <button
              type="submit"
              className="p-2 bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] border border-[#8A5A36] rounded-[2px] transition-colors"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
