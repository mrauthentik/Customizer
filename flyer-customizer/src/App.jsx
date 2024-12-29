import React from 'react'
import './App.css'
import FlyerCustomizer from './Flyercustomizer'

function App() {

   return(
     <div>
       <div className="main">
          <h1>Welcome to Flyer Weaponizer</h1>
           <p> Customize your flyer here</p>
           <FlyerCustomizer />
       </div>
     </div>
   )
}

export default App
