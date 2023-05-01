import './App.css';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Biography } from './components/Biography/Biography';
import { Route, Routes } from 'react-router-dom';
import { Paintings } from './components/Paintings/Paintings';
import { Collection } from './components/Collection/Collection';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Biography />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
