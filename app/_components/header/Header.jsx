import React from 'react'
import Image from 'next/image'
import CountdownNumber from './CountdownNumber'
import CountdownText from './CountdownText'
import User from './User'
import Charge from './Charge'
import Earnings from './Earnings'

const Header = () => {
  return (
    <div className='header text-white rounded py-3 px-2 bg-[#D9D9D90A]  max-w-[381px]'>
        <div className='flex justify-center'><CountdownText /> </div>
        <div className='flex justify-between items-center'>
            <div>
                <User />
            </div>

            <div className="relative countdown-number">
                <CountdownNumber number={30}/>
            </div>

            <div>
                <Charge />
            </div>
        </div>
        <div className='flex justify-center'><Earnings /></div>
        
    </div>
  )
}

export default Header