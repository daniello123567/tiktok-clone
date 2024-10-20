import React from 'react'
import Follow from './icons/Follow'
import Like from './icons/Like'
import Comment from './icons/Comment'
import Share from './icons/Share'
import Sound from './icons/Sound'
import Image from 'next/image'
function Videoinfo() {
  return (
    <div className='w-[3.875em] gap-[1em] flex items-center flex-col  right-0 bottom-[3.5em] absolute z-[3000] '>
    <div className={`w-[2.75em]  border-2 border-white h-[2.75em] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84mUkrevcCXNovnO5oi-lAwiykyDY_SFRWA&s')] relative rounded-full`}>
     <Image className='w-full rounded-full object-cover h-full' width={500} height={500} alt='dave' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84mUkrevcCXNovnO5oi-lAwiykyDY_SFRWA&s'}/>
      <Follow />
    </div>
    <div className='flex flex-col items-center'>
      <Like/>
      <p className='text-center text-[0.8125em] text-white'>200.3k</p>
    </div>
    <div className='flex flex-col items-center'>
      <Comment/>
      <p className='text-center text-[0.8125em] text-white'>200.3k</p>
    </div>
    <div className='flex flex-col items-center'>
      <Share/>
      <p className='text-center text-[0.8125em] text-white'>200.3k</p>
    </div>
        <Sound/>
</div>
  )
}

export default Videoinfo
