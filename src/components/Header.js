import React from 'react';
import Navigation from './Navigation';
import Project from './Project';


function Header () {
    return (
        <section class="header">

        {/* Developer Name */}
            <h1> Hasna Farrukh   </h1>

            {/* Page Navigation */}
            <nav><Navigation /></nav>
            
            

        </section>
    )
}

export default Header;