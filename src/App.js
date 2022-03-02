import { ItemListContainer } from "./components/ItemsListContainer/ItemListContainer"; //importamos nuestro componente ItemListContainer
import { NavBar } from "./components/NavBar/NavBar"; /*importamos el componente NavBar*/

function App() {
  
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer /> 
    </div>
  );
}

export default App;
