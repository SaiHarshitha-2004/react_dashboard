import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context/ContextProvider';
import { chatData } from '../data/dummy';
import { Button } from '.';

const Notification = () => {
  const { currentColor ,handleClick } = useStateContext();

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Notifications</p>
          <button
                type='button'
                onClick={() => handleClick('userProfile' , false)}
                className='text-2xl p-3 rounded-xl  hover:bg-gray-400 mt-4 block'
              >
                <MdOutlineCancel />
              </button>
        </div>
        {chatData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center gap-5 border-b-2 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  {/*  image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM', */}
                  <p className="font-semibold ">{item.message}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.desc}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;