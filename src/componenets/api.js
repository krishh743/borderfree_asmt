import {useState,useEffect} from 'react';
import axios from "axios";

const count = 1;
function LoadImages(){
const[state,setState]=useState([])
useEffect(()=>{

axios
.get("https://api.unsplash.com/search/photos?client_id=Mhewmhf7FO5jKk7CZ3zIOPJILCLHHh_NdtwnVNpwmOQ")
.then((data)=>{
setState(data.data.results)
});

},[count]);

return state;
}
function SearchImages(query){
const[state,setState]=useState([])
useEffect(()=>{

axios
.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=Mhewmhf7FO5jKk7CZ3zIOPJILCLHHh_NdtwnVNpwmOQ")
.then((data)=>{
setState(data.data.results)
});

},[query]);

return state;
} 





export {LoadImages,SearchImages}
