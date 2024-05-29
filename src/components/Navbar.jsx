import React , {useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdAccountCircle } from 'react-icons/md';
import {Cart  , Notification , UserProfile} from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({title , customfunc , color , icon , dotColor}) => (
    <TooltipComponent content={title} position="BottomCenter">
      <button type="button" onClick={() => customfunc()} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background:dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}
      </button>
    </TooltipComponent>
)
const Navbar = () => {
  const {activeMenu , setActiveMenu , isClicked  , handleClick , screenSize ,setScreenSize , currentColor} = useStateContext();
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [screenSize , setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize , activeMenu , setActiveMenu]);
   

  return (
    <div className='flex justify-between p-2 md:mx-6 md:ml-6 relative'>
      <NavButton title="Menu" customfunc={() => setActiveMenu(!activeMenu)} 
      color={currentColor} icon={<AiOutlineMenu />}/>
      <div className='flex'>
        <NavButton title="Cart" customfunc={() => handleClick('cart' , true)} color={currentColor}
           icon={<FiShoppingCart />} />
        <NavButton title="Notifications" dotColor="#03C9D7" customfunc={()=> handleClick('notification' , true)} color={currentColor} icon={<RiNotification3Line />} />
        <NavButton title="UserProfile" dotColor='' customfunc={() => handleClick('userProfile' , true)} color={currentColor} icon={<MdAccountCircle />}/>
        <div>
        {isClicked.cart && <Cart />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
