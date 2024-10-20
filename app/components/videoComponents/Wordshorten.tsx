"use client"
import React, { useState } from 'react'

function Wordshorten({text}:{text:string}) {
  const [showfulltext,setshowfulltext] = useState<boolean>(false);
  return <>{showfulltext?<>{text} {<button onClick={()=>setshowfulltext(false)}>Done</button>}</>:<>{text.slice(0,50)}{text.length>=50&&<button onClick={()=>setshowfulltext(true)}>...more</button>}</>}</>
}

export default Wordshorten
