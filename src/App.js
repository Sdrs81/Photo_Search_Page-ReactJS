import './App.css';
import SeachHeader from './SeachHeader';
import searchImages from './Api'

function App() {

  const handleSubmit = (term) =>{
    searchImages(term);
  }

  return (
    <div className="App">
      <SeachHeader search={handleSubmit}/>
    </div>
  );
}

export default App;
