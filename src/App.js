import './App.css';
import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'

function App() {
    const [categories, setCategories] = useState(['Deadpool']);
    console.log(categories);

  return (
    <div className="App">
          <h2>GIF EXPERT APP</h2>
          <hr />
          <AddCategory propSetCategories={setCategories} />
          <div>
              {categories.map(category => {
                  return (<GifGrid
                      key={category}
                      category={category}
                  />);
              })}
          </div>
    </div>
  );
}

export default App;
