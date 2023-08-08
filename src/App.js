import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings, FieldSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css'
import { distinctStringValues } from '@syncfusion/ej2-react-grids'

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className=' flex relative bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='top'>
              <button type='button' className=' text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white ' style={{ background: 'blue', borderRadius: '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div>
              Sidebar
            </div>
          ) : (
            <div>
              Sidebar w-0
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App