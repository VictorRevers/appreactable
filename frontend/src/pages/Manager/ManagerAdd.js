import React from 'react';
import './Manager.css';

import Button from '@material-ui/core/Button';

import ManagerNav from './ManagerNav.js';
import SideBar from './ManagerSide.js';

export default function Manager(){
    return(
        <div className="content"> 
            <ManagerNav />
          <div className="container">
              <SideBar />
              
              <div className="table">
                  <h1>Cadastrar Funcionário</h1>
                    <div className="form">
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Matricula" />
                        <input type="number" min="0.00" max="10000.00" step="0.01" placeholder="Custo em R$"/>
                        <Button variant="contained">Cadastrar</Button>
                    </div>

              </div>
            
          </div>
        </div>
        
    );
}