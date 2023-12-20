import React from "react";


function MainBody(){
    return(
        <main className="mbody">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque voluptatibus sint.</p>
            
            <div className="btn">
                <button>Shop Now</button>
                <button className="secbtn">Category</button>
            </div>
            <div className="shop">
                <p>Available Only On</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="Amazon-logo" />
                    <img src="/images/flipkart.png" alt="Flipkart-logo" />
                </div>
            </div>
            </div>
            <div className="image">
            <img src="/images/hero-image.png" alt="Shoes-image" />
            </div>
        </main>
    );
}

export default MainBody;