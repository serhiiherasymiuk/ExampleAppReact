import './App.css';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Biography } from './components/Biography/Biography';
import { Route, Routes } from 'react-router-dom';
import { Painting } from './components/Paintings/Paintings';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Biography />} />
          <Route path="/" element={<Painting />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
