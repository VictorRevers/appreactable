import React from 'react';
import './ManagerNav.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

export default function ManagerNav(){
    return(
       <nav className="NavbarItems">
           <ul>
            <li>
                <h1 className="NavbarLogo">ManagerPage</h1>
            </li>
            <li>
                <Button variant="contained" color="default">
                    <ExitToAppIcon />
                </Button>
             </li>
           </ul>
       </nav>
    );
}