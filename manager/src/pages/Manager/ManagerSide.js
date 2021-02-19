import React from 'react';
import './ManagerSide.css';

import Button from '@material-ui/core/Button';
import TableChartIcon from '@material-ui/icons/TableChart';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom'


export default function SideBar(){
    return(
        <div className="SideBar">
        <ul>
            <li>
                <Link to="/table">
                    <Button>
                        <TableChartIcon />
                    </Button>
                </Link>
                
            </li>
            <hr />
            <li>
                <Link to="/add">
                    <Button>
                        <AddBoxIcon />
                    </Button>
                </Link>
            </li>
            <hr />
            <li>
                <Button>
                    <MonetizationOnIcon/>
                </Button>
            </li>
            <hr />
            <li>
                <Button>
                    <SettingsIcon/>
                </Button>
            </li>
        </ul>
    </div>
    );
}