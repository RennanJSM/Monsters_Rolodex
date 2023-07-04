import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

const App = () => {

  const [searchField, setsearchField] = useState('') ;
  const [title, settitle] = useState('');
  const [monstros, setmonstros] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monstros);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setmonstros(users));
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monstros.filter((monstro) => {
      return monstro.name.toLocaleLowerCase().includes(searchField)
    });

    setfilteredMonsters(newfilteredMonsters);
    
  }, [monstros, searchField])


  const onSearchChange = (event) => {          
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);

    };

  const ontitlechange = (event) => {          
    const settitlestring = event.target.value.toLocaleLowerCase();
    settitle(settitlestring);
  
    };

    

  return(
    <div className="App">
    <h1 className='app-title'>{title}</h1>

    <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder='search monsters' 
      className='search-box' />

    <br />

    <SearchBox 
      onChangeHandler={ontitlechange} 
      placeholder='set title' 
      className='search-box' />

    
    
    <CardList monstros={filteredMonsters}/>
      </div> 
  )

}


export default App;
