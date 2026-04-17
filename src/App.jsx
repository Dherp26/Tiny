import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronDown, Gift, Heart, Moon, Music4, Sparkles, Star, Sun } from "lucide-react";

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
  "You always know how to calm me when I’m stressed.",
  "The way you say I love you makes me feel safe and loved.",
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
    text: "The first time I came to Taiwan and we travelled together.",
    icon: Camera,
  },
  {
    title: "The Moment I Knew",
    text: "The moment I realized you were the one and I asked you to be mine.",
    icon: Heart,
  },
  {
    title: "Our Future Together",
    text: "Together always, loving each other, supporting each other, and growing old together.",
    icon: Gift,
  },
];

const ideaCards = [
  {
    title: "Photo Memory Wall",
    body: "Replace this with your real photos and little captions about why each memory matters.",
    icon: Camera,
  },
  {
    title: "Letter Section",
    body: "Write one honest message from your heart. Simple words usually hit the deepest.",
    icon: Music4,
  },
  {
    title: "Reasons I Love You",
    body: "Add personal details: her habits, her laugh, the way she supports you, your inside jokes.",
    icon: Sparkles,
  },
  {
    title: "Future Promises",
    body: "A sweet list of things you want to do together: trips, meals, sunsets, and quiet mornings.",
    icon: Moon,
  },
];

function App() {
  const [openLetter, setOpenLetter] = useState(false);
  const [showNight, setShowNight] = useState(false);
  const [currentReason, setCurrentReason] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("night", showNight);
  }, [showNight]);

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

  const sectionText = showNight ? "var(--text-soft-night)" : "var(--text-soft)";
  const cardBg = showNight ? "var(--card-night)" : "var(--card)";
  const border = showNight ? "var(--border-night)" : "#fbcfe8";

  const styles = {
    page: {
      minHeight: "100vh",
      overflow: "hidden",
      position: "relative",
      transition: "background 0.7s ease, color 0.7s ease",
    },
    fixedLayer: {
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      overflow: "hidden",
    },
    header: {
      position: "relative",
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      paddingTop: 24,
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      borderRadius: 999,
      border: `1px solid ${showNight ? "rgba(255,255,255,0.12)" : "#fbcfe8"}`,
      background: showNight ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.6)",
      padding: "10px 16px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      backdropFilter: "blur(10px)",
      fontSize: 14,
    },
    button: {
      borderRadius: 999,
      border: `1px solid ${showNight ? "rgba(255,255,255,0.12)" : "#fbcfe8"}`,
      padding: "14px 22px",
      background: showNight ? "rgba(255,255,255,0.08)" : "white",
      color: showNight ? "white" : "#111827",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    },
    primaryButton: {
      borderRadius: 999,
      border: "none",
      padding: "16px 24px",
      background: "linear-gradient(135deg, #ec4899, #f472b6)",
      color: "white",
      cursor: "pointer",
      boxShadow: "0 18px 40px rgba(236,72,153,0.28)",
      fontWeight: 700,
    },
    section: {
      position: "relative",
      zIndex: 10,
    },
    hero: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 32,
      alignItems: "center",
      paddingTop: 56,
      paddingBottom: 80,
    },
    title: {
      fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
      lineHeight: 1.02,
      fontWeight: 800,
      margin: 0,
    },
    text: {
      fontSize: "1.1rem",
      lineHeight: 1.8,
      color: sectionText,
      maxWidth: 620,
    },
    card: {
      position: "relative",
      borderRadius: 32,
      background: cardBg,
      border: `1px solid ${showNight ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.5)"}`,
      padding: 32,
      boxShadow: showNight ? "0 20px 60px rgba(0,0,0,0.4)" : "var(--shadow)",
      backdropFilter: "blur(18px)",
    },
    grid4: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 20,
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 24,
    },
    tile: {
      borderRadius: 24,
      background: showNight ? "rgba(255,255,255,0.05)" : "#fff7fb",
      border: `1px solid ${border}`,
      padding: 24,
      height: "100%",
      boxShadow: showNight ? "none" : "0 12px 30px rgba(236,72,153,0.08)",
    },
    miniTile: {
      borderRadius: 18,
      border: `1px solid ${border}`,
      padding: 16,
      textAlign: "center",
      background: showNight ? "rgba(255,255,255,0.05)" : "#fff7fb",
    },
    footer: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: "0 16px 48px",
      color: sectionText,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.fixedLayer}>
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, heart.opacity, 0] }}
            transition={{ duration: heart.duration, repeat: Infinity, delay: heart.delay, ease: "linear" }}
            style={{ position: "absolute", left: heart.left }}
          >
            <Heart size={heart.size} color="rgba(244,114,182,0.6)" fill="rgba(251,207,232,0.35)" />
          </motion.div>
        ))}

        {showNight &&
          stars.map((star) => (
            <motion.div
              key={star.id}
              style={{ position: "absolute", left: star.left, top: star.top }}
              initial={{ opacity: 0.2, scale: star.scale }}
              animate={{ opacity: [0.2, 0.95, 0.35], scale: [star.scale, star.scale + 0.25, star.scale] }}
              transition={{ repeat: Infinity, duration: 2.5 + star.delay, delay: star.delay }}
            >
              <Star size={12} color="#fef08a" fill="#fde68a" />
            </motion.div>
          ))}
      </div>

      <div className="container">
        <header style={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, letterSpacing: 0.3 }}
          >
            <Heart size={18} color="#ec4899" fill="#f9a8d4" />
            <span>A little place for you</span>
          </motion.div>

          <button onClick={() => setShowNight(!showNight)} style={styles.button}>
            {showNight ? <Sun size={16} /> : <Moon size={16} />}
            {showNight ? "Day Mode" : "Night Mode"}
          </button>
        </header>

        <section style={{ ...styles.section, ...styles.hero }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={styles.badge}>
              <Sparkles size={16} color="#ec4899" />
              <span>A little website made with a lot of love</span>
            </div>

            <div style={{ marginTop: 22 }}>
              <h1 style={styles.title}>To Helena, who made my heart feel at home.</h1>
              <p style={styles.text}>
                This is a small corner of the internet made just for you — a reminder that you are deeply loved, endlessly appreciated, and always worth celebrating.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
              <button style={styles.primaryButton} onClick={() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" })}>
                Read My Letter
              </button>
              <button style={styles.button} onClick={() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })}>
                See the Surprise
              </button>
            </div>

            <div style={{ paddingTop: 22 }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.28em", marginBottom: 12, color: showNight ? "#fbcfe8" : "#ec4899" }}>
                One thing I want you to remember
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReason}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  style={{ fontSize: "1.35rem", fontWeight: 600 }}
                >
                  {reasons[currentReason]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -24,
                background: "linear-gradient(90deg, rgba(251,207,232,0.35), rgba(253,242,248,0.15), rgba(244,114,182,0.2))",
                filter: "blur(42px)",
                borderRadius: 999,
              }}
            />
            <div style={styles.card}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: 999,
                    display: "grid",
                    placeItems: "center",
                    background: "#ffe4ef",
                  }}
                >
                  <Heart size={38} color="#ec4899" fill="#f9a8d4" />
                </motion.div>
              </div>

              <div style={{ textAlign: "center", marginTop: 20 }}>
                <h2 style={{ fontSize: "2rem", marginBottom: 10 }}>My favorite kind of magic</h2>
                <p style={{ ...styles.text, maxWidth: "100%", margin: "0 auto" }}>
                  Not the loud kind. The quiet kind. The kind that lives in your laugh, your care, your presence, and the way you make life brighter without even trying.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginTop: 24 }}>
                {[
                  "Your sleepy voice",
                  "Your tiny angry face",
                  "Our midnight calls",
                  "That café memory",
                ].map((item) => (
                  <motion.div key={item} whileHover={{ y: -4, scale: 1.02 }} style={styles.miniTile}>
                    <p style={{ margin: 0, fontWeight: 600 }}>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ display: "flex", justifyContent: "center", marginTop: -26, position: "relative", zIndex: 10 }}>
          <button
            onClick={() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: "transparent", border: "none", color: "inherit", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, opacity: 0.85 }}
          >
            <span>Scroll to continue</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
              <ChevronDown size={18} />
            </motion.div>
          </button>
        </motion.div>

        <section id="memories" style={{ ...styles.section, padding: "40px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.28em", marginBottom: 10, color: "#ec4899" }}>Our Story</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: 0 }}>A timeline made of feelings and memories</h2>
          </div>

          <div style={styles.grid4}>
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                  <div style={styles.tile}>
                    <div style={{ width: 48, height: 48, borderRadius: 18, background: "#ffe4ef", display: "grid", placeItems: "center" }}>
                      <Icon size={24} color="#ec4899" />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: 10 }}>{item.title}</h3>
                    <p style={{ ...styles.text, maxWidth: "100%", margin: 0 }}>{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section style={{ ...styles.section, padding: "28px 0 56px" }}>
          <div style={styles.grid2}>
            {ideaCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
                  <div style={styles.tile}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 18, background: "#ffe4ef", display: "grid", placeItems: "center" }}>
                        <Icon size={24} color="#ec4899" />
                      </div>
                      <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{card.title}</h3>
                    </div>
                    <p style={{ ...styles.text, maxWidth: "100%", margin: 0 }}>{card.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="letter" style={{ ...styles.section, paddingBottom: 32 }}>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ ...styles.card, maxWidth: 900, margin: "0 auto" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 24 }}>
                <div>
                  <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.28em", marginBottom: 8, color: "#ec4899" }}>For You</p>
                  <h2 style={{ margin: 0, fontSize: "2rem" }}>A letter from my heart</h2>
                </div>
                <button onClick={() => setOpenLetter(!openLetter)} style={styles.primaryButton}>
                  {openLetter ? "Close Letter" : "Open Letter"}
                </button>
              </div>

              <AnimatePresence>
                {openLetter && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} style={{ overflow: "hidden" }}>
                    <div style={{ display: "grid", gap: 18, fontSize: "1.05rem", lineHeight: 1.95, color: sectionText }}>
                      <p style={{ margin: 0 }}>
                        My love, this little website may just be made of code and colors, but every part of it carries something real: my gratitude for you, my admiration for you, and the softness you bring into my life.
                      </p>
                      <p style={{ margin: 0 }}>
                        Thank you for being the person who makes me feel understood, excited, and safe all at once. Thank you for your patience, your warmth, your laughter, and the thousand small ways you make life sweeter without asking for anything in return.
                      </p>
                      <p style={{ margin: 0 }}>
                        I don’t know if a screen can fully hold how much you mean to me, but I hope this can at least remind you of one thing: you are precious to my heart, and loving you feels like one of the most beautiful things I have ever known.
                      </p>
                      <p style={{ margin: 0 }}>
                        I choose you in the loud moments, in the quiet moments, in the uncertain moments, and in the happiest ones too. And I hope this made you smile, even just a little.
                      </p>
                      <p style={{ margin: 0, fontWeight: 700, color: "#ec4899" }}>Always yours. ❤</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        <section style={{ ...styles.section, padding: "48px 0 56px" }}>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div
              style={{
                borderRadius: 36,
                overflow: "hidden",
                border: `1px solid ${border}`,
                boxShadow: showNight ? "0 20px 60px rgba(0,0,0,0.35)" : "var(--shadow)",
                background: showNight
                  ? "linear-gradient(90deg, rgba(236,72,153,0.08), rgba(168,85,247,0.08), rgba(217,70,239,0.08))"
                  : "linear-gradient(90deg, #ffe4ef, #fff1f7, #fdf2f8)",
                padding: 36,
                textAlign: "center",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4.2 }}
                style={{
                  margin: "0 auto 22px",
                  width: 80,
                  height: 80,
                  borderRadius: 999,
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(255,255,255,0.7)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <Gift size={38} color="#ec4899" />
              </motion.div>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", margin: "0 0 14px" }}>You are my best thing.</h2>
              <p style={{ ...styles.text, maxWidth: 760, margin: "0 auto" }}>
                And this website can become even more special when you personalize it with your real names, photos, dates, inside jokes, and your own story.
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      <footer style={styles.footer}>
        <p>Made by Dharta, only for Helena.</p>
      </footer>
    </div>
  );
}

export default App;
