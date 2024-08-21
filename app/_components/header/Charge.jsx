import React from 'react'
import Image from 'next/image';

const chargeLevel = 1000;
const totalLevel = 1000;

const Charge = () => {
  return (
    <div className='flex items-center gap-2 justify-between border-[0.5px] border-[#21859B] bg-[#82828229] w-max px-2 py-3 rounded-2xl mb-4'>
      <Image
        src={'/icons/lightening2.png'}
        width={10}
        height={22}
        alt='countdown background image'
      />
      <p>{`${chargeLevel} / ${totalLevel}`}</p>
    </div>
  )
}

export default Charge