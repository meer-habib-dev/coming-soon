import React, { useState } from 'react';
import ComingModal from '../../ComingModal';

const Body = ({ setOpen }) => {
    const [op, setop] = useState(false)

    return (
        <div className='z-50 text-white flex flex-col  items-center'>
            <div className='w-full'>
                <p className='uppercase text-2xl  text-center leading-10 md:leading-0 md:text-5xl  mb-6 md:mb-16 tracking-[20px]'> The Adventure begins</p>
            </div>
            <div className='text-xs md:text-xl px-10 font-light mb-6  md:w-[75%] xl:w-[60%] text-center'>
                <p>Hold tight as we get our working robots together and produce the most astonishing product ever.


</p>
            </div>
            <div>
                <button onClick={() => setop(true)} className='  mt-8 animate-bounce uppercase py-2 md:py-3 px-12 rounded-full border-2 hover:bg-[gray]/70 transition duration-200 cursor-pointer hover:text-black'>
                    Notify me
                </button>
            </div>
           
        </div>
    );
};

export default Body;