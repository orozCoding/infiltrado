import { useState, createContext } from "react";
import GameForm from "./GameForm";

const Game = () => {
  const [gameState, setGameState] = useState("settings");
  const [playersCount, setPlayersCount] = useState(3);
  const [wordSetting, setWordSettings] = useState("random");
  const [word, setWord] = useState("");

  return (
    <div className="text-center">
      <h1 className="font-bold">El infiltrado</h1>
      <span onClick={(e) => setGameState("form")}>Empezar</span>
      {gameState === "form" && (
        <GameForm
          gameState={gameState}
          setGameState={setGameState}
          playersCount={playersCount}
          setPlayersCount={setPlayersCount}
          wordSetting={wordSetting}
          setWordSettings={setWordSettings}
          word={word}
          setWord={setWord}
        />
      )}
    </div>
  );
};

export default Game;
