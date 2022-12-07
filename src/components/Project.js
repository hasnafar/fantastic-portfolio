import React, { Component } from 'react';

class Project extends Component{
    render(){
        return (
            <article id="My-Work" class="Overall-Grid">

          
            <header class="Overall-Title"><h2>My <br/> Work</h2></header>
            
         
            <ul class="Work-SubGrid">
                
                     
                    <li class="item1">
                        <a class = "portfolio-links" href="https://hasnafar.github.io/ideal-event-master/" target="_blank"></a>
                         <summary class="work-text" >
                                <h5>Event Master</h5>
                                <p>HTML/CSS/Javascript</p>
                         </summary>
                    </li>
            

                  
                    <li class="item2">
                        <a class = "portfolio-links" href="https://boredom-buster.herokuapp.com/" target="_blank"></a>
                        <summary class="work-text">
                                <h5>Bordeom Buster</h5>
                                <p>JS/Handlebars/MySQL</p>
                        </summary>
                    </li>

                   
                    <li class="item3">
                         <summary class="work-text" href="https://mood-ring.herokuapp.com/">
                                <h5>Mood Ring</h5>
                                <p>JS/MERN</p>
                         </summary>
                    </li>

                   
                    <li class="item4">
                        <summary class="work-text">
                                <h5>Placeholder</h5>
                                <p>Placeholder</p>
                        </summary>
                    </li>

                    
                      <li class="item5">
                        <summary class="work-text">
                                <h5>Placeholder</h5>
                                <p>Placeholder</p>
                        </summary>
                    </li>
            </ul>
          </article>
        )
    }
}
export default Project;


