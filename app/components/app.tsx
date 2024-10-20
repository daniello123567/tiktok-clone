"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getVideos} from '../utils/Videoutils'
import Video from './videoComponents/singleVideo'
import  localfont from 'next/font/local'
import NavBar from './NavBar'
const tiktokFont = localfont({src:'../fonts/ProximaNova-Regular.otf'})

function Page() {
  const { isPending, data, error } = useQuery({
    queryKey: ['vids'],
    queryFn: () => getVideos()
  });
  return (
    <div className={`${tiktokFont.className} md:w-screen md:h-max`}>
      {!isPending&&data&&data.map((data:any)=>{
        return <Video userImageUrl={data.videoOwnerInfo.userImageLink} videoUrl={data.link} username={data.videoOwnerInfo.username} SharesCount={data.shares} LikesCount={data.likes} videodesc={data.videoDescription} />
      })}
     <NavBar/>
    </div>
  )
}

export default Page
