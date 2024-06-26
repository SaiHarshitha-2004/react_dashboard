import React  from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar  ,Sidebar , ThemeSettings} from './components';
import {Ecommerce ,Orders , Calendar , Employees  , Pyramid , Customers ,
   Area , Bar  , ColorPicker , Editor , Line} from './pages';
import { useStateContext } from './context/ContextProvider';


import './App.css';

const App = () => {
  const {activeMenu , themeSettings , setThemeSettings,currentColor , currentMode} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' :''}>
      <BrowserRouter>
         <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zindex:'1000'}}>
              <TooltipComponent content = 'settings' positions='Top'>
                <button type="button" className='text-3xl p-3 
                  hover:drop-shadow-xl hover:bg-light-gray text-white'
                  //to change bg dynamically we use inline style
                  style = {{background : `${currentColor}` , borderRadius : "50%"}} 
                  onClick={() => setThemeSettings(true)}>
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className='w-72 fixed Sidebar
              dark:bg-secondary-dark-bg bg-gray-300'> 
                 <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'> 
                 <Sidebar /> 
              </div>
            )}

            {/* navigation bar div */}
            <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
                       ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg 
                 navbar w-full'>
                  <Navbar />
               </div>

            {/* for routing */}
            <div>
               {themeSettings && <ThemeSettings />}
               <Routes>
                  {/* dashboard */}
                  <Route path='/' element={ <Ecommerce /> } />
                  <Route path='/ecommerce' element={ <Ecommerce /> } />

                  {/* pages */}
                  <Route path='/orders' element={ <Orders /> } />
                  <Route path='/employees' element={ <Employees /> } />
                  <Route path='/customers' element={ <Customers /> } />

                  {/* Apps*/}
                  <Route path='/calendar' element={ <Calendar /> } />
                  <Route path='/editor' element={ <Editor /> } />
                  <Route path='/color-picker' element={ <ColorPicker /> } />

                  {/* charts */}
                  <Route path='/line' element={ <Line /> } />
                  <Route path='/area' element={ <Area /> } />
                  <Route path='/bar' element={ <Bar /> } />
                  <Route path='/pyramid' element={ <Pyramid /> } />
                  
               </Routes>
               </div>
            </div>
         </div>
      </BrowserRouter>
    </div>
  )
}

export default App
