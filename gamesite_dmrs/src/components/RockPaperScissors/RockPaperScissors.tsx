import React, { useState } from 'react';
import './RockPaperScissors';
import {FaHandPaper, FaHandRock, FaHandScissors} from 'react-icons/fa';
import Player from '../Player/Player';




const RockPaperScissors = () => {

    const [playerAction, setPlayerAction] = useState(null);
    const [computerChoice,setComputerChoice] = useState(null);
    const [chooseWinner, setChooseWinner]=useState("");
    const choices = [
        FaHandRock,
        FaHandPaper,
        FaHandScissors
    ]



 
// const onActionSelected = (any) =>{
//     setPlayerAction(selectedAction);
// }

const randomAction = (value: any) => {
    // const actions = {
    //     rock: FaHandRock,
    //     paper: FaHandPaper,
    //     scissors: FaHandScissors
    // };
    
    const botChoice = Math.floor(Math.random() *3);

    console.log(botChoice);
    if(botChoice===0){
        value=FaHandRock;
        setComputerChoice(value);
    } else if(botChoice===1){
        value=FaHandPaper;
        setComputerChoice(value);
    } else{
        value=FaHandScissors;
        setComputerChoice(value);
    }
    //console.log(Math.floor(Math.random() *3));
    


}



 function findWinner() {
    //console.log(playerAction);
    //console.log(computerChoice);
    if (playerAction === FaHandRock && computerChoice === FaHandRock) {
        setChooseWinner("It's a draw");
     } else if (playerAction === FaHandPaper && computerChoice === FaHandPaper) {
        setChooseWinner("It's a draw");
     } else if (playerAction === FaHandScissors && computerChoice === FaHandScissors) {
        setChooseWinner("It's a draw");
     } else if (playerAction === FaHandRock && computerChoice === FaHandPaper) {
        setChooseWinner("Computer Wins")
     } else if (playerAction === FaHandRock && computerChoice === FaHandScissors) {
        setChooseWinner("Player 1 Wins")
     } else if (playerAction === FaHandPaper && computerChoice === FaHandRock) {
        setChooseWinner("Player 1 Wins")
     } else if (playerAction === FaHandPaper && computerChoice === FaHandScissors) {
        setChooseWinner("Computer Wins")
     } else if (playerAction === FaHandScissors && computerChoice === FaHandRock) {
        setChooseWinner("Computer Wins")
     } else if (playerAction === FaHandScissors && computerChoice === FaHandPaper) {
        setChooseWinner("Player 1 Wins")
     }
     //console.log(chooseWinner);
 }


 const handleClick = (value: any) => {
    console.log(value);
    setPlayerAction(value);
    //console.log(value);

    randomAction(value);
    findWinner();

}
    


  return (
    <div className='center'>
        <h1>Rock Paper Scissors</h1>
        <div>
            <div className='container'>
                <div className='player'>
                    <div className='score'>Player 1: 0</div>
                        <div className='choice'>
                            {playerAction}
                        </div>
                <div className='player'>
                    <div className='score'>Bot: 0</div>
                        <div className='choice'>
                            {computerChoice}
                        </div>
                </div>
                </div>
            </div>
            <div>
                <button className='game-button'onClick={() => handleClick(FaHandRock)}><FaHandRock/></button>
                <button className='game-button' onClick={() => handleClick(FaHandPaper)}><FaHandPaper/></button>
                <button className='game-button' onClick={() => handleClick(FaHandScissors)}><FaHandScissors/></button>
            </div>
            <h2>{chooseWinner}</h2>
        </div>
    </div>
  )
}

export default RockPaperScissors