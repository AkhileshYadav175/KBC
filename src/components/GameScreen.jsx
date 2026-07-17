import React, { useState, useEffect, useRef } from "react";
import { prizeMoneyMap, safeZoneIndices } from "../data/questions";
import { soundManager } from "../utils/soundManager";

const logoImg = "/KBC Gradient Logo.png";

export default function GameScreen({ playerName, initialMuted, questions, onGameOver }) {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(() => {
    const saved = localStorage.getItem("kbc_game_screen_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.currentLevelIndex === "number") {
          return parsed.currentLevelIndex;
        }
      } catch (e) {}
    }
    return 0;
  });
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [isShowingResult, setIsShowingResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("kbc_game_screen_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.timeLeft !== undefined) {
          return parsed.timeLeft;
        }
      } catch (e) {}
    }
    return 30;
  });
  const [isRoundStarted, setIsRoundStarted] = useState(false);
  const [showPrizeTreeMobile, setShowPrizeTreeMobile] = useState(false);
  
  // Lifeline statuses: 'unused', 'used'
  const [lifelines, setLifelines] = useState(() => {
    const saved = localStorage.getItem("kbc_game_screen_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.lifelines) {
          return parsed.lifelines;
        }
      } catch (e) {}
    }
    return {
      fiftyFifty: "unused",
      audiencePoll: "unused",
      phoneFriend: "unused",
      askExpert: "unused"
    };
  });

  const [disabledOptions, setDisabledOptions] = useState(() => {
    const saved = localStorage.getItem("kbc_game_screen_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.disabledOptions) {
          return parsed.disabledOptions;
        }
      } catch (e) {}
    }
    return [];
  });
  const [activeModal, setActiveModal] = useState(null); // 'poll', 'phone', 'expert', 'quit'
  const [modalData, setModalData] = useState(null);
  const [isTimeOutActive, setIsTimeOutActive] = useState(false);
  const [showHelplineQuestion, setShowHelplineQuestion] = useState(false);
  const [showSafeZoneBanner, setShowSafeZoneBanner] = useState(false);

  const isFirstRender = useRef(true);
  const lastActiveModalRef = useRef(null);

  const currentQuestion = questions[currentLevelIndex];
  const isTimerActive = true; // Timer active for all levels

  // Determine initial timer value based on level
  const getTimerForLevel = (levelIndex) => {
    if (playerName.trim().toLowerCase() === "khushi soni") {
      return 60; // Khushi Soni gets 60 seconds for all questions
    }
    if (levelIndex < 5) return 30; // Level 1-5: 30s
    if (levelIndex < 10) return 45; // Level 6-10: 45s
    return 60; // Level 11-15: 60s
  };

  // Sync state changes with localStorage
  useEffect(() => {
    const stateToSave = {
      currentLevelIndex,
      lifelines,
      disabledOptions,
      timeLeft
    };
    localStorage.setItem("kbc_game_screen_state", JSON.stringify(stateToSave));
  }, [currentLevelIndex, lifelines, disabledOptions, timeLeft]);

  // Sound and background tension triggers
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      const saved = localStorage.getItem("kbc_game_screen_state");
      if (!saved) {
        setTimeLeft(getTimerForLevel(currentLevelIndex));
      }
      if (currentLevelIndex > 0) {
        soundManager.playNextQuestionIntro(true);
      }
      return;
    }

    setIsRoundStarted(false);
    setTimeLeft(getTimerForLevel(currentLevelIndex));
    setSelectedAnswerIndex(null);
    setIsAnswerLocked(false);
    setIsShowingResult(false);
    setDisabledOptions([]);
    setIsTimeOutActive(false);
    setIsSubmitting(false);
    soundManager.stopClock();
    soundManager.stopLock();

    if (currentLevelIndex > 0) {
      soundManager.playNextQuestionIntro(true);
    }

    return () => {
      soundManager.stopBackgroundTension();
      soundManager.stopClock();
      soundManager.stopLock();
      soundManager.stopNextQuestionIntro();
    };
  }, [currentLevelIndex]);

  // Play theme song ONLY on Question 1 (Level 1) when the game screen loads
  useEffect(() => {
    if (currentLevelIndex === 0) {
      soundManager.playTheme(false);
    }
  }, [currentLevelIndex]);

  const handleStartRound = () => {
    setIsRoundStarted(true);
    soundManager.stopNextQuestionIntro();
    soundManager.stopAll(); // Stops the intro theme sound instantly if it's still playing
    if (isTimerActive) {
      soundManager.startClock();
    }
  };

  // Pause and resume clock sound when activeModal (lifeline modal) opens or closes
  useEffect(() => {
    if (activeModal) {
      soundManager.pauseClock();
    } else if (isRoundStarted && !isAnswerLocked && !isShowingResult) {
      soundManager.resumeClock();
    }
  }, [activeModal, isRoundStarted, isAnswerLocked, isShowingResult]);

  // Reset helpline modal states when modal is closed
  useEffect(() => {
    if (activeModal) {
      lastActiveModalRef.current = activeModal;
    } else {
      // Modal was closed. Check if it was a helpline modal
      const wasHelpline = ["poll", "phone", "expert"].includes(lastActiveModalRef.current);
      if (wasHelpline) {
        if (isTimerActive && timeLeft !== null && timeLeft < 15) {
          setTimeLeft(15);
        }
      }
      lastActiveModalRef.current = null;
      setShowHelplineQuestion(false);
    }
  }, [activeModal, isTimerActive, timeLeft]);

  // Timer Tick Interval
  useEffect(() => {
    if (!isRoundStarted || !isTimerActive || timeLeft === null || isAnswerLocked || isShowingResult || activeModal || isTimeOutActive) return;

    // Dynamically adjust volume of clock ticks: louder when 3, 2, 1 seconds remain
    if (timeLeft <= 3) {
      soundManager.setClockVolume(0.95);
    } else {
      soundManager.setClockVolume(0.55);
    }

    if (timeLeft <= 5) {
      soundManager.stopBackgroundTension();
    }

    if (timeLeft <= 0) {
      soundManager.stopClock();
      setIsTimeOutActive(true);
      soundManager.playAlarm(() => {
        soundManager.playHooter();
        setTimeout(() => {
          onGameOver("timeout", getWinningsOnLoss(), currentLevelIndex, questions.length);
        }, 2000);
      });
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isTimerActive, isAnswerLocked, isShowingResult, activeModal, isRoundStarted, isTimeOutActive]);

  // Helper: Get fallback prize money on incorrect answer
  const getWinningsOnLoss = () => {
    // Drop to 2 levels below the reached safe zone
    if (currentLevelIndex < 5) {
      return "₹0";
    }
    if (currentLevelIndex < 10) {
      return prizeMoneyMap[2]; // index 2 = "₹300"
    }
    return prizeMoneyMap[7]; // index 7 = "₹800"
  };

  const handleSelectOption = (idx) => {
    if (!isRoundStarted || isAnswerLocked || disabledOptions.includes(idx) || isTimeOutActive) return;
    setSelectedAnswerIndex(idx);
    setIsAnswerLocked(true);
    soundManager.stopBackgroundTension();
    soundManager.stopClock();
    soundManager.playLock(true); // Loop lock sound during discussion
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswerIndex === null || isTimeOutActive || isSubmitting) return;
    
    setIsSubmitting(true);

    // suspense delay before revealing correctness (3.2 seconds allows the lock tune to play)
    setTimeout(() => {
      soundManager.stopLock(); // Stop looping lock sound
      setIsShowingResult(true);
      setIsSubmitting(false);
      if (selectedAnswerIndex === currentQuestion.answerIndex) {
        soundManager.playCorrect();
        if (safeZoneIndices.includes(currentLevelIndex) && currentLevelIndex !== 14) {
          setShowSafeZoneBanner(true);
          setTimeout(() => setShowSafeZoneBanner(false), 5000);
        }
      } else {
        soundManager.playWrong();
      }
    }, 3200);
  };

  const handleNextQuestion = () => {
    if (currentLevelIndex === questions.length - 1) {
      // Won everything!
      onGameOver("won", prizeMoneyMap[questions.length - 1], questions.length, questions.length);
    } else {
      setCurrentLevelIndex((prev) => prev + 1);
    }
  };

  const handleQuitGame = () => {
    soundManager.stopBackgroundTension();
    soundManager.stopLock();
    const winnings = currentLevelIndex === 0 ? "₹0" : prizeMoneyMap[currentLevelIndex - 1];
    onGameOver("quit", winnings, currentLevelIndex, questions.length);
  };

  // --- LIFELINES IMPLEMENTATION ---

  const handleFiftyFifty = () => {
    if (lifelines.fiftyFifty !== "unused" || isAnswerLocked) return;
    soundManager.playLifeline();

    const correctIdx = currentQuestion.answerIndex;
    const incorrectIndices = [0, 1, 2, 3].filter((idx) => idx !== correctIdx);
    
    // Pick 2 random incorrect indices to disable
    const disabled = [];
    while (disabled.length < 2) {
      const randIdx = incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)];
      if (!disabled.includes(randIdx)) {
        disabled.push(randIdx);
      }
    }

    setDisabledOptions(disabled);
    setLifelines((prev) => ({ ...prev, fiftyFifty: "used" }));
  };

  const handleAudiencePoll = () => {
    if (lifelines.audiencePoll !== "unused" || isAnswerLocked) return;
    soundManager.playLifeline();

    const correctIdx = currentQuestion.answerIndex;
    let votes = [0, 0, 0, 0];

    // Determine weight based on difficulty
    let correctWeight = 70;
    if (currentQuestion.difficulty === "easy-medium") correctWeight = 55;
    if (currentQuestion.difficulty === "medium") correctWeight = 45;
    if (currentQuestion.difficulty === "advanced") correctWeight = 38;

    // Adjust if options are disabled by 50:50
    const activeIndices = [0, 1, 2, 3].filter((idx) => !disabledOptions.includes(idx));

    if (disabledOptions.length > 0) {
      const incorrectActive = activeIndices.filter((idx) => idx !== correctIdx)[0];
      const correctShare = Math.min(92, correctWeight + Math.floor(Math.random() * 8));
      votes[correctIdx] = correctShare;
      votes[incorrectActive] = 100 - correctShare;
    } else {
      let sum = 0;
      const correctShare = correctWeight + Math.floor(Math.random() * 10) - 5;
      votes[correctIdx] = correctShare;
      sum += correctShare;

      const remaining = 100 - sum;
      const r1 = Math.floor(Math.random() * (remaining * 0.6));
      const r2 = Math.floor(Math.random() * (remaining - r1));
      const r3 = remaining - r1 - r2;

      let remIndex = 0;
      [0, 1, 2, 3].forEach((idx) => {
        if (idx !== correctIdx) {
          if (remIndex === 0) votes[idx] = r1;
          else if (remIndex === 1) votes[idx] = r2;
          else votes[idx] = r3;
          remIndex++;
        }
      });
    }

    setModalData(votes);
    setActiveModal("poll");
    setLifelines((prev) => ({ ...prev, audiencePoll: "used" }));
  };

  const handlePhoneFriend = () => {
    if (lifelines.phoneFriend !== "unused" || isAnswerLocked) return;
    soundManager.playLifeline();

    const correctIdx = currentQuestion.answerIndex;
    const optionLetters = ["A", "B", "C", "D"];
    const friendGuess = currentQuestion.options[correctIdx];

    let dialogText = "";
    const rand = Math.random() * 100;
    
    let confidence = 85;
    if (currentQuestion.difficulty === "easy-medium") confidence = 70;
    if (currentQuestion.difficulty === "medium") confidence = 55;
    if (currentQuestion.difficulty === "advanced") confidence = 40;

    if (rand <= confidence) {
      dialogText = `Friend: "Hey! I'm pretty sure the answer is Option ${optionLetters[correctIdx]}: '${friendGuess}'. I read about this in a digital marketing course recently!"`;
    } else {
      const activeIncorrect = [0, 1, 2, 3].filter(
        (idx) => idx !== correctIdx && !disabledOptions.includes(idx)
      );
      const fallbackIdx = activeIncorrect.length > 0 ? activeIncorrect[0] : correctIdx;
      dialogText = `Friend: "Oh, this is a tricky one. I am not completely sure, but I have a strong feeling it might be Option ${optionLetters[fallbackIdx]}: '${currentQuestion.options[fallbackIdx]}'..."`;
    }

    setModalData(dialogText);
    setActiveModal("phone");
    setLifelines((prev) => ({ ...prev, phoneFriend: "used" }));
  };

  const handleAskExpert = () => {
    if (lifelines.askExpert !== "unused" || isAnswerLocked) return;
    soundManager.playLifeline();

    const correctIdx = currentQuestion.answerIndex;
    const optionLetters = ["A", "B", "C", "D"];
    
    let dialogText = "";
    if (Math.random() * 100 < 95) {
      dialogText = `Expert: "Looking at the options, the clear answer is Option ${optionLetters[correctIdx]}: '${currentQuestion.options[correctIdx]}'. Let me explain: this is a fundamental concept in digital marketing strategy because it directly impacts ROI and user experience."`;
    } else {
      dialogText = `Expert: "This is a debated topic, but typically Option ${optionLetters[correctIdx]}: '${currentQuestion.options[correctIdx]}' is accepted as correct in standardized digital advertising environments."`;
    }

    setModalData(dialogText);
    setActiveModal("expert");
    setLifelines((prev) => ({ ...prev, askExpert: "used" }));
  };

  const handleShowHelplineQuestion = () => {
    setShowHelplineQuestion(true);
  };

  // --- RENDERING CLOCK TICKING BEADS ---
  const renderLeftBeads = () => {
    const totalBeads = 12;
    const totalLevelTime = getTimerForLevel(currentLevelIndex) || 30;
    const ratio = timeLeft / totalLevelTime;
    const activeCount = Math.ceil(ratio * totalBeads);
    const colors = [
      "green", "green", "green", "green",
      "yellow", "yellow", "yellow",
      "orange", "orange",
      "red", "red", "red"
    ];
    
    return colors.map((color, idx) => {
      const isActive = idx >= (totalBeads - activeCount);
      return (
        <div
          key={`left-${idx}`}
          className={`timer-bead ${isActive ? color : "inactive"}`}
        />
      );
    });
  };

  const renderRightBeads = () => {
    const totalBeads = 12;
    const totalLevelTime = getTimerForLevel(currentLevelIndex) || 30;
    const ratio = timeLeft / totalLevelTime;
    const activeCount = Math.ceil(ratio * totalBeads);
    const colors = [
      "red", "red", "red",
      "orange", "orange",
      "yellow", "yellow", "yellow",
      "green", "green", "green", "green"
    ];

    return colors.map((color, idx) => {
      const isActive = idx < activeCount;
      return (
        <div
          key={`right-${idx}`}
          className={`timer-bead ${isActive ? color : "inactive"}`}
        />
      );
    });
  };

  // Target Win Amount for active level
  const targetWinnings = prizeMoneyMap[currentLevelIndex];

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 relative">
      
      {showSafeZoneBanner && (
        <div className="safe-zone-container pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 2;
            const duration = 2.5 + Math.random() * 1.5;
            const color = ["#ffd700", "#2ecc71", "#f1c40f", "#27ae60", "#ffea70", "#2196f3"][Math.floor(Math.random() * 6)];
            const fontSize = 20 + Math.floor(Math.random() * 25);
            return (
              <div
                key={i}
                className="falling-rupee"
                style={{
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  color: color,
                  fontSize: `${fontSize}px`,
                }}
              >
                ₹
              </div>
            );
          })}
          
          <div className="safe-zone-banner">
            <div className="safe-zone-banner-inner">
              <span className="safe-zone-trophy">🏆</span>
              <h2 className="safe-zone-title">Congratulations!</h2>
              <p className="safe-zone-message">You are in the Safe Zone!</p>
              <div className="safe-zone-glow"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* HEADER BAR */}
      <header className="flex flex-wrap items-center justify-between gap-sm bg-black/25 rounded-xl border-white/5 p-2 px-4 mb-2 z-10 glass-panel">
        <div className="flex items-center gap-sm">
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "var(--correct-green)" }}></div>
          <div>
            <div className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)", fontWeight: 600 }}>Contestant</div>
            <div className="text-md font-bold uppercase tracking-wide">{playerName}</div>
          </div>
        </div>

        {/* LIFELINES GRID */}
        <div className="flex gap-sm">
          <button
            onClick={handleFiftyFifty}
            disabled={!isRoundStarted || lifelines.fiftyFifty === "used" || isAnswerLocked || isTimeOutActive}
            className="lifeline-btn"
            title="50:50"
          >
            50:50
          </button>
          <button
            onClick={handleAudiencePoll}
            disabled={!isRoundStarted || lifelines.audiencePoll === "used" || isAnswerLocked || isTimeOutActive}
            className="lifeline-btn"
            title="Audience Poll"
          >
            AP
          </button>
          <button
            onClick={handlePhoneFriend}
            disabled={!isRoundStarted || lifelines.phoneFriend === "used" || isAnswerLocked || isTimeOutActive}
            className="lifeline-btn"
            title="Phone a Friend"
          >
            📞
          </button>
          <button
            onClick={handleAskExpert}
            disabled={!isRoundStarted || lifelines.askExpert === "used" || isAnswerLocked || isTimeOutActive}
            className="lifeline-btn"
            title="Ask the Expert"
          >
            🎓
          </button>
          <button
            onClick={() => setShowPrizeTreeMobile(true)}
            className="lifeline-btn lg:hidden"
            style={{ borderColor: "var(--gold-primary)", color: "var(--gold-primary)" }}
            title="Show Prize Tree"
          >
            🏆 Tree
          </button>
        </div>

        <div>
          <button
            onClick={() => setActiveModal("quit")}
            disabled={isAnswerLocked || isTimeOutActive}
            className="btn-quit"
          >
            Quit Game
          </button>
        </div>
      </header>

      <main className="flex-1 w-full mb-2 flex flex-col">
        
        {/* MAIN BOX: TIMER, QUESTION, ANSWERS */}
        <div className="w-full flex-1 flex flex-col justify-center items-center gap-lg bg-black/15 rounded-2xl border-white/5 p-5 glass-panel relative overflow-hidden min-h-[480px]">
          
          {/* KBC LOGO */}
          <div className="kbc-game-logo-container">
            <img
              src={logoImg}
              alt="JC Champion Logo"
              className="kbc-game-logo-image"
            />
          </div>

          {/* COMPACT FLOATING PRIZE TREE */}
          <div className="compact-prize-tree hidden lg:block">
            <div className="compact-prize-tree-title">Prize Tree</div>
            <div className="compact-money-ladder-container">
              {prizeMoneyMap.slice(0, questions.length).map((val, idx) => {
                const isSafe = safeZoneIndices.includes(idx);
                const isActive = idx === currentLevelIndex;
                const isCompleted = idx < currentLevelIndex;
                
                let stateClass = "locked";
                if (isActive) stateClass = "active";
                else if (isCompleted) stateClass = "completed";
                else if (isSafe) stateClass = "safe-zone";

                return (
                  <div
                    key={idx}
                    className={`money-ladder-item compact ${stateClass} ${isSafe && !isActive ? "safe-zone" : ""}`}
                  >
                    <span className="money-level-num">
                      {idx + 1} {isSafe && "♦"}
                    </span>
                    <span className="money-level-val">{val}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TIMER ELEMENT (Horizontal lights and center Win Amount circle) */}
          <div className="flex items-center justify-center w-full" style={{ minHeight: "210px" }}>
            <div className="kbc-timer-bar-container">
              {isTimerActive ? (
                <>
                  <div className="kbc-timer-lights left">
                    {renderLeftBeads()}
                  </div>
                  
                  <div className={`kbc-timer-circle ${timeLeft <= 10 ? "kbc-timer-danger" : ""}`}>
                    <span className="kbc-timer-value">{targetWinnings}</span>
                    <span className="kbc-timer-seconds">{timeLeft}s</span>
                  </div>
                  
                  <div className="kbc-timer-lights right">
                    {renderRightBeads()}
                  </div>
                </>
              ) : (
                <div className="kbc-timer-circle">
                  <span className="kbc-timer-value">{targetWinnings}</span>
                  <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "3px" }}>Jackpot Level</span>
                </div>
              )}
            </div>
          </div>

          {/* QUESTION BOARD */}
          <div className="w-full relative mb-4 kbc-question-container" style={{ marginTop: "-95px", zIndex: 20 }}>
            <div className="kbc-connector-line"></div>
            <div className="kbc-capsule kbc-question-capsule text-center font-semibold max-w-6xl mx-auto">
              {currentQuestion.question}
            </div>
          </div>

          {/* OPTIONS 2x2 GRID (Strict 2 Columns, 2 Rows) */}
          <div className="options-grid-2x2 relative z-10">
            {currentQuestion.options.map((option, idx) => {
              const optionLetters = ["A", "B", "C", "D"];
              
              // CSS Classes mapping based on state
              let statusClass = "";
              if (!isRoundStarted) {
                statusClass = "blurred";
              } else {
                if (selectedAnswerIndex === idx) statusClass = "selected";
                if (isShowingResult) {
                  if (idx === currentQuestion.answerIndex) statusClass = "correct";
                  else if (selectedAnswerIndex === idx) statusClass = "wrong";
                }
                if (disabledOptions.includes(idx)) statusClass = "disabled";
              }

              return (
                <div key={idx} className="relative">
                  <div className="kbc-connector-line"></div>
                  <button
                    onClick={() => handleSelectOption(idx)}
                    disabled={!isRoundStarted || isAnswerLocked || disabledOptions.includes(idx) || isTimeOutActive}
                    className={`kbc-capsule kbc-option ${statusClass}`}
                  >
                    <span className="text-gold-primary font-bold mr-3" style={{ flexShrink: 0, whiteSpace: "nowrap" }}><span style={{ color: "var(--gold-primary)", marginRight: "6px" }}>◆</span>{optionLetters[idx]}:</span>
                    {option}
                  </button>
                </div>
              );
            })}
          </div>

          {/* LOCK BUTTON OR NEXT BUTTON ACTION AREA */}
          <div className="w-full text-center mt-4 flex items-center justify-center relative z-20" style={{ minHeight: "50px" }}>
            {!isRoundStarted && (
              <button
                onClick={handleStartRound}
                className="btn-start-round-premium"
                style={{ width: "auto", minWidth: "280px" }}
              >
                {isTimerActive ? "Start Timer (Samay Shuru Karein)" : "Show Options (Sawaal Shuru Karein)"}
              </button>
            )}

            {isRoundStarted && isAnswerLocked && !isShowingResult && (
              <button
                onClick={handleSubmitAnswer}
                disabled={isTimeOutActive || isSubmitting}
                className="btn-lock"
              >
                {isSubmitting ? "Checking Answer..." : "Submit Answer (Submit karein)"}
              </button>
            )}

            {isShowingResult && (
              <div className="flex flex-col gap-sm">
                {selectedAnswerIndex === currentQuestion.answerIndex ? (
                  <div className="flex flex-col gap-sm">
                    <p className="font-bold text-sm tracking-wide uppercase" style={{ color: "var(--correct-green)" }}>Correct Answer!</p>
                    <button
                      onClick={handleNextQuestion}
                      className="btn-action-green"
                    >
                      {currentLevelIndex === questions.length - 1 ? "Claim Grand Prize!" : "Proceed to Next Level"}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-sm">
                    <p className="font-bold text-sm tracking-wide uppercase" style={{ color: "var(--wrong-red)" }}>Wrong Answer!</p>
                    <button
                      onClick={() => {
                        soundManager.stopBackgroundTension();
                        onGameOver("wrong", getWinningsOnLoss(), currentLevelIndex, questions.length);
                      }}
                      className="btn-action-red"
                    >
                      See Winnings
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- MODALS FOR LIFELINES & CONFIRMATIONS --- */}
      
      {/* AUDIENCE POLL MODAL */}
      {activeModal === "poll" && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="max-w-md w-full glass-panel p-6 rounded-2xl text-center relative border-gold-primary">
            <h3 className="text-lg font-bold text-gold-primary uppercase tracking-wider mb-6">
              Audience Poll
            </h3>
            
            {!showHelplineQuestion ? (
              <>
                <p className="text-md font-bold mb-8 leading-relaxed" style={{ color: "var(--text-light)" }}>
                  let's Ask the audience Now
                </p>
                <button
                  onClick={handleShowHelplineQuestion}
                  className="btn-lock w-full mb-4"
                >
                  Show Question to Use Helpline
                </button>
              </>
            ) : (
              <>
                <div className="bg-black/60 p-4 rounded-xl mb-6 text-left border border-white/10 max-h-64 overflow-y-auto">
                  <p className="font-semibold mb-2 text-sm text-gold-primary uppercase tracking-wider">
                    Question:
                  </p>
                  <p className="text-lg mb-4 leading-relaxed font-extrabold">
                    {currentQuestion.question}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {currentQuestion.options.map((opt, idx) => {
                      const letters = ["A", "B", "C", "D"];
                      const isDisabled = disabledOptions.includes(idx);
                      return (
                        <div
                          key={idx}
                          className={`text-sm p-2 rounded border transition-all ${
                            isDisabled
                              ? "bg-black/40 border-red-500/20 text-red-500/50 line-through"
                              : "bg-white/5 border-white/10"
                          }`}
                        >
                          <span className="text-gold-primary font-bold mr-2">{letters[idx]}:</span>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="btn-modal-close"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* PHONE A FRIEND MODAL */}
      {activeModal === "phone" && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="max-w-md w-full glass-panel p-6 rounded-2xl text-center border-gold-primary">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📞</div>
            <h3 className="text-lg font-bold text-gold-primary uppercase tracking-wider mb-4">
              Phone a Friend
            </h3>
            
            {!showHelplineQuestion ? (
              <>
                <p className="text-md font-bold bg-black/40 p-4 rounded-lg border-white/5 leading-relaxed text-center mb-6" style={{ color: "var(--text-light)" }}>
                  call your best friend to the hot seat to answer
                </p>
                <button
                  onClick={handleShowHelplineQuestion}
                  className="btn-lock w-full mb-4"
                >
                  Show Question to Use Helpline
                </button>
              </>
            ) : (
              <>
                <div className="bg-black/60 p-4 rounded-xl mb-6 text-left border border-white/10 max-h-64 overflow-y-auto">
                  <p className="font-semibold mb-2 text-sm text-gold-primary uppercase tracking-wider">
                    Question:
                  </p>
                  <p className="text-lg mb-4 leading-relaxed font-extrabold">
                    {currentQuestion.question}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {currentQuestion.options.map((opt, idx) => {
                      const letters = ["A", "B", "C", "D"];
                      const isDisabled = disabledOptions.includes(idx);
                      return (
                        <div
                          key={idx}
                          className={`text-sm p-2 rounded border transition-all ${
                            isDisabled
                              ? "bg-black/40 border-red-500/20 text-red-500/50 line-through"
                              : "bg-white/5 border-white/10"
                          }`}
                        >
                          <span className="text-gold-primary font-bold mr-2">{letters[idx]}:</span>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="btn-modal-close"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ASK THE EXPERT MODAL */}
      {activeModal === "expert" && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="max-w-md w-full glass-panel p-6 rounded-2xl text-center border-gold-primary">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎓</div>
            <h3 className="text-lg font-bold text-gold-primary uppercase tracking-wider mb-4">
              Ask the Expert
            </h3>
            
            {!showHelplineQuestion ? (
              <>
                <p className="text-md font-bold bg-black/40 p-4 rounded-lg border-white/5 leading-relaxed text-center mb-6" style={{ color: "var(--text-light)" }}>
                  Consult the KBC digital marketing expert
                </p>
                <button
                  onClick={handleShowHelplineQuestion}
                  className="btn-lock w-full mb-4"
                >
                  Show Question to Use Helpline
                </button>
              </>
            ) : (
              <>
                <div className="bg-black/60 p-4 rounded-xl mb-6 text-left border border-white/10 max-h-64 overflow-y-auto">
                  <p className="font-semibold mb-2 text-sm text-gold-primary uppercase tracking-wider">
                    Question:
                  </p>
                  <p className="text-lg mb-4 leading-relaxed font-extrabold">
                    {currentQuestion.question}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {currentQuestion.options.map((opt, idx) => {
                      const letters = ["A", "B", "C", "D"];
                      const isDisabled = disabledOptions.includes(idx);
                      return (
                        <div
                          key={idx}
                          className={`text-sm p-2 rounded border transition-all ${
                            isDisabled
                              ? "bg-black/40 border-red-500/20 text-red-500/50 line-through"
                              : "bg-white/5 border-white/10"
                          }`}
                        >
                          <span className="text-gold-primary font-bold mr-2">{letters[idx]}:</span>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="btn-modal-close"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* QUIT CONFIRMATION MODAL */}
      {activeModal === "quit" && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="max-w-md w-full glass-panel p-6 rounded-2xl text-center border-red-500/50">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚠️</div>
            <h3 className="text-lg font-bold text-red-400 uppercase tracking-wider mb-4">
              Quit Game?
            </h3>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-light)" }}>
              Are you sure you want to quit? You will walk away with your current winnings of{" "}
              <strong style={{ color: "var(--gold-primary)", fontSize: "1.1rem" }}>
                {currentLevelIndex === 0 ? "₹0" : prizeMoneyMap[currentLevelIndex - 1]}
              </strong>.
            </p>
            <div className="flex gap-md" style={{ justifyContent: "center" }}>
              <button
                onClick={handleQuitGame}
                className="btn-action-red flex-1"
              >
                Yes, Quit and Cash Out
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="flex-1"
                style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.2)", color: "white", cursor: "pointer", borderRadius: "8px", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                No, Keep Playing
              </button>
            </div>
          </div>
        </div>
      )}
      {/* MOBILE PRIZE TREE DRAWER MODAL */}
      {showPrizeTreeMobile && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50 lg:hidden">
          <div className="max-w-xs w-full glass-panel p-6 rounded-2xl text-center border-gold-primary relative">
            <h3 className="text-md font-bold text-gold-primary uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
              Prize Tree
            </h3>
            <div className="money-ladder-container mb-6 max-h-[60vh] overflow-y-auto pr-2">
              {prizeMoneyMap.slice(0, questions.length).map((val, idx) => {
                const isSafe = safeZoneIndices.includes(idx);
                const isActive = idx === currentLevelIndex;
                const isCompleted = idx < currentLevelIndex;
                
                let stateClass = "locked";
                if (isActive) stateClass = "active";
                else if (isCompleted) stateClass = "completed";
                else if (isSafe) stateClass = "safe-zone";

                return (
                  <div
                    key={idx}
                    className={`money-ladder-item ${stateClass} ${isSafe && !isActive ? "safe-zone" : ""}`}
                  >
                    <span className="money-level-num">
                      {idx + 1} {isSafe && "♦"}
                    </span>
                    <span className="money-level-val">{val}</span>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => setShowPrizeTreeMobile(false)}
              className="btn-modal-close w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
