import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";
import { soundManager } from "./utils/soundManager";
import { contestantGroups } from "./data/questions";

function App() {
  const [screen, setScreen] = useState(() => {
    return localStorage.getItem("kbc_screen") || "welcome";
  });
  const [playerName, setPlayerName] = useState(() => {
    return localStorage.getItem("kbc_player_name") || "";
  });
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("kbc_is_muted") === "true";
  });
  const [activeQuestions, setActiveQuestions] = useState(() => {
    const saved = localStorage.getItem("kbc_active_questions");
    return saved ? JSON.parse(saved) : [];
  });
  const [gameOverState, setGameOverState] = useState(() => {
    const saved = localStorage.getItem("kbc_game_over_state");
    return saved ? JSON.parse(saved) : {
      reason: "", 
      amount: "₹0",
      questionsAnswered: 0,
      totalQuestions: 15
    };
  });

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem("kbc_screen", screen);
    localStorage.setItem("kbc_player_name", playerName);
    localStorage.setItem("kbc_is_muted", isMuted);
    localStorage.setItem("kbc_active_questions", JSON.stringify(activeQuestions));
    localStorage.setItem("kbc_game_over_state", JSON.stringify(gameOverState));
  }, [screen, playerName, isMuted, activeQuestions, gameOverState]);

  // Sync mute state with soundManager
  useEffect(() => {
    soundManager.setMute(isMuted);
  }, [isMuted]);

  const handleStartGame = (name, mutedSetting) => {
    // Clear any previous level states
    localStorage.removeItem("kbc_game_screen_state");
    
    setPlayerName(name);
    setIsMuted(mutedSetting);
    
    // Get current contestant group index from localStorage, default to 0
    const groupStr = localStorage.getItem("kbc_contestant_group_index");
    let groupIndex = groupStr ? parseInt(groupStr, 10) : 0;
    if (isNaN(groupIndex) || groupIndex < 0 || groupIndex >= 3) {
      groupIndex = 0;
    }

    // Select the fixed group of 15 questions for the current session
    const sessionQuestions = contestantGroups[groupIndex];
    setActiveQuestions(sessionQuestions);

    // Save next group index for next game session (0 -> 1 -> 2 -> 0 ...)
    localStorage.setItem("kbc_contestant_group_index", (groupIndex + 1) % 3);

    setScreen("game");
  };

  const handleGameOver = (reason, amount, questionsAnswered, totalQuestions) => {
    setGameOverState({
      reason,
      amount,
      questionsAnswered,
      totalQuestions
    });
    setScreen("gameover");
  };

  const handleRestart = () => {
    soundManager.stopBackgroundTension();
    
    // Clear all saved states
    localStorage.removeItem("kbc_game_screen_state");
    localStorage.removeItem("kbc_screen");
    localStorage.removeItem("kbc_player_name");
    localStorage.removeItem("kbc_active_questions");
    localStorage.removeItem("kbc_game_over_state");

    setScreen("welcome");
    setPlayerName("");
    setActiveQuestions([]);
    setGameOverState({
      reason: "", 
      amount: "₹0",
      questionsAnswered: 0,
      totalQuestions: 15
    });
  };

  return (
    <div className="min-h-screen text-white select-none">
      {screen === "welcome" && (
        <WelcomeScreen onStartGame={handleStartGame} />
      )}
      {screen === "game" && (
        <GameScreen
          playerName={playerName}
          initialMuted={isMuted}
          questions={activeQuestions}
          onGameOver={handleGameOver}
        />
      )}
      {screen === "gameover" && (
        <GameOverScreen
          playerName={playerName}
          reason={gameOverState.reason}
          amount={gameOverState.amount}
          questionsAnswered={gameOverState.questionsAnswered}
          totalQuestions={gameOverState.totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
