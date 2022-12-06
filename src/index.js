import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import Main from './components/Main';
import Hardware from './components/Pantallas/Hardware';
import Perifericos from './components/Pantallas/Perifericos';
import Software from './components/Pantallas/Software';
import HeaderFunct from './js/HeaderFunct';

function filename(){
    // eslint-disable-next-line no-restricted-globals
    var rutaAbsoluta = self.location.href;   
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}

if (filename() === "index.html" || filename() === ""){
    HeaderFunct();
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
    );
}

if (filename() === "perifericos.html"){
    HeaderFunct();
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Perifericos />
    </React.StrictMode>
    );
}

if (filename() === "hardware.html"){
    HeaderFunct();
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Hardware />
    </React.StrictMode>
    );
}

if (filename() === "software.html"){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Software />
    </React.StrictMode>
    );
}



