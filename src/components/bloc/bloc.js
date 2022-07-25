import React, {Component, useState} from 'react';
import './bloc.css'
import Widget from '../widgets/widget';


function Bloc(props){
    return (
        <div class="container">
            <div class="area">
                <div id="dropZone">Drop your widget here</div>
            </div>
        </div>
    )
}

function Blocs(){
    
    const [droppableElem, setdroppableElem] = useState([new Bloc(null)]);

    return (
        <div class="container-fluid">
            <div class="d-flex align-items-end">
                <div class="flex-shrink-0">
                    <img src="#" alt="" width=""/>
                </div>
                <div class="d-flex flex-row">
                    {droppableElem.map((bloc) => (
                            <div class="p-2" key={bloc}>{bloc}</div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}   



export default Blocs;