import React from 'react'
import Image from 'next/image'

const Earnings = () => {
  return (
    <div className='flex items-center'>
      <Image
        src={"/icons/coin-lg.png"}
        width={40}
        height={40}
        alt="coin image"
      />
      <p className='font-semibold text-4xl'>1,000,000</p>
    </div>
  )
}

export default Earnings