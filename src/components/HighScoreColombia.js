import React from 'react';
import GetPlayerScores from './PlayerScores';
import allCountryScores from './Scores';




function HighScoreColombia(){

  const countryName = allCountryScores[4].name;

   const playerName = allCountryScores[4].scores.map(el => {
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

export default HighScoreColombia;