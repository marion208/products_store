import './pages_styles/NotFound.css';
import './../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

function NotFound() {
    return (
        <div className="NotFoundPage">
            <div className="container_not_found">
                <FontAwesomeIcon icon={faCompass} className="icon_compass" />
                <p><strong>On dirait que vous êtes perdu.</strong></p>
                <p>Que souhaitez-vous faire ?</p>
                <p><a href="/">Retourner à la page d'accueil</a></p>
                <p><a href="/cart">Accéder aux détails de votre panier</a></p>
            </div>
        </div>
    );
}

export default NotFound;