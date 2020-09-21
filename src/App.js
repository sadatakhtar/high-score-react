import React from 'react';
import HighScoreTableEthiopia from './components/HighScoreTableEthiopia';
import GetTitle from './components/Title';

import './App.css';
import HighScoreScotland from './components/HighScoreScotland';
import HighScoreEngland from './components/HighScoreEngland';
import HighScoreBrazil from './components/HighScoreBrazil';
import HighScoreColombia from './components/HighScoreColombia';
import HighScoreTurkey from './components/HighScoreTurkey';
import HighScoreIran from './components/HighScoreIran';
import HighScoreBangladesh from './components/HighScoreBangladesh';

function App() {

  

  return (
   <div>
     <GetTitle />
     <HighScoreTableEthiopia />
     <HighScoreScotland />
     <HighScoreEngland />
     <HighScoreBrazil />
     <HighScoreColombia />
     <HighScoreTurkey />
     <HighScoreIran />
     <HighScoreBangladesh />
     
   </div>
  );
}

export default App;
