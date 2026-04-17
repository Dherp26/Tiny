import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Star, Gift, Music4, Camera, Moon, Sun, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const floatingHearts = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 12 + Math.random() * 22,
  duration: 8 + Math.random() * 8,
  delay: Math.random() * 5,
  opacity: 0.12 + Math.random() * 0.25,
}));

const reasons = [
  "I still smile when I remember our first call.",
  "You always know how to captivated to you when I’m stressed.",
  "The way you say I love you knows that I'm loved with the right person.",
  "The world feels softer when I’m with you.",
  "You turn small moments into beautiful stories.",
  "You are the kindest surprise life ever gave me.",
];

const timeline = [
  {
    title: "The Day We Met",
    text: "The moment everything started to feel different in the best possible way.",
    icon: Star,
  },
  {
    title: "Our First Date",
    text: "The first time I'm coming to Taiwan and we travelled together.",
    icon: Camera,
  },
  {
    title: "The Moment I Knew",
    text: "The moment I realized you were the one and I asked you to be mine.",
    icon: Heart,
  },
  {
    title: "Our Future Together",
    text: "Together always, loving each other, support, live and grow old together.",
    icon: Gift,
  },
];

const ideaCards = [
  {
    title: "Photo Memory Wall",
    body: "Replace these cards with your real photos and tiny captions about why each memory matters.",
    icon: Camera,
  },
  {
    title: "Letter Section",
    body: "Write one honest message from your heart — simple words usually hit the deepest.",
    icon: Music4,
  },
  {
    title: "Reasons I Love You",
    body: "Add personal details: her habits, her laugh, the way she supports you, your inside jokes.",
    icon: Sparkles,
  },
  {
    title: "Future Promises",
    body: "A sweet list of things you want to do together: trips, meals, sunsets, quiet mornings.",
    icon: Moon,
  },
];

export default function SurpriseGirlfriendWebsite() {
  const [openLetter, setOpenLetter] = useState(false);
  const [showNight, setShowNight] = useState(false);
  const [currentReason, setCurrentReason] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReason((prev) => (prev + 1) % reasons.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        scale: 0.5 + Math.random() * 1.4,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-700 ${showNight ? "bg-slate-950 text-white" : "bg-gradient-to-b from-rose-50 via-pink-50 to-white text-slate-800"}`}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, heart.opacity, 0] }}
            transition={{ duration: heart.duration, repeat: Infinity, delay: heart.delay, ease: "linear" }}
            className="absolute"
            style={{ left: heart.left }}
          >
            <Heart size={heart.size} className="fill-pink-300/40 text-pink-400/50" />
          </motion.div>
        ))}

        {showNight && stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{ left: star.left, top: star.top }}
            initial={{ opacity: 0.2, scale: star.scale }}
            animate={{ opacity: [0.2, 0.95, 0.35], scale: [star.scale, star.scale + 0.25, star.scale] }}
            transition={{ repeat: Infinity, duration: 2.5 + star.delay, delay: star.delay }}
          >
            <Star className="h-3 w-3 text-yellow-200 fill-yellow-100" />
          </motion.div>
        ))}
      </div>

      <header className="relative z-10 max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 font-semibold tracking-wide"
        >
          <Heart className="h-5 w-5 text-pink-500 fill-pink-400" />
          <span>A little place for you</span>
        </motion.div>
        <Button
          variant="outline"
          className="rounded-full border-pink-200/60 bg-white/50 backdrop-blur-md"
          onClick={() => setShowNight(!showNight)}
        >
          {showNight ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
          {showNight ? "Day Mode" : "Night Mode"}
        </Button>
      </header>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/70 bg-white/60 px-4 py-2 text-sm shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-pink-500" />
              A little website made with a lot of love
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                To Helena, who made my heart feel at home.
              </h1>
              <p className={`text-lg md:text-xl max-w-xl leading-relaxed ${showNight ? "text-slate-300" : "text-slate-600"}`}>
                This is a small corner of the internet made just for you — a reminder that you are deeply loved, endlessly appreciated, and always worth celebrating.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full px-6 py-6 text-base shadow-lg"
              >
                Read My Letter
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full px-6 py-6 text-base"
              >
                See the Surprise
              </Button>
            </div>

            <div className="pt-4">
              <p className={`text-sm uppercase tracking-[0.28em] mb-3 ${showNight ? "text-pink-200" : "text-pink-500"}`}>
                One thing I want you to remember
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReason}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className={`text-xl font-medium ${showNight ? "text-white" : "text-slate-700"}`}
                >
                  {reasons[currentReason]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-pink-200/40 via-rose-200/30 to-fuchsia-200/40 blur-3xl rounded-full" />
            <Card className={`relative rounded-[2rem] border-white/40 shadow-2xl ${showNight ? "bg-white/10 border-white/10 backdrop-blur-xl" : "bg-white/75 backdrop-blur-xl"}`}>
              <CardContent className="p-8 md:p-10 space-y-6">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mx-auto"
                >
                  <Heart className="h-10 w-10 text-pink-500 fill-pink-400" />
                </motion.div>

                <div className="text-center space-y-3">
                  <h2 className="text-2xl md:text-3xl font-semibold">My favorite kind of magic</h2>
                  <p className={`${showNight ? "text-slate-200" : "text-slate-600"}`}>
                    Not the loud kind. The quiet kind. The kind that lives in your laugh, your care, your presence, and the way you make life brighter without even trying.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    "Your sleepy voice",
                    "Your tiny angry face",
                    "Our midnight calls",
                    "That café memory",
                  ].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`rounded-2xl p-4 text-center border ${showNight ? "bg-white/5 border-white/10" : "bg-pink-50 border-pink-100"}`}
                    >
                      <p className="font-medium">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-1 text-sm opacity-80 hover:opacity-100 transition"
          >
            <span>Scroll to continue</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </button>
        </motion.div>
      </section>

      <section id="memories" className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.28em] text-pink-500 text-sm mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold">A timeline made of feelings and memories</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className={`rounded-3xl h-full shadow-lg border ${showNight ? "bg-white/5 border-white/10" : "bg-white/80 border-pink-100"}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className={`${showNight ? "text-slate-300" : "text-slate-600"}`}>{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {ideaCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <Card className={`rounded-[2rem] h-full shadow-xl border ${showNight ? "bg-white/5 border-white/10" : "bg-white/85 border-pink-100"}`}>
                  <CardContent className="p-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-pink-500" />
                      </div>
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <p className={`${showNight ? "text-slate-300" : "text-slate-600"}`}>{card.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="letter" className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className={`rounded-[2rem] shadow-2xl border ${showNight ? "bg-white/5 border-white/10" : "bg-gradient-to-br from-white to-rose-50 border-pink-100"}`}>
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <p className="uppercase tracking-[0.28em] text-pink-500 text-sm mb-2">For You</p>
                  <h2 className="text-3xl font-bold">A letter from my heart</h2>
                </div>
                <Button onClick={() => setOpenLetter(!openLetter)} className="rounded-full px-5">
                  {openLetter ? "Close Letter" : "Open Letter"}
                </Button>
              </div>

              <AnimatePresence>
                {openLetter && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`space-y-5 text-lg leading-8 ${showNight ? "text-slate-200" : "text-slate-700"}`}>
                      <p>
                        My love, this little website may just be made of code and colors, but every part of it carries something real: my gratitude for you, my admiration for you, and the softness you bring into my life.
                      </p>
                      <p>
                        Thank you for being the person who makes me feel understood, excited, and safe all at once. Thank you for your patience, your warmth, your laughter, and the thousand small ways you make life sweeter without asking for anything in return.
                      </p>
                      <p>
                        I don’t know if a screen can fully hold how much you mean to me, but I hope this can at least remind you of one thing: you are precious to my heart, and loving you feels like one of the most beautiful things I have ever known.
                      </p>
                      <p>
                        I choose you in the loud moments, in the quiet moments, in the uncertain moments, and in the happiest ones too. And I hope this made you smile, even just a little.
                      </p>
                      <p className="font-semibold text-pink-500">Always yours. ❤</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Card className={`rounded-[2.2rem] overflow-hidden border shadow-2xl ${showNight ? "bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-fuchsia-500/10 border-white/10" : "bg-gradient-to-r from-rose-100 via-pink-50 to-fuchsia-100 border-pink-100"}`}>
            <CardContent className="p-8 md:p-12 text-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4.2 }}
                className="mx-auto w-20 h-20 rounded-full bg-white/70 flex items-center justify-center shadow-lg mb-6"
              >
                <Gift className="h-10 w-10 text-pink-500" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">You are my best thing.</h2>
              <p className={`max-w-2xl mx-auto text-lg leading-8 ${showNight ? "text-slate-200" : "text-slate-700"}`}>
                And this website can become even more special when you personalize it with your real names, photos, dates, inside jokes, and your own story.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <footer className={`relative z-10 text-center px-6 pb-12 ${showNight ? "text-slate-400" : "text-slate-500"}`}>
        <p>Made by Dharta, only for Helena.</p>
      </footer>
    </div>
  );
}
