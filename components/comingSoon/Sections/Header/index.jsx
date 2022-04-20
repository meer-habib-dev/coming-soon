import React from 'react';
import {FaFacebookF, FaTwitter, FaYoutube,FaInstagram} from 'react-icons/fa'

const ComingSoonHeader = () => {
    return (
        <div className='w-full px-6 lg:px-10 xl:px-0 flex items-center justify-between z-50 text-white py-8'>
            <div>
<p className=' text-xl md:text-3xl  tracking-widest font-light '>Coming Soon</p>
            </div>
            <div className='flex space-x-4 md:space-x-10'>
                <div>

                <FaFacebookF className='hover:animate-bounce cursor-pointer'/>
                </div>
                <div>

                <FaTwitter className='hover:animate-bounce cursor-pointer'/>
                </div>
                <div>

                <FaYoutube className='hover:animate-bounce cursor-pointer'/>
                </div>
                <div>

                <FaInstagram className='hover:animate-bounce cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonHeader;