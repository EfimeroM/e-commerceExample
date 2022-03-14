import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemsListContainer/ItemListContainer"; //importamos nuestro componente ItemListContainer
import { NavBar } from "./components/NavBar/NavBar"; /*importamos el componente NavBar*/

function App() {
  
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={ <ItemListContainer />} />
                <Route path="/category/:idCategory" element={ <ItemListContainer /> } />
                <Route path="/item/:idItem" element={ <ItemDetailContainer /> } />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
