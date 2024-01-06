"use client"
import React, {useEffect, useState} from 'react'

const Timer = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)

    const deadline = "November, 30, 2023"

    const getTime = () => {
        const time = Date.parse(deadline)-Date.now()
        setDays(Math.floor(time/(1000*60*60*24)))
        setHours(Math.floor(time/(1000*60*60)%24))
        setMins(Math.floor(time/(1000*60)%60))
        setSecs(Math.floor((time/1000)%60))
    }

    useEffect(() => {
      const interval = setInterval(()=>getTime(deadline),1000)
    
      return ()=>  clearInterval(interval)
    }, [])
    
  return (
    <div className="flex justify-center flex-col items-center ">
    <div className="">
      {/* <div className=" text-center mt-5 lg:mt-10 mb-3 lg:mb-7 text-[35px] lg:text-[50px] htext">
        <span className='bg-clip-text text-transparent   bg-gradient-to-br from-white via-[#39a7ff] to-[#0E0F68]'>Hurry Up </span> 🚀
      </div> */}
        <div className='flex justify-center items-center gap-x-3 text-white font-mono '>
                {/* <div className='flex flex-col items-center '>
                    <div className='text-2xl  font-extralight htext'>{days<10 ? "0" + days:days} </div>
                    <div className='text-sm  text-[#39a7ff]'>Days</div>
                </div>
                <div  className='text-2xl  font-extralight htext mb-6'>:</div> */}
                <div className='flex flex-col items-center '>
                    <div className='text-[30px] font-extralight htext'>{hours<10 ? "0" + hours:hours} </div>
                    <div className='text-md  text-[#39a7ff]'>Hours</div>
                </div>
                <div  className='text-2xl font-extralight htext mb-6'>:</div>
                <div className='flex flex-col items-center '>
                    <div className='text-[30px] font-extralight htext'>{mins<10 ? "0" + mins:mins} </div>
                    <div className='text-md text-[#39a7ff]'>Mins</div>
                </div>
                <div  className='text-2xl font-extralight htext mb-6'>:</div>
                <div className='flex flex-col items-center '>
                    <div className='text-[30px] font-extralight htext'>{secs<10 ? "0" + secs:secs}</div>
                    <div className='text-md  text-[#39a7ff]'>Secs</div>
                </div>
        </div>
        {/* <div className='text-center text-sm lg:text-lg text-white mt-10 lg:mt-14 hsmall font-extralight  tracking-wider'>Left to Apply for the most awaited Hackathon here at</div>
        <div className='text-center text-[#39a7ff] leading-10  htext text-xl tracking-wider'>MJCET</div> */}
    </div>
    </div>
  )
}

export default Timer