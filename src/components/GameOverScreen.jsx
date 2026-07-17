import React, { useEffect, useRef } from "react";
import { soundManager } from "../utils/soundManager";

export default function GameOverScreen({ playerName, reason, amount, questionsAnswered, totalQuestions, onRestart }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Play sound based on result: play grand KBC theme sound if they won the game or walked away with any positive prize amount (> 0)
    const hasWinnings = amount && amount !== "₹0";
    if (reason === "won" || hasWinnings) {
      soundManager.playTheme(false); // Play the authentic KBC theme song once
    } else if (reason === "timeout") {
      // Do nothing, alarm and hooter already played on GameScreen
    } else {
      soundManager.playWrong();
    }

    let animationFrameId;
    let handleResize;

    // Setup basic canvas confetti if won/high score/any winnings
    if (reason === "won" || hasWinnings) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const kbcColors = ["#ffd700", "#2ecc71", "#3498db", "#e67e22", "#ffea70", "#ff7979", "#2ecc71"];
        for (let i = 0; i < 150; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: kbcColors[Math.floor(Math.random() * kbcColors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
          });
        }

        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach((p, idx) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.tiltAngle);
            ctx.font = `bold ${Math.floor(p.r * 3.5)}px Outfit, sans-serif`;
            ctx.fillStyle = p.color;
            ctx.fillText("₹", 0, 0);
            ctx.restore();

            if (p.y > canvas.height) {
              p.x = Math.random() * canvas.width;
              p.y = -20;
              p.tilt = Math.random() * 10 - 5;
            }
          });
          animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        handleResize = () => {
          if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }
        };
        window.addEventListener("resize", handleResize);
      }
    }

    return () => {
      soundManager.stopAll();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [reason, amount]);

  let headline = "GAME OVER";
  let description = "Better luck next time! Keep learning digital marketing.";
  let badgeClass = "border-red-500";

  if (reason === "won") {
    headline = "MAHA CROREPATI!";
    description = `Incredible! ${playerName} has answered all questions correctly and won the ultimate prize!`;
    badgeClass = "border-yellow-500";
  } else if (reason === "quit") {
    headline = "GAME QUIT";
    description = `${playerName} decided to walk away with their winnings. Smart move!`;
    badgeClass = "border-blue-500";
  } else if (reason === "wrong") {
    headline = "WRONG ANSWER";
    description = "Unfortunately, that was the incorrect answer.";
    badgeClass = "border-red-500";
  } else if (reason === "timeout") {
    headline = "TIME'S UP";
    description = "You ran out of time!";
    badgeClass = "border-red-500";
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {(reason === "won" || (amount && amount !== "₹0")) && (
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
      )}
      
      <div className={`${reason === "won" ? "max-w-xl" : "max-w-md"} w-full glass-panel p-8 text-center welcome-card z-10`}>
        {/* Decorative corner borders */}
        <div className="corner-border-tl"></div>
        <div className="corner-border-tr"></div>
        <div className="corner-border-bl"></div>
        <div className="corner-border-br"></div>
 
        <div className={`gameover-badge ${badgeClass}`}>
          {reason === "won" ? `🏆 ${headline} 🏆` : headline}
        </div>
 
        <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text-muted)" }}>
          {reason === "won" ? "CONTESTANT CHAMPION" : "CONTESTANT"}
        </h2>
        <h1 className={`${reason === "won" ? "text-4xl text-white" : "text-3xl text-gold-primary"} font-extrabold mb-6 uppercase tracking-wider`}>
          {playerName}
        </h1>
 
        {reason === "won" ? (
          <div className="mt-4 mb-6 flex flex-col items-center justify-center w-full">
            <div className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)", fontWeight: 600 }}>Total Prize Won</div>
            <div className="text-7xl font-black text-gold-gradient tracking-wide leading-none py-4" style={{ filter: "drop-shadow(0 0 35px rgba(255,215,0,0.6))" }}>
              {amount}
            </div>
          </div>
        ) : amount === "₹0" ? (
          <div className="bg-black/40 rounded-xl p-6 border-white/5 mb-8 flex flex-col items-center justify-center gap-sm">
            <div className="text-xs uppercase tracking-wider mb-1 text-center" style={{ color: "var(--text-muted)", fontWeight: 600 }}>Total Prize Won</div>
            <div style={{ fontSize: "3.5rem", margin: "0.25rem 0" }} className="animate-bounce">🍫</div>
            <div className="text-xl font-bold text-gold-primary text-center uppercase tracking-wide">u win a chocolate</div>
          </div>
        ) : (
          <div className="bg-black/40 rounded-xl p-6 border-white/5 mb-8 flex flex-col gap-md text-left">
            <div className="text-center">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)", fontWeight: 600 }}>Total Prize Won</div>
              <div className="text-4xl font-extrabold text-gold-gradient tracking-wide">{amount}</div>
            </div>
          </div>
        )}

        <p className={`${reason === "won" ? "text-lg font-semibold" : "text-sm"} mb-8 lead-relaxed px-4`} style={{ color: "var(--text-light)" }}>
          {description}
        </p>

        <button
          onClick={onRestart}
          className="btn-start"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
