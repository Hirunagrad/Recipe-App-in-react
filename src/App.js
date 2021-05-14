import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID= "d164aa90";
  const APP_KEY= "e907a3ecdb53a2d4850cc8b12a2705cf";


  
   
   
  const [recipes , setRecipes] = useState([]);
  const [search ,setSearch] = useState('');
  const [query ,setQuery] =useState('chicken');

  useEffect(() =>  {
      getRecipes();
    
  }, [query]);

  
   const getRecipes = async () => {


       const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
       const data = await response.json();
       setRecipes(data.hits);
       console.log(data.hits);

   };

   const updateSearch = e => {
     setSearch(e.target.value);
    
   }

   const getSearch = e => {

    e.preventDefault();
    setQuery(search);
    setSearch('');

   }


  return (
    <div className="App">
 
    <div className="App">
     
   <form onSubmit={getSearch} className="search-form">
     <input className="search-bar" type="text" value={search} onChange={updateSearch} />
     <button className="search-button" type="submit">search</button>

   </form>
  
  <div className="recipes">
  { recipes.map( recipe => (

       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       img={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       
       />
  ))}
</div>
    </div>


    </div>
  );
}

export default App;
