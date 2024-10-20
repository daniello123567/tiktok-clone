export const getVideos = async () => {
  const response = await fetch('https://tiktok-data-nu.vercel.app/videos');
  const videos = await response.json();
  return videos;
};
export const handleTogglePlay = (videoRef:any,setPaused:any)=>{
  if(videoRef.current?.paused){
    videoRef.current.play()
    setPaused(false)
  }else{
    videoRef.current?.pause();
    setPaused(true)
  }
}
