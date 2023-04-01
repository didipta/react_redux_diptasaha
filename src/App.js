import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ALLpost from './app/Component/ALLpost';
import { useDispatch } from 'react-redux';
import { getPost } from './features/Post/postSlice';

function App() {
  const [post,setPost]=useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    .then(res => res.json())
    .then(data =>
      {
        if(localStorage?.getItem("posts")===null)
        {
          localStorage.setItem("posts",JSON.stringify(data))
          dispatch(getPost())
        }
      }
      )
  },[])
  return (
    <div>
    <ALLpost></ALLpost>
    </div>
  );
}

export default App;
