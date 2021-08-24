
import './App.css';
import {useState,useEffect} from 'react';
import {LoadImages,SearchImages} from './componenets/api';
import './App.css';
import Image from './componenets/image'

function App() {
const[query,setQuery]=useState()
const[random,setRandom]=useState()
const data = LoadImages();
console.log(query)

const search=()=>{
setRandom(query);

}
const Searchdata = SearchImages(random);
console.log(Searchdata);

  return (
    <div className="App">
<div>
<input type="text"  onChange={(event)=>setQuery(event.target.value)}/>
<button onClick={search}>Search</button>
</div>
<div>
{random ? Searchdata.map((img,key)=>(
<Image src={img.urls.thumb} key={key}/>
)) : data.map((img,key)=>(
<Image src={img.urls.thumb} key={key}/>
))}      
    </div>
</div>
  );
}

export default App;
