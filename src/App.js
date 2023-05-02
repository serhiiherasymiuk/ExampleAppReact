import './App.css';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Biography } from './components/Biography/Biography';
import { Route, Routes } from 'react-router-dom';
import { Collection } from './components/Collection/Collection';
import { AddPainting } from './components/AddPainting/AddPainting';
import { useState } from "react";
import { Authorization } from './components/Authorization/Authorization';

function App() {
  const [images, setImages] = useState([  {
    title: "The Stoning of Saint Stephen",
    description: "According to the Acts of the Apostles, he was a deacon in the early Church at Jerusalem who angered members of various synagogues by his teachings. Accused of blasphemy at his trial, he made a speech denouncing the Jewish authorities who were sitting in judgment on him and was then stoned to death.",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rembrandt_Harmensz._van_Rijn_150.jpg/1280px-Rembrandt_Harmensz._van_Rijn_150.jpg",
    author: "Rembrandt van Rijn",
    year: 1625
  },
  {
    title: "The Parable of the Rich Fool",
    description: "The Parable of the Rich Fool, also known as The Money Changer,[1] is an oil painting on canvas of 1627 by Rembrandt, now in the Gemäldegalerie, Berlin. Produced early in the artist's career, it depicts the eponymous Biblical parable. The model for the figure is said to have been Rembrandt's father.[1]",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Rembrandt_-_The_Parable_of_the_Rich_Fool.jpg/1280px-Rembrandt_-_The_Parable_of_the_Rich_Fool.jpg",
    author: "Rembrandt van Rijn",
    year: 1627
  },
  {
    title: "The apostle Paul in Prison",
    description: "There are darkened overpaintings on both sides of the seams of the panel",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1627_Rembrandt_Paulus_im_Gef%C3%A4ngnis_Staatsgalerie_Stuttgart_anagoria.JPG/800px-1627_Rembrandt_Paulus_im_Gef%C3%A4ngnis_Staatsgalerie_Stuttgart_anagoria.JPG",
    author: "Rembrandt van Rijn",
    year: 1627
  },
  {
    title: "Rembrandt Laughing",
    description: "Rembrandt Laughing is a c. 1628 oil on copper painting by the Dutch painter Rembrandt van Rijn. It is an elaborate study of a laughing face, a tronie, and, since it represents the painter himself, one of over 40 self-portraits by Rembrandt, probably the earliest elaborate one. The painting, which was only recently discovered, is now in the J. Paul Getty Museum, California.",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rembrandt_laughing.jpg/800px-Rembrandt_laughing.jpg",
    author: "Rembrandt van Rijn",
    year: 1628
  }]);
  const handleAddImage = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Biography />} />
          <Route path="/collection" element={<Collection images={images} />} />
          <Route path="/add" element={<AddPainting onAddImage={handleAddImage} />} />
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
