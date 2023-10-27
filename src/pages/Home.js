import React from 'react'
import Slider from '../components/Slider'
import Card from '../components/Card'
import About from './About'
import Contact from './Contact'
import { Hello } from '../helpers/Common'






let Home = ()=>{    

    console.log("Helper",Hello())

    return (
        <div>
            
            <Slider/>
            
            {/* services section */}
            <div className='container pt-4 pb-5 mb-5'>
                <h2 className='text-center p-3'>Our Services</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Web Development" />
                    </div>
                    <div className='col-md-4'>
                        <Card image="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="App Development" />
                    </div>
                    <div className='col-md-4'>
                        <Card image="https://plus.unsplash.com/premium_photo-1661766140137-4c403bf77906?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Software Development" />
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card image="https://images.unsplash.com/photo-1609921141835-710b7fa6e438?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Android App Development" />
                    </div>
                    <div className='col-md-4'>
                        <Card image="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Ios App Development" />
                    </div>
                    <div className='col-md-4'>
                        <Card image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Hybred App Development" />
                    </div>
                </div>
            </div>
            {/* end */}

            <div className='container'>
                <hr/>
            </div>

            <About/>

            <div className='container'>
                <hr/>
            </div>

            <Contact/>



        </div>
    )
}

export default Home;