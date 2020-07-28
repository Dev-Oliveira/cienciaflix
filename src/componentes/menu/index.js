import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/cienciaflix-logo.png'
import './Menu.css'
import Button from '../Button'
/* import ButtonLink from './componentes/ButtonLink' */


function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Cienciaflix-logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;