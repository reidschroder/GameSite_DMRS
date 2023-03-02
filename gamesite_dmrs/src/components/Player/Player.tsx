import React from 'react'
import {FaHandPaper, FaHandRock, FaHandScissors} from 'react-icons/fa'

const Player = ({name = "", score = 0}) => {
  return (
    <div className='player'>
                    <div className='score'>{name}: {score}</div>
                    <div className='choice'>
                        <FaHandPaper size={60} />
                    </div>
                </div>
  )
}

export default Player