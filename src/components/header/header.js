import React, {Component, ReactDom} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class header extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-8 col-xl-2 bg-dark">
                    <div class="d-inline-flex flex-column px-3 pt-2 text-white min-vh-100">
                        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline">AIO</span>
                        </a>
                        
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                            
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default header