import { useState } from 'react'
import Weather from "./Weather.jsx"
import './App.css'

export default function App() {
   return (

     
     <div className="App">
      <div className="container">
      
       <Weather defaultCity="Wroclaw"/>
      
        <footer>This project was coded by Sarah Staniec and is <a href="https://github.com/staniecs/2026-weather-app" target="_blank">open-sourced on GitHub</a>.</footer>
     </div> 
     </div>

    
  )
}


