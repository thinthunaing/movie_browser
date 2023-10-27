import React from "react";
import Hero from "./Hero";

export default function About(){
    return(
        <>
        <Hero name='About!!'/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="lead">Note that the development build is not optimized.
To create a production build, use npm run build.</p>
                </div>
            </div>
        </div>
        </>
    )
}

