"use client"
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import { handleTogglePlay } from '@/app/utils/Videoutils'
import Videoinfo from './Videoinfo';
import Musicicon from './icons/Musicicon';
import Loading from './Loading';
import Wordshorten from './Wordshorten';
type video = {
  videoUrl:string,
  username:string,
  userImageUrl:string,
  LikesCount:number;
  SharesCount:number;
  videodesc:string,
}
function Video({videoUrl,username,userImageUrl,LikesCount,SharesCount,videodesc}:video) {
  useEffect(() => {
    if (videoRef.current?.paused) {
      setIspaused(true)
    }
  }, [])
  const [isPaused, setIspaused] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className='w-screen relative md:mx-auto overflow-hidden md:w-[26em] md:h-full bg-yellow-300 h-screen'>
      <video className='w-full h-full object-cover' controls={false} loop={true} onWaiting={() => { setisLoading(true) }} onCanPlay={() => { setisLoading(false) }} onClick={()=>handleTogglePlay(videoRef, setIspaused)} ref={videoRef} src={videoUrl}></video>
      <div className='flex items-center justify-center'>
        {isPaused && <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <Image onClick={() => handleTogglePlay(videoRef, setIspaused)} className='w-[3.875em] h-[3.875em]' width={500} alt='play button' height={500} src={'/pause.png'} />
        </div>}
        {videoRef.current?.readyState == 0 || isLoading && !isPaused && <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <><Loading/>loading..</>
        </div>}
      </div>
     <Videoinfo/>
     <div className='w-[17.125em] text-white  left-2 absolute bottom-[3em] h-[6.125em]'>
       <p className='text-[1.0625em] font-semibold'>{username}</p>
       <p className='leading-[18px] text-[0.9375em]'>
        <Wordshorten text={videodesc}/></p>
       <div className='flex items-center gap-[.4em]'>
       <Musicicon/>
       <div className='flex w-[6em]  overflow-hidden  items-center gap-[.4em]'>
        <span className='animate-marque text-nowrap'>Original Sound-{username}</span>
       </div>
       </div>
     </div>
    </div>
  )
}

export default Video
