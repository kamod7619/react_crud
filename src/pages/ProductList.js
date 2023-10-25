import React,{ useEffect, useState } from 'react'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
import axios from 'axios';




let ProductList = ()=>{

    
    const [APIData, setAPIData] = useState([]);

    const getData=()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(response=>{
            if(response.status==200){
                setAPIData(response.data)
            }
            
        })
        .catch(error=>{
            console.log("error",error)
        })
            
    }

    useEffect(() => {
        getData()

    }, [])


    return (
        <div>
            <Slider/>
            
            {/* services section */}
            <div className='container pt-4 pb-5 mb-5'>
                <h2 className='text-center p-3'>Our Services</h2>
                <div className='row'>
                {APIData.map((data) => {
                  return (
                      <ProductCard data={data}/>                     
                  ) 
                  })}
                </div>
                
            </div>
            {/* end */}

           

           



        </div>
    )
}

export default ProductList;