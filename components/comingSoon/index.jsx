import Image from 'next/image';
import React, { useState } from 'react';
import ComingModal from './ComingModal';
import Body from './Sections/Body';
import ComingSoonFooter from './Sections/Footer';
import ComingSoonHeader from './Sections/Header';

const ComingSoon = () => {
    const[open, setOpen] = useState(true)
    return (
        <>
         <div className='w-screen h-screen bg-cd shadow-cs '>

            <div className='absolute w-screen h-full -z-10 '>
                <Image src='https://demo.templateflip.com/coming-soon-bootstrap-template/img/cover.jpg' alt='' layout='fill' objectFit='cover'/>
            </div>
            <div className=' max-w-5xl h-full w-full mx-auto flex flex-col  items-center justify-between z-50'>
                 <ComingSoonHeader />
            <Body setOpen={setOpen} />
            <ComingSoonFooter/>
            </div>
            </div>
            
            <div>
                <ComingModal open={open} setOpen={setOpen}/>
            </div></>
    );
};

export default ComingSoon;