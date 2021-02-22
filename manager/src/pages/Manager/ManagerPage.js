import React, { useEffect, useState } from 'react';
import './Manager.css';
import MaterialTable from 'material-table';
import '@material-ui/core';
import '@material-ui/icons';
import api from '../../services/api';


import ManagerNav from './ManagerNav.js';
import SideBar from './ManagerSide.js';


export default function Manager(){

   const [data, setData] = useState([]);

    useEffect(()=>{
        api.get('functionary').then(response =>{
          setData(response.data);
         
        }).catch(err=>{
            console.log(err);
        });
    });
    
    return(
        <div className="content"> 
            <ManagerNav />
          <div className="container">
              <SideBar />
              
              <div  className="table">
                  <MaterialTable 
                    columns={[
                        { title: 'Nome', field: 'name'},
                        { title: 'Matrícula', field: 'register' },
                        { title: 'Custo', field: 'cost'}
                    ]}
                    title = "Tabela de custos por funcionário:"
                    data={data}
                    
                  />

              </div>
                    
          </div>
        </div>
        
    );
}