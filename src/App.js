
import './App.css';
import {useState,useEffect} from 'react';
import {LoadImages,SearchImages} from './componenets/api';
import './App.css';
import image from './componenets/image';

function App() {
const[query,setQuery]=useState()
const[serachQ,setSearch]=useState()
const data = LoadImages();
console.log(query)

const search=()=>{
setSearch(query);

}
const Searchdata = SearchImages(serachQ);
console.log(Searchdata);

  return (
    <div className="App">
<div>
<input type="text"  onChange={(event)=>setQuery(event.target.value)}/>
<button onClick={search}>Search</button>
</div>
<div>
{serachQ ? Searchdata.map((img,key)=>(
<image src={img.url.thumb} key={key}/>
)) : data.map((img,key)=>(
<image src={img.url.thumb} key={key}/>
))}      
    </div>
</div>
  );
}

export default App;
