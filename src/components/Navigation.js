import React from 'react';
import {useState} from 'react';


function Navigation (){
    const [aboutState, updateAbout] = useState(true);
    const [workState, updateWork] = useState(false);
    const [contactState, updateContact] = useState(false);


        return (
        <ul>
        <li>
            <a href="#About-Me">About Me</a>
        </li>
        <li>
            <a href="#My-Work">My Work</a>
        </li>
        <li>
            <a href="#Contact-Me">Contact Me</a>
        </li>
        </ul>
        )
    }

export default Navigation;