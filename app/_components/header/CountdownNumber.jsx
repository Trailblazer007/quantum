import React from 'react'
import Image from 'next/image'

const Countdown = ({number}) => {
  return (
    <div className=' flex justify-center items-center'>
      <Image
        className='absolute'
        src={'/images/countdown-bg.png'}
        width={85}
        height={85}
        alt='countdown background image'
      />
      <p className='absolute'>{number}</p>
    </div>
  )
}

export default Countdown