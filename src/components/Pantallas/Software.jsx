import React from "react";
import { items } from "../itemList/itemList";
import TodosLosProductos from "../Todos-los-productos";
import '../../css/Pantallas.css/pantallas.css'

function Software() {
    var hardwareItems = [];

    for (var i = 0; i < items.length; i++){
        if(items[i].categoria === "software"){
            hardwareItems = [ ...hardwareItems, items[i]]
        }
    }

    return(
        <>
            <main className="main-software">
                <div className='contenedor-principal'>
                <h1>SOFTWARE EN VENTA</h1>
                <div className='productos'>
                    {
                        hardwareItems.map((item) => 
                        <TodosLosProductos 
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            img={item.img}
                            categoria={item.categoria}
                        />
                        )
                    }                
                </div>
                </div>
            </main>
            
        </>
    );
}

export default Software;