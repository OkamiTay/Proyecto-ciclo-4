import React, { Component } from "react";
import logo from './logo.png';
class Pie_pagina extends Component {

    render() {
        return (
            <div>
                <div className="b-example-divider"></div>

                <div className="container-fluid">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <img className="bi" width="100" height="auto" src={logo}/>
                            </a>
                            <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><img className="bi" width="24" height="24" src="https://icons.getbootstrap.com/assets/icons/facebook.svg"/></li>
                            <li className="ms-3"><img className="bi" width="24" height="24" src={require("./Recursos/instagram.svg").default}/></li>
                            <li className="ms-3"><img className="bi" width="24" height="24" src={process.env.PUBLIC_URL+"./multimedia/twitter.svg"}/></li>
                        </ul>
                    </footer>
                </div>
            </div>
        );

    }
}

export default Pie_pagina;