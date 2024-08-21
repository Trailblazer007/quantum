import React from 'react'
import Image from 'next/image'

const username = "Aniket12377";
const User = () => {
  return (
    <div className='flex justify-between gap-1 items-center'>
      <Image
        src={'/icons/alias.png'}
        width={30}
        height={30}
        alt='user image'
      />
      <p>{username}</p>
    </div>
  )
}

export default User