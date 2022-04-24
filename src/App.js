import './App.css';
import { Stopwatch } from './components/Stopwatch';
import { Timer } from './Timer component/Timer';

function App() {
  return (
    <div className="App">
      <Timer />
      <Stopwatch />
    </div>
  );
}

export default App;
