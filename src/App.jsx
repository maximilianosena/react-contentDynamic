
//Importo Fragment from React, o utilizo <> vacíos
import Header from "./components/Header/Header.jsx";
import CodeCoreConcepts from "./components/CodeCoreConcepts/CodeCoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";



//Vamos a divir en pequeños segmentos el código de App, 
//llevando los componentes y resumiendo en CodeCoreConcepts.jsx y Examples.jsx

//Limpié la función dividendo en pequeñas partes
function App() {
  return (
    <>
      <Header></Header>
      <main>
       <CodeCoreConcepts />
       <Examples />
      </main>
    </>
  );
}

// Cambio el div por Fragment, borra el Div innecesario, o con <> </> vacíos
export default App;
