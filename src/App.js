import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemsListContainer/ItemListContainer"; //importamos nuestro componente ItemListContainer
import { NavBar } from "./components/NavBar/NavBar"; /*importamos el componente NavBar*/

function App() {
  
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer /> 
        <ItemDetailContainer /> 
    </div>
  );
}

export default App;
