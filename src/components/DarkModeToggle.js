

import React,{useEffect} from 'react'
import Switch from 'react-switch'
import { useDispatch,useSelector } from 'react-redux'
import { actions } from '../state/index'
import { bindActionCreators } from 'redux'


const DarkModeToggle = () => {

    const dispatch=useDispatch()

    const {changeMode}=bindActionCreators(actions,dispatch)

    const darkMode=useSelector(state=>state.mode)
    

    console.log('darkMode',darkMode)
   


    let changePosition={
        position: "fixed",
        top: "50%",
        left: "0%"
    }

  return (
    <div>
        <label style={changePosition}>
            <Switch
                onChange={()=>{changeMode("darkmode",darkMode)}}
                checked={darkMode}
                offColor="#888"
                onColor="#333"
            />
            {/* <span className={darkMode ? 'text-light' : 'text-dark'}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span> */}
        </label>
    </div>
  )
}

export default DarkModeToggle