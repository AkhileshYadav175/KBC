import React, { useState, useEffect } from "react";
import { soundManager } from "../utils/soundManager";

const logoImg = "/KBC Gradient Logo.png";

export default function WelcomeScreen({ onStartGame }) {
  const [playerName, setPlayerName] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    soundManager.init();
    soundManager.playTheme();
    return () => {
      soundManager.stopAll();
    };
  }, []);

  const handleStart = (e) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    soundManager.init();
    soundManager.setMute(isMuted);
    soundManager.playLock();
    // Delay slightly to let lock sound play
    setTimeout(() => {
      onStartGame(playerName.trim(), isMuted);
    }, 800); // 800ms fits KBC lock sound timeline
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundManager.setMute(nextMuted);
    if (!nextMuted) {
      soundManager.playTheme();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full glass-panel p-8 text-center welcome-card">

        {/* Decorative corner borders */}
        <div className="corner-border-tl"></div>
        <div className="corner-border-tr"></div>
        <div className="corner-border-bl"></div>
        <div className="corner-border-br"></div>

        {/* JC Champion Rotating Logo */}
        <div className="kbc-logo-container animate-glow">
          <img
            src={logoImg}
            alt="JC Champion Logo"
            className="kbc-logo-image"
          />
        </div>

        <h1 className="text-3xl font-extrabold mb-2 tracking-wide">
          <span className="text-gold-gradient"> THE DIGITAL CHALLENGE</span>
        </h1>
        <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
          PUT YOUR IT KNOWLEDGE TO THE TEST IN THESE HIGH-STAKES ROUNDS
        </p>

        <form onSubmit={handleStart} className="max-w-sm mx-auto flex flex-col gap-md">
          <div>
            <label htmlFor="name-input" className="input-label mb-2">
              Enter Contestant Name
            </label>
            <input
              id="name-input"
              type="text"
              required
              placeholder="Candidate Name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="flex items-center justify-between settings-box">
            <span className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>Sound Effects & Music</span>
            <button
              type="button"
              onClick={toggleMute}
              className={`btn-sound ${isMuted ? "off" : "on"}`}
            >
              {isMuted ? "MUTED" : "SOUND ON"}
            </button>
          </div>

          <button
            type="submit"
            className="btn-start"
          >
            Start Game
          </button>
        </form>


      </div>
    </div>
  );
}
