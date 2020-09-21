import React from 'react';
import GetPlayerScores from './PlayerScores';
import allCountryScores from './Scores';




function HighScoreTurkey(){

  const countryName = allCountryScores[5].name;

   const playerName = allCountryScores[5].scores.map(el => {
     return (
       <div className="playersDiv">
         <h3>{el.n}  scored: {el.s}</h3>
         
       </div>
     )
   });
    return (
        <div className="countryList">
          <h1>{countryName}</h1>
    
    
     
     <GetPlayerScores player={playerName} />
   </div>
    )

}

export default HighScoreTurkey;