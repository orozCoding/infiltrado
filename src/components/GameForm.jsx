import { useState } from "react";

const GameForm = ({
  setGameState,
  playersCount,
  setPlayersCount,
  wordSetting,
  setWordSettings,
  word,
  setWord,
}) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (playersCount === 0) {
        setError("Debes seleccionar un número de jugadores");
        return;
      }
      if (wordSetting === "random") {
        setWordSettings("random");
        setWord("");
      }
      setGameState("started");
    }, 1000);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold">El infiltrado</h1>
      <div>
        <span onClick={() => setPlayersCount(playersCount - 1)}>-</span>
        <span>{playersCount}</span>
        <span onClick={() => setPlayersCount(playersCount + 1)}>+</span>
      </div>

      <div>
        <div>
          <span onClick={() => setWordSettings("random")}>
            Palabra aleatoria
          </span>
          <input
            type="radio"
            name="word"
            id="word-setting"
            value="random"
            checked={wordSetting === "random"}
            onChange={(e) => setWordSettings("random")}
          />
        </div>
        <span onClick={() => setWordSettings("custom")}>Escribir palabra</span>
        <input
          type="radio"
          name="word"
          id="word-setting"
          value="random"
          checked={wordSetting === "custom"}
          onChange={(e) => setWordSettings("custom")}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
          focus:outline-none focus:ring"
        type="submit"
        disabled={loading}
      >
        {loading ? "Cargando..." : "Empezar"}
      </button>
    </div>
  );
};

export default GameForm;
