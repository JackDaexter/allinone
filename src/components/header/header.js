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
            <nav class="navbar navbar-expand-sm navbar-dark">
                <a class="navbar-brand" href="#">AIO</a>
             
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
                
            </nav>
        </div>
    )}
}

export default header