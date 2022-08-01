import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return ( 
    <div className="home" >   
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/>
    <div className="home__row">
        <Product
        id="3"
        title="The Lean Startup, cool book to compensate for your bad start"
        price={11.20}
        rating={5}
        image="https://ae01.alicdn.com/kf/S3baab4ba0fdf441fb2625509fa84bb7be/The-Lean-Startup-by-Eric-Ries-English-Books-Growth-Mindset-Start-ups-Growth-thinking-books-for.jpg"
         />
     <Product
        id="3"
        title="The Lean Startup, cool book to compensate for your bad start"
        price={11.20}
        rating={5}
        image="https://m.media-amazon.com/images/I/41p8pkRI5HL.jpg"
    />
    </div>
    <div className="home__row">
        <Product
        id="3"
        title="The Lean Startup, cool book to compensate for your bad start"
        price={11.20}
        rating={5}
        image="https://entrepreneur-us.imgix.net/covers/9781642011357.jpg?auto=format&w=298?auto=webp&quality=95&crop=16:9&width=250"
    />
    <Product
        id="3"
        title="The Lean Startup, cool book to compensate for your bad start"
        price={11.20}
        rating={5}
        image="https://m.media-amazon.com/images/I/41p8pkRI5HL.jpg"
    />
    </div>
    <div className="home__row">
        <Product
        id="3"
        title="The Lean Startup, cool book to compensate for your bad start"
        price={11.20}
        rating={5}
        image="https://m.media-amazon.com/images/I/41p8pkRI5HL.jpg"
    />
    <Product
        id="3"
        title="The Lean Startup, cool book to compensate for your bad start"
        price={11.20}
        rating={5}
        image="https://m.media-amazon.com/images/I/41p8pkRI5HL.jpg"
    />
    <Product
        id="3"
        title="The Lean Startup, cool book to compensate for your bad start"
        price={11.20}
        rating={5}
        image="https://entrepreneur-us.imgix.net/covers/9781642011357.jpg?auto=format&w=298?auto=webp&quality=95&crop=16:9&width=250"
    />
    </div>
    </div> 
    )
}

export default Home;
