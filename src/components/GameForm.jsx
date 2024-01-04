import { useState } from 'react'

const GameForm = ({
  setGameState,
  playersCount,
  setPlayersCount,
  wordSetting,
  setWordSettings,
  word,
  setWord
}) => {
  const [error, setError] = useState('')

  const handlePlayerCountLowering = () => {
    if (playersCount > 3) {
      setPlayersCount(playersCount - 1)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (wordSetting === 'custom' && !word) {
      setError('Debes escribir una palabra')
      return
    }

    if (wordSetting === 'random') {
      setWord('')
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold">Configurar juego</h1>
      <div className="flex items-center gap-2">
        <button
          disabled={playersCount == 3}
          className="rounded-lg border border-white h-8 w-8 disabled:border-gray-400 disabled:text-gray-400"
          onClick={() => handlePlayerCountLowering()}
        >
          -
        </button>
        <span>{playersCount}</span>
        <button
          className="rounded-lg border border-white h-8 w-8"
          onClick={() => setPlayersCount(playersCount + 1)}
        >
          +
        </button>
      </div>
      <div className="text-center">
        <div>
          <span onClick={() => setWordSettings('random')}>Palabra aleatoria</span>
          <input
            type="radio"
            name="word"
            id="word-setting"
            value="random"
            checked={wordSetting === 'random'}
            onChange={e => setWordSettings('random')}
          />
        </div>
        <span onClick={() => setWordSettings('custom')}>Escribir palabra</span>
        <input
          type="radio"
          name="word"
          id="word-setting"
          value="random"
          checked={wordSetting === 'custom'}
          onChange={e => setWordSettings('custom')}
        />
      </div>
      {wordSetting === 'custom' && (
        <input
          type="text"
          placeholder="Escribe la palabra para el juego"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
          focus:outline-none focus:ring max-w-24"
        type="submit"
        disabled={loading}
        onClick={e => handleSubmit(e)}
      >
        {loading ? 'Cargando...' : 'Empezar'}
      </button>

      {error && <div>{error}</div>}
    </div>
  )
}

export default GameForm
