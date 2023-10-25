import React,{ useEffect, useState } from "react";


let SingleProduct=()=>{

    const [image, setImage] = useState(null);
    const [productTitle, setTitle] = useState(null);
    const [price, setPrice] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(null);

   

    useEffect(() => {            
        let data=JSON.parse(localStorage.getItem("productData"))
        setImage(data.image)
        setTitle(data.title)
        setPrice(data.price)
        setCategory(data.category)
        setDescription(data.description)

    }, []);
    
    // console.log("productData",productData)

    let changeHeight={
        height:"450px"
    }

    return (
        <div className="container pt-5 mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="w3-card-4" >
                       
                                    <img src={image} style={changeHeight} className="w-100" alt="Alps"/>

                                
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>{productTitle}({category})</h2>

                    <h6>Rs. {price}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct