import { useState } from 'react';
import './App.css';
import Header from '@/Components/Header';
import ReadTheDocs from '@/Components/ReadTheDocs';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <ReadTheDocs />
    </div>
  );
};

export default App;
