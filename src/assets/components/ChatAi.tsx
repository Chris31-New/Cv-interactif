import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../services/api"
import {
  Bot,
  Send,
  X,
  Sparkles,
  User,
  Loader2,
} from "lucide-react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Bonjour 👋 Je suis AURA, l'assistant IA de Christophe. Pose-moi une question sur son parcours, ses compétences ou ses projets.",
  },
];

export default function ChatIA() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] =
    useState<Message[]>(initialMessages);

  const sendMessage = async () => {
    const message = input.trim();

    if (!message || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

  api
  .post("/chat", { message })
  .then((response) => {
    const assistantMessage: Message = {
      id: Date.now(),
      role: "assistant",
      content: response.data.message,
    };

    setMessages((prev) => [...prev, assistantMessage]);
  })
  .catch((error) => {
    console.error("AURA error:", error);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "assistant",
        content:
          "Désolé, je rencontre actuellement un problème de connexion avec mon intelligence artificielle.",
      },
    ]);
  })
  .finally(() => setLoading(false));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}

      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border
          border-indigo-400/30
          bg-indigo-600
          text-white
          shadow-[0_0_35px_rgba(99,102,241,0.55)]
        "
        aria-label="Ouvrir AURA"
      >
        {open ? <X size={25} /> : <Bot size={28} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              bottom-28
              right-6
              z-50
              flex
              h-[600px]
              w-[390px]
              max-w-[calc(100vw-32px)]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-slate-950/80
              shadow-[0_0_80px_rgba(99,102,241,0.25)]
              backdrop-blur-2xl
            "
          >
            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-indigo-600/20
                    text-indigo-400
                  "
                >
                  <Sparkles size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    AURA
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                    <span className="text-xs text-slate-400">
                      Assistant IA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}

            <div
              className="
                flex-1
                space-y-4
                overflow-y-auto
                px-4
                py-5
              "
            >
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                />
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20">
                    <Bot
                      size={16}
                      className="text-indigo-400"
                    />
                  </div>

                  <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3">
                    <Loader2
                      size={18}
                      className="animate-spin text-indigo-400"
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggestions */}

            <div className="flex gap-2 overflow-x-auto px-4 pb-3">
              <Suggestion
                text="Parle-moi de Christophe"
                onClick={() =>
                  setInput("Parle-moi de Christophe")
                }
              />

              <Suggestion
                text="Ses compétences ?"
                onClick={() =>
                  setInput("Quelles sont ses compétences ?")
                }
              />

              <Suggestion
                text="Parle-moi d'Evenly"
                onClick={() =>
                  setInput("Parle-moi du projet Evenly")
                }
              />
            </div>

            {/* Input */}

            <div
              className="
                border-t
                border-white/10
                bg-black/20
                p-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-2
                  transition
                  focus-within:border-indigo-500/50
                  focus-within:shadow-[0_0_20px_rgba(99,102,241,0.12)]
                "
              >
                <input
                  type="text"
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Posez une question..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-500
                  "
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-indigo-600
                    text-white
                    transition
                    hover:bg-indigo-500
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  <Send size={17} />
                </motion.button>
              </div>

              <p className="mt-2 text-center text-[10px] text-slate-600">
                AURA • Assistant IA du portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================
   MESSAGE
========================= */

function MessageBubble({
  message,
}: {
  message: Message;
}) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[85%] items-end gap-2 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            ${
              isUser
                ? "bg-indigo-600/30 text-indigo-300"
                : "bg-purple-500/20 text-purple-300"
            }
          `}
        >
          {isUser ? (
            <User size={15} />
          ) : (
            <Bot size={15} />
          )}
        </div>

        <div
          className={`
            rounded-2xl
            px-4
            py-3
            text-sm
            leading-relaxed
            ${
              isUser
                ? "rounded-br-md bg-indigo-600 text-white"
                : "rounded-bl-md border border-white/10 bg-white/[0.04] text-slate-200"
            }
          `}
        >
          {message.content}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   SUGGESTION
========================= */

function Suggestion({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        shrink-0
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        px-3
        py-2
        text-xs
        text-slate-400
        transition
        hover:border-indigo-500/40
        hover:bg-indigo-500/10
        hover:text-indigo-300
      "
    >
      {text}
    </button>
  );
}