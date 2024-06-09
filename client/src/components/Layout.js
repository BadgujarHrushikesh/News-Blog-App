import React, { useState } from 'react';
import SideBar from './SideBar';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FaRegUserCircle } from 'react-icons/fa';
import icon2 from '../assets/icon2.svg'

function Layout(props) {
    const [showSideBar, setShowSidebar] = useState(true)

    // const icon = 'https://drive.google.com/file/d/1GkPLYQKxBdFWCdKHMi505k9uKDXw2lLg/view?usp=sharing'
    return (
        // <div className='layout flex w-full'>
        //     <div className='sidebar'>
        //         <SideBar showSideBar={showSideBar}/>
        //     </div>
        //     <div className='w-full'>
        //         <div className='header bg-primary h-20 w-full'>
        //             <HiOutlineMenuAlt1 
        //             onClick={()=>setShowSidebar(!showSideBar)}
        //             color='gray'
        //             size={30}
        //             className='cursor-pointer'
        //             />

        //         </div>
        //         <div className='content'>
        //             {props.children}
        //         </div>
        //     </div>
        // </div>


        <div className='layout flex w-full'>
            <div className='sidebar'>
                <SideBar showSideBar={showSideBar} />
            </div>
            <div className='w-full h-full'>
                <div className='header bg-primary h-20 w-full flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className="cursor-pointer mr-5">
                            <HiOutlineMenuAlt1
                                onClick={() => setShowSidebar(!showSideBar)}
                                color='gray'
                                size={30}
                            />
                        </div>

                        {/* icon */}
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3">
                            <img src={icon2} alt="#" className="w-full h-full rounded-full" />
                        </div>
                        <a href="home" className="text-white text-3xl font-bold  ml-2">The Informer</a>

                        {/* icon */}

                       
                    </div>
                    <div className="mr-5 text-gray-300 flex items-center space-x-1 cursor-pointer">
                            <FaRegUserCircle />
                            <span>
                                {/* {JSON.parse(
                                    localStorage.getItem('user')
                                ).name.toUpperCase()} */}
                                {JSON.parse(
                                    localStorage.getItem('user')
                                ).name}
                            </span>
                        </div>
                </div>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        </div>





    );
}
export default Layout;