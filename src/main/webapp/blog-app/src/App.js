import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/post/Home';
import { Route } from 'react-router-dom';

function App() {

  // useEffect(()=>{
    
  //   let person={
  //     username:"aaa",
  //     password:"1234"
  //   }

  //   fetch("http://localhost:8000/loginProc",{
  //     method:"POST",
  //     body:JSON.stringify(person),
  //     headers:{
  //       'Content-Type':"application/json; charset=utf-8"
  //     }
  //   })
  //   .then(res=> {
  //     console.log(1,res);
  //     for(let header of res.headers.entries()){
  //       console.log(2,header);
  //       if(header[0]==="authorization"){
  //         localStorage.setItem("authorization",header[1]);
  //       }
  //     }

  //     return res.text();
  //   })
  //   .then(res=>{
  //     console.log(3,res);
    
  //   });

  //   // localStorage.setItem("jwt","rararara");
  //   // let jwtToken=localStorage.getItem("jwt");
  //   // console.log(jwtToken);
  // },[]);

  return (
    <div>
      <Header></Header>
     <Route path="/" exact={true} component={Home}></Route>
    
    </div>
  );
}

export default App;
