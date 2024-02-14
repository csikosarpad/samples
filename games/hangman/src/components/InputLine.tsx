import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GAME, MESSAGES } from '../utils/constans';
import { sorsol, betukereso, addTips } from '../redux/gameSlice';

const KeyBoard = () => {
  const dispatch = useDispatch();
  const abcArray = GAME.ABC.split('');
  //const [pressedKey, setPressedKey] = useState('');
  const [usedKey, setUsedKey] = useState({});
  const handleLetterClick = (event: KeyboardEvent) => {
    const target = event.target;
    target?.classList.add('used');
    const letter = target?.textContent;
    setUsedKey((val) => {
      console.log(val);
      return {
        ...val,
        [letter]: true,
      };
    });
  }

  useEffect(() => {
    console.log(usedKey);
  }, [usedKey])

  return (<div className="keyboard">
    {
      abcArray.map((item, index) => {
        return <span onClick={(e) => { handleLetterClick(e, index) }} id={`letter_${index}`}>{item}</span>
      })
    }
  </div>)
}

const InputLine = () => {
  const dispatch = useDispatch();
  const tips = useSelector((state) => state.tips);

  const [letter, setLetter] = useState('');
  const [characters, setCharacters] = useState('');
  //const [tips, setTips] = useState(new Set());
  const [exists, setExists] = useState('');
  const [gameWord, setGameWord] = useState('');
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
      //addTips(char)
      dispatch(addTips(char));
    }
  };

  /*const addTips = (char: string) => {
    if (tips.has(char)) {
      setExists(`${MESSAGES.EXISTED_CHAR} ${char}`);
    } else {
      setExists(``);
      setTips(tips => new Set([...tips, char]));
      setLetter(char);
    }
  };*/

  const handleCharSort = () => {
    const resort = Array.from(tips).sort(function (a, b) {
      return ('' + a).localeCompare(b);
    });
    setCharacters(resort.toString());
  }

  const gameStart = () => {
    const [szo, jatek] = sorsol();
    setLetter('');
    setCharacters('')
    //setTips(new Set());
    setGameWord(szo);
    setGameWordSpace(jatek);
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
    gameStart();
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    }
  }, []);

  return (
    <>
      <span>{MESSAGES.USED_CHARACTERS_LENGTH} [{abc.length}/{tips.size}]</span>
      {gameWin && (<div>
        {MESSAGES.GAME_WIN} - {gameWord}
        <div><button onClick={gameStart}>Új játék</button></div>
      </div>)}
      {!gameWin && (
        <>
          <div>{gameWordSpace.toString()}</div>
          <div className="inputline">{MESSAGES.USED_CHARACTERS} <strong>{characters}</strong>
            {characters?.length > 1 && (<button onClick={handleCharSort}>{MESSAGES.SET_SORT_ORDER}</button>)}
          </div>
          <p className="inputline">{MESSAGES.YOUR_TIP} <strong>{letter}</strong> {exists}</p>
          <KeyBoard />
        </>
      )}
    </>
  );
};

export default InputLine;
