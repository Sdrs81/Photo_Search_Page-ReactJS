import './App.css';
import SeachHeader from './SeachHeader';
import searchImages from './Api';
import { useState } from 'react';
import ImageList from './Components/ImageList';


function App() {

  const [images, setImages] = useState([])

  const handleSubmit = async (term) =>{
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className="App">
      <SeachHeader search={handleSubmit}/>
      <ImageList imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
