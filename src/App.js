import { ItemListContainer } from "./components/ItemsListContainer/ItemListContainer"; //importamos nuestro componente ItemListContainer
import { NavBar } from "./components/NavBar/NavBar"; /*importamos el componente NavBar*/

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer saludo="Hola a todos soy una prop" /> {/* Llamamos a nuestro componente ItemListContainer y le pasamos una prop */} 
    </div>
  );
}

export default App;
