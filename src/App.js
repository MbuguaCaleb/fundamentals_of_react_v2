import React from "react";
import Tweet from "./Tweet";

function App() {
  return (
    <div className='app'>
      <Tweet name='MbuguaCaleb' message='Mbugua Loves Javascript' />
      <Tweet
        name='Dev ED'
        message='What a brilliant teacher.Coding step by step'
      />
      <Tweet
        name='Travesy Media'
        message='My all time friend when it comes to code.Thanks brad'
      />
      <Tweet
        name='Mosh'
        message='Wow.The best java and oop teacher.I look up to mosh'
      />
    </div>
  );
}

export default App;
