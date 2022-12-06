import '../css/main.css'
import ListaProductos from './Lista-Productos';

function Main() {
  return (
    <>
      <main className="main">
        <div className='contenedor-principal'>
          <h1>TODOS LOS ARTICULOS EN VENTA</h1>
          <div className='productos'>
            <ListaProductos />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
