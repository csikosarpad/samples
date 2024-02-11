import './App.css';
import InputLine from './components/InputLine';

function App() {
  return (
    <>
      <h1>Hangman - akasztófás - játék a szavakkal</h1>
      <div className="menu">
        <nav>
          <ul></ul>
        </nav>
      </div>
      <div className="content">
        <InputLine />
      </div>
    </>
  );
}

export default App;
