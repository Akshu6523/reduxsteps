import React from "react";
function Home(){
    return(
        <div >
            <div className="add-to-cart">
                <img src="https://cdn-icons-png.flaticon.com/512/70/70021.png" alt="" />
            </div>
           <h1>Home Component</h1>
           <div className="cart-wrapper">
            <div className="img-wrapper img">
                   <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/iphoto/ios15-iphone13-pro-home-camera-callout.png" alt=""  />
            </div>
            <div className="text-wrapper">
                   <span>Brand  : I-Phone  </span>
                   <span>  Price : $350</span>
            </div>
            <div className="btn-wrapper button">
                   <button>Add To Cart</button>
            </div>
           </div>
        </div>
    )
}
export default Home