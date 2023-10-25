import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    let redirectRouting= (routName)=>{
        if(!routName){
            navigate(`/`)
        }else{

            navigate(`/${routName}`)
        }
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="javascript:void(0)" onClick={() => redirectRouting()}>Shopper Store</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)" onClick={() => redirectRouting()}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)" onClick={() => redirectRouting('read')}>Crud Operation</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)" onClick={() => redirectRouting('about')}>About US</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)" onClick={() => redirectRouting('blog')}>Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)" onClick={() => redirectRouting('product-list')}>Shop Now</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)" onClick={() => redirectRouting('contact')}>Contact US</a>
                </li>
            </ul>            
            </div>
        </div>
        </nav>
    )
}
