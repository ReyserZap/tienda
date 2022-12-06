import React from "react";
import TodosLosProductos from "./Todos-los-productos";
import { items } from './itemList/itemList';

function ListaProductos() {
    return(
        <>
            {
                items.map((producto) => 
                    <TodosLosProductos
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        img={producto.img}
                        categoria={producto.categoria}
                    />
                ) 
            }
        </>
    );
}

export default ListaProductos;