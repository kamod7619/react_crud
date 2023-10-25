import React from "react";
import { useNavigate } from 'react-router-dom';


let ProductCard = ({data}) => {

    let navigate=useNavigate()

    let viewProduct= (data)=>{

        navigate(`/single-product`)
        localStorage.setItem("productData",JSON.stringify(data))
    }

    return (
        <div className="col-md-3 mb-2">
            <div className="w3-card-4">
                <img src={data.image} className="w-100" alt="Alps"/>
                <div className="w3-container w3-center pt-2 pb-2">
                <p>{data.title}({data.category})</p>
                <p>Rs. {data.price}</p>
                <a href="javascript:void(0);" onClick={()=>{ viewProduct(data)}} className="btn btn-success">View Product</a>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard;