import React from "react";
import "./Card.css";
import {Link} from 'react-router-dom';

function Card(props){
    return (
        <Link to={props.navigate}>
            <div className="card">
                <img src = {props.img}
                alt="admin_home_img" />
                <p>{props.name}</p>
            </div>
        </Link>

    );
}
export default Card;