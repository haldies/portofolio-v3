import React, { useEffect, useMemo, useRef, useState } from 'react';
import Button from '../ui/Button';
import Icon from '../AppIcon';
import {
  assistantCapabilities,
  assistantKnowledge,
  assistantQuickPrompts
} from '../../data/assistantKnowledge';

const initialMessages = [
  {
    id: 'assistant-initial',
    role: 'assistant',
    content:
      'Halo! Aku Haldies Assistant. Aku siap bantu jelasin projek, perjalanan profesional, dan opsi kolaborasi. Ketik pertanyaanmu atau pilih salah satu prompt cepat di bawah.',
    timestamp: new Date()
  }
];

const formatTime = (value) =>
  new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit' }).format(value);

const MessageBubble = ({ role, content, timestamp, suggestions }) => {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={[
          'relative max-w-[85%] rounded-2xl px-4 py-3 shadow-sm',
          'border',
          isUser
            ? 'bg-black text-white border-black/80'
            : 'bg-white text-black border-slate-200'
        ].join(' ')}
      >
        <p className="whitespace-pre-line text-sm leading-relaxed">{content}</p>
        <span
          className={`mt-2 block text-right text-xs font-medium ${
            isUser ? 'text-white/70' : 'text-slate-500'
          }`}
        >
          {formatTime(typeof timestamp === 'string' ? new Date(timestamp) : timestamp)}
        </span>
        {Array.isArray(suggestions) && suggestions.length > 0 && (
          <div className="mt-3 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Rekomendasi aksi lanjut
            </p>
            <ul className="space-y-1 text-sm text-black">
              {suggestions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const computeResponse = (userInput) => {
  const normalized = userInput.toLowerCase();

  const scored = assistantKnowledge.map((entry) => {
    if (entry.intent === 'default') {
      return { ...entry, score: 0 };
    }

    let score = 0;
    entry.keywords.forEach((keyword) => {
      if (normalized.includes(keyword)) {
        score += keyword.length;
      }
    });

    return { ...entry, score };
  });

  const bestMatch = scored
    .filter((entry) => entry.score > 0)
    .sort((a, b) => (a.score === b.score ? a.intent.localeCompare(b.intent) : b.score - a.score))[0];

  const fallback = assistantKnowledge.find((entry) => entry.intent === 'default');
  const selected = bestMatch || fallback;

  const suggestionMap = {
    projects_overview: [
      'Eksplor halaman AI Playground untuk demo interaktif.',
      'Gunakan filter kategori projek sesuai minatmu.',
      'Baca highlight projek terbaru di kartu paling atas.'
    ],
    project_maganhub: [
      'Kunjungi halaman detail projek MagangHub dari menu Projects.',
      'Siapkan pertanyaan tentang use case LLM jika ingin diskusi lanjutan.',
      'Hubungi Haldies lewat Contact Hub untuk kolaborasi produk serupa.'
    ],
    collaboration: [
      'Isi form di Contact & Collaboration Hub.',
      'Siapkan konteks proyek dan timeline yang kamu incar.',
      'Sertakan referensi dataset atau use case yang ingin dipecahkan.'
    ],
    education: [
      'Download modul pembelajaran di halaman Educational Content.',
      'Tandai sertifikasi mana yang relevan untuk kamu.',
      'Tanyakan rekomendasi jalur belajar lanjutan ke asisten.'
    ],
    skills: [
      'Cek rubrik Skills Assessment untuk detail skor kompetensi.',
      'Lihat project card yang menunjukkan skill tersebut dalam praktik.',
      'Minta rekomendasi roadmap adaptasi skill baru.'
    ],
    cv: [
      'Buka halaman Journey & Achievements.',
      'Scroll ke bagian Downloadable CV dan klik tombol unduh.',
      'Pastikan menyimpan versi terbaru per tanggal yang tertera.'
    ],
    social: [
      'Bookmark LinkedIn untuk update profesional terbaru.',
      'Ikuti TikTok/Medium untuk konten edukasi AI mingguan.',
      'Telusuri repositori GitHub untuk sample code tambahan.'
    ],
    achievements: [
      'Review badge Achievement di halaman Journey.',
      'Catat highlight yang relevan untuk kebutuhanmu.',
      'Minta klarifikasi lebih detail lewat form kontak.'
    ],
    availability: [
      'Gunakan prompt "Apa jenis kolaborasi yang sedang dicari?"',
      'Sampaikan informasi proyek via email supaya bisa ditindak cepat.',
      'Atur sesi diskusi awal melalui Contact Hub.'
    ]
  };

  return {
    content: selected?.response || fallback?.response,
    suggestions: suggestionMap[selected?.intent] || []
  };
};

const AssistantChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const chatBodyRef = useRef(null);
  const pendingReplyRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const container = chatBodyRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, isThinking, isOpen]);

  useEffect(() => {
    return () => window.clearTimeout(pendingReplyRef.current);
  }, []);

  const handleSendMessage = (preset) => {
    const rawText = typeof preset === 'string' ? preset : inputValue;
    const trimmedText = rawText.trim();

    if (!trimmedText) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmedText,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsThinking(true);

    window.clearTimeout(pendingReplyRef.current);
    const delay = Math.min(1200, 500 + Math.random() * 400);
    pendingReplyRef.current = window.setTimeout(() => {
      const { content, suggestions } = computeResponse(trimmedText);
      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content,
        suggestions,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsThinking(false);
    }, delay);
  };

  const activeSummary = useMemo(() => {
    const topics = new Set(
      messages
        .filter((item) => item.role === 'assistant')
        .map((item) => item.suggestions || [])
        .flat()
        .map((item) => {
          if (item.toLowerCase().includes('playground')) return 'Projects';
          if (item.toLowerCase().includes('journey')) return 'Journey';
          if (item.toLowerCase().includes('contact')) return 'Collaboration';
          if (item.toLowerCase().includes('educational')) return 'Education';
          return null;
        })
        .filter(Boolean)
    );

    return Array.from(topics);
  }, [messages]);

  return (
    <>
      <button
        type="button"
        aria-label="Buka asisten AI"
        className={[
          'fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full',
          'bg-black text-white shadow-xl transition hover:scale-105 focus-visible:outline-none',
          'focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
        ].join(' ')}
        onClick={() => setIsOpen(true)}
      >
        <Icon name="MessageCircle" size={26} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/30 px-4 pb-20 pt-24 sm:pt-12">
          <div
            role="dialog"
            aria-modal="true"
            className="relative flex w-full max-w-xl flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            <header className="flex items-start justify-between gap-3 border-b border-slate-200 px-6 py-5">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon name="Bot" size={22} />
                </div>
                <div>
                  <p className="text-base font-semibold text-black">Haldies Assistant</p>
                  <p className="text-sm text-slate-600">
                    AI Agent - bantu jelajahi projek, skill, dan kolaborasi.
                  </p>
                  {activeSummary.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeSummary.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-black"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-black hover:bg-slate-100"
                aria-label="Tutup asisten"
              >
                <Icon name="X" size={18} />
              </Button>
            </header>

            <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-4">
              <div className="grid gap-3 md:grid-cols-2">
                {assistantCapabilities.slice(0, 4).map(({ label, icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-black"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/10 text-black">
                      <Icon name={icon} size={18} />
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {assistantQuickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-black hover:text-white"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col">
              <div ref={chatBodyRef} className="scrollbar-brand flex-1 space-y-4 overflow-y-auto px-6 py-6">
                {messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    role={message.role}
                    content={message.content}
                    timestamp={message.timestamp}
                    suggestions={message.suggestions}
                  />
                ))}
                {isThinking && (
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black">
                      <Icon name="Bot" size={18} />
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-black shadow-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-black" />
                        Sedang memproses jawaban...
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <footer className="border-t border-slate-200 px-6 py-4">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-end gap-3"
                >
                  <label htmlFor="assistant-input" className="sr-only">
                    Tulis pertanyaan untuk asisten
                  </label>
                  <div className="flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm focus-within:border-black focus-within:ring-2 focus-within:ring-black/20">
                    <textarea
                      id="assistant-input"
                      rows={2}
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      placeholder="Contoh: Bisa jelasin proyek Contextual AI Assistant?"
                      className="w-full resize-none bg-transparent text-sm text-black outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    iconName="ArrowUpCircle"
                    className="rounded-2xl bg-black text-white hover:bg-black/80"
                    disabled={!inputValue.trim() || isThinking}
                  >
                    Kirim
                  </Button>
                </form>
                <p className="mt-2 text-xs text-slate-500">
                  Respons berdasarkan konten portofolio Haldies dan rekomendasi kolaborasi. Untuk detail teknis
                  lanjutan, gunakan halaman kontak.
                </p>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssistantChatbot;
