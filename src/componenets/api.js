import {useState,useEffect} from 'react';
import axios from "axios";

const count = 1;
function LoadImages(){
const[state,setState]=useState([])
useEffect(()=>{

axios
.get("https://jsonplaceholder.typicode.com/photos")
.then((data)=>{
setState(data.data.results)
});

});

return state;
}
function SearchImages(query){
const[state,setState]=useState([])
useEffect(()=>{

axios
.get("https://jsonplaceholder.typicode.com/photos")
.then((data)=>{
setState(data.data.results)
});

});

return state;
} 





export {LoadImages,SearchImages}