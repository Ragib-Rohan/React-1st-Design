import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import web from "../img/rr.svg";


function Common(props) {
    return ( 
        <div>
            <section id="header" className="m">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto mt-5">
                           <div className="row">
                           <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 hh">
                                <h1>{props.articleh1} <strong >RD Technical</strong></h1>
                                <h5 className="my-3">
                                    {props.articleh2}
                                </h5>
                                <div className="mt-3">
                                    <NavLink className="bt" to={props.visit} > {props.btnName}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 orderlg-2 header-img">
                                <img src={props.image} alt="" className="img-fluid animated"/>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Common;