import React from "react";
import '../css/producto.css'; 

export var itemSelect;

function TodosLosProductos({ id, nombre, precio, img, categoria}) {

    return(
        <div className={`contenedor-producto ${categoria}`} id={id}>
            <img 
                className="imagen-producto"
                src={require(`../img/prod-${img}.png`)}
                alt={nombre} />
            
            <div className="contenedor-detalles-producto">
                <p className="nombre-producto">
                    <strong>{nombre}</strong>
                </p>
                <p className="precio-producto">
                    <b>S/{(precio%1===0) ? precio+'.00' : precio}</b>
                </p>
            </div>

        </div>
    );
}

export default TodosLosProductos;