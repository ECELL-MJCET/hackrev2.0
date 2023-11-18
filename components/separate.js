import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Separate = () => {
  return (
    <div className='flex justify-center mt-10 lg:mt-2 pb-10'>
      <div className='w-[90%] lg:w-[80%]'>
      <div className="text-white text-center  mb-4 lg:mb-7 text-[35px] lg:text-[50px] htext ">
          Registration
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col   justify-center items-center">
            {/* <div className='font-sans text-center text-gray-400 font-extrabold hsmall text-2xl mb-5 lg:text-3xl'>Registration Guidelines</div> */}
            <ul className="list-disc text-white hsmall font-extrabold text-sm lg:text-lg leading-7 lg:leading-8 mb-5 ">
            <div className='text-[#39a7ff] text-center mb-4'>Read the below instructions carefully. </div>
              <li>The teams can register through the link. </li>
              {/* <li>Teams can submit upto 2 abstracts per track / domain.</li> */}
              <li>
                The teams must follow the PPT template provided for idea
                
                submission. (Where is the template ?).
              </li>
              <li> <Link href="https://docs.google.com/presentation/d/1GhjgVSNbTkEbMkpWjpkKEN30jCmfvd7n/edit?usp=sharing&ouid=107302460270637865614&rtpof=true&sd=true" target="_blank"><span className="text-[#39a7ff] underline underline-offset-1 cursor-pointer">Click Here</span> </Link>to download sample PPT</li>
              
              <li>
                The registration window will be open from 11th Nov 2023 to 25th
                Nov 2023.
              </li>
              <li>
                The teams registering for hardware track should submit a block
                diagram and list of hardware components that they would like to
                use along with the abstract. (The organisers will provide 220 V
                AC power supply, the teams should organise for their own
                components or batteries as required).
              </li>
            </ul>
          </div>
          
        </div>
        <div className='flex justify-center'>
      <div className='w-[97%] lg:w-[70%]'>
      <div className='grid grid-cols-1 gap-8' >
                <div className=' border-[#39a7ff] border-[1px] rounded-lg lg:rounded-2xl shadows flex flex-col items-center pt-2'>
                  <div className='flex flex-col lg:flex-row items-center justify-start gap-4 p-3'>
                   <div className='p-4 bg-[#39a7ff] rounded-full'> <img src="../assets/soft.png" className='lg:h-16 lg:w-16 h-12' alt="" /></div>
                    <div className='lg:w-[80%] text-white'>
                        <div className='hsmall text-xl font-extrabold text-center lg:text-left'>
                            Generic Software
                        </div>
                        <div className='hsmall leading-snug tracking-tight text-sm lg:text-[16px] mt-1 text-center lg:text-left '>
                        Discover the world of computer magic in the Generic Software pathway. It is all about creating cool things like websites and mobile apps. Whether you are a coding whiz or just getting started, dive into crafting awesome digital solutions!
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-center items-center px-2 lg:px-3 py-2 lg:py-2 border-2 border-[#39a7ff] rounded-xl cursor-pointer bg-[#39a7ff] hover:bg-opacity-70 w-[60%] lg:w-[40%]  mt-2 mb-4 duration-500  transition delay-300">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdvgoPeIs7DYNlr1C2-hjQt9-g28w0IX_Vq7fQPYm48Ip8QOg/viewform" target="_blank">
           
              <div className="text-md lg:text-[20px] text-white hsmall flex justify-center items-center font-extrabold">
                Register Now <BsArrowRight className="ml-1" />
            
            </div>
          </Link>
          </div>
                </div>
                <div className=' border-[#39a7ff] border-[1px] rounded-lg lg:rounded-2xl shadows flex flex-col items-center pt-2'>
                  <div className='flex flex-col lg:flex-row items-center justify-start gap-4 p-3'>
                   <div className='p-4 bg-[#39a7ff] rounded-full'> <img src="../assets/hard.png" className='lg:h-16 lg:w-16 h-12' alt="" /></div>
                    <div className='lg:w-[80%] text-white'>
                        <div className='hsmall text-xl font-extrabold text-center lg:text-left'>
                            Generic Hardware
                        </div>
                        <div className='hsmall leading-snug tracking-tight text-sm lg:text-[16px] mt-1 text-center lg:text-left '>
                        Get into cool tech stuff with the Generic Hardware pathway. If you like circuitry or building hardware, this track lets you turn your ideas into real gadgets.
 </div>
                    </div>
                    </div>
                    <div className="flex justify-center items-center px-2 lg:px-3 py-2 lg:py-2 border-2 border-[#39a7ff] rounded-xl cursor-pointer bg-[#39a7ff] hover:bg-opacity-70 w-[60%] lg:w-[40%]  mt-2 mb-4 duration-500  transition delay-300">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdvgoPeIs7DYNlr1C2-hjQt9-g28w0IX_Vq7fQPYm48Ip8QOg/viewform" target="_blank">
           
              <div className="text-md lg:text-[20px] text-white hsmall flex justify-center items-center font-extrabold">
                Register Now <BsArrowRight className="ml-1" />
            
            </div>
          </Link>
          </div>
                </div>
                <div className=' border-[#39a7ff] border-[1px] rounded-lg lg:rounded-2xl shadows flex flex-col items-center pt-2'>
                  <div className='flex flex-col lg:flex-row items-center justify-start gap-4 p-3'>
                   <div className='p-4 bg-[#39a7ff] rounded-full'> <img src="../assets/healthcare.png" className='lg:h-16 lg:w-16 h-12' alt="" /></div>
                    <div className='lg:w-[80%] text-white'>
                        <div className='hsmall text-xl font-extrabold text-center lg:text-left'>
                            Health Care
                        </div>
                        <div className='hsmall leading-snug tracking-tight text-sm lg:text-[16px] mt-1 text-center lg:text-left '>
                        Mix tech and healthcare in this pathway, where your ideas could make a big difference in how we care for people. It is open to tech lovers and healthcare folks alike.
</div>
                    </div>
                    </div>
                    <div className="flex justify-center items-center px-2 lg:px-3 py-2 lg:py-2 border-2 border-[#39a7ff] rounded-xl cursor-pointer bg-[#39a7ff] hover:bg-opacity-70 w-[60%] lg:w-[40%]  mt-2 mb-4 duration-500  transition delay-300">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdvgoPeIs7DYNlr1C2-hjQt9-g28w0IX_Vq7fQPYm48Ip8QOg/viewform" target="_blank">
           
              <div className="text-md lg:text-[20px] text-white hsmall flex justify-center items-center font-extrabold">
                Register Now <BsArrowRight className="ml-1" />
            
            </div>
          </Link>
          </div>
                </div>
                <div className=' border-[#39a7ff] border-[1px] rounded-lg lg:rounded-2xl shadows flex flex-col items-center pt-2'>
                  <div className='flex flex-col lg:flex-row items-center justify-start gap-4 p-3'>
                   <div className='p-4 bg-[#39a7ff] rounded-full'> <img src="../assets/fintech.png" className='lg:h-16 lg:w-16 h-12' alt="" /></div>
                    <div className='lg:w-[80%] text-white'>
                        <div className='hsmall text-xl font-extrabold text-center lg:text-left'>
                            Fintech
                        </div>
                        <div className='hsmall leading-snug tracking-tight text-sm lg:text-[16px] mt-1 text-center lg:text-left '>
                        Shape the future of finance in the Fintech pathway by exploring blockchain and other cutting-edge financial innovations. Whether you
                         are developing disruptive payment solutions or innovative financial apps, this pathway invites you to redefine the landscape where tech and finance converge.
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-center items-center px-2 lg:px-3 py-2 lg:py-2 border-2 border-[#39a7ff] rounded-xl cursor-pointer bg-[#39a7ff] hover:bg-opacity-70 w-[60%] lg:w-[40%]  mt-2 mb-4 duration-500  transition delay-300">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdvgoPeIs7DYNlr1C2-hjQt9-g28w0IX_Vq7fQPYm48Ip8QOg/viewform" target="_blank">
           
              <div className="text-md lg:text-[20px] text-white hsmall flex justify-center items-center font-extrabold">
                Register Now <BsArrowRight className="ml-1" />
            
            </div>
          </Link>
          </div>
                </div>
               
            </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Separate