import { useEffect, useState } from 'react';
import { GAME, MESSAGES } from '../utils/constans';
import { sorsol, betukereso } from '../redux/gameSlice';

const InputLine = () => {
  const [letter, setLetter] = useState('');
  const [characters, setCharacters] = useState('');
  const [tips, setTips] = useState(new Set());
  const [exists, setExists] = useState('');
  const [gameWord, setGameWord] = useState<string>('');
  const [gameWordSpace, setGameWordSpace] = useState([]);
  const [gameWin, setGameWin] = useState(false);

  const abc = GAME.ABC;

  const isLetter = (char: string) => {
    return abc.includes(char);
  };

  const handleKeyDown = (ev) => {
    ev.preventDefault();
    const char = ev.key.toLocaleLowerCase();
    if (isLetter(char)) {
      addTips(char)
    }
  };

  const addTips = (char: string) => {
    if (tips.has(char)) {
      setExists(`${MESSAGES.EXISTED_CHAR} ${char}`);
    } else {
      setExists(``);
      setTips(tips => new Set([...tips, char]));
      setLetter(char);
    }
  };

  const handleCharSort = () => {
    const resort = Array.from(tips).sort(function (a, b) {
      return ('' + a).localeCompare(b);
    });
    setCharacters(resort.toString());
  }

  useEffect(() => {
    setGameWordSpace(betukereso({ szo: gameWord, megoldando: gameWordSpace, letter: letter }));
  }, [letter]);

  useEffect(() => {
    document.removeEventListener('keydown', handleKeyDown, true);
  }, [gameWin]);

  useEffect(() => {
    if (gameWord.split('').toString() === gameWordSpace.toString()) {
      setGameWin(true);
    } else {
      setGameWin(false);
    }

  }, [gameWord, gameWordSpace]);

  useEffect(() => {
    setCharacters(Array.from(tips).toString());
  }, [tips]);

  useEffect(() => {
    const [szo, jatek] = sorsol();
    setGameWord(szo);
    setGameWordSpace(jatek);

    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    }
  }, []);

  return (
    <>
      <span>{MESSAGES.USED_CHARACTERS_LENGTH} [{abc.length}/{tips.size}]</span>
      {gameWin && (<div>{MESSAGES.GAME_WIN} - {gameWord}</div>)}
      {!gameWin && (
        <>
          <div>{gameWordSpace.toString()}</div>
          <div className="inputline">{MESSAGES.USED_CHARACTERS} <strong>{characters}</strong>
            {characters?.length > 1 && (<button onClick={handleCharSort}>{MESSAGES.SET_SORT_ORDER}</button>)}
          </div>
          <p className="inputline">{MESSAGES.YOUR_TIP} <strong>{letter}</strong> {exists}</p>

        </>
      )}
    </>
  );
};

export default InputLine;
