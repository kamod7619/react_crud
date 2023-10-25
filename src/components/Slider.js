import React from "react"

let Slider = () => {
    return (        
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

  
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            
            
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://images.unsplash.com/photo-1614850715661-902fd7e93c78?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Los Angeles" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1614850716626-873413eb7c1b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chicago" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1614852624356-ca225b786805?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="New York" class="d-block w-100" />
                </div>
            </div>
            
            
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}


export default Slider;