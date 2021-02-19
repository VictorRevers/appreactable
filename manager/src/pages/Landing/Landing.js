import React from 'react';
import './Landing.css';

export default function Landing(){
    return(
        <div className="login-container">
            <div className="content">
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="senha"/>
                    <button>Entrar</button>
                </form>
            </div>
        </div>
    );
}