import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext , initialState } from '../context/ContextProvider';
import { userData } from '../data/dummy';
import { CgProfile } from "react-icons/cg";
import {Button} from '../components';

const UserProfile = () => {
  const text= 'text-md p-1';
  const {currentColor ,handleClick} = useStateContext();
  const btn = `w-[30px] rounded-xl border border-${currentColor}`;
  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0'>
    <div className="float-right h-screen  dark:text-gray-200 dark:bg-[#484B52] bg-gray-100 md:w-400 ">
      <div className="flex justify-between items-center p-2">
          <p className="font-semibold text-lg">Profile</p>
          <button
                type='button'
                onClick={() => handleClick('userProfile',false)}
                className='text-2xl p-3 rounded-xl  hover:bg-gray-400 mt-4 block'
              >
                <MdOutlineCancel />
              </button>

        </div>
     {userData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center gap-5 border-b-2 dark:border-gray-600 pl-10 pr-10">
                <div className='flex flex-col h-full w-full items-center'>
                  <p><CgProfile /></p>
                  <img className="rounded-2xl w-[70%] items-center border-black mb-3 border-b-2" src={item.image} alt="" />
                  <p className="font-semibold ">{item.name}</p>
                  <p className={text}>{item.pursuing}</p>
                    <p className={text}>{item.UG}</p>    
                    <p className={text}>{item.year}</p>     
                    <div className="mt-1">
                        <p className="text-lg font-semibold mb-2 border-black border-t-1 text-center pt-3">Connect via:</p>
                        <div className="flex items-center gap-4 flex-row">
                         <Button color="white" bgColor={currentColor} text="LinkedIn" borderRadius='10px' size='md'/> 
                         <Button color="white" bgColor={currentColor} text="Twitter" borderRadius='10px' size='md'/> 
                         <Button color="white" bgColor={currentColor} text="github" borderRadius='10px' size='md'/>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default UserProfile;
