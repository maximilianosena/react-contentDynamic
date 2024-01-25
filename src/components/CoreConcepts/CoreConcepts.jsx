
import "./CoreConcepts.css";

// Función reutilizable 
//props es un párametro de React, que recibe un objeto como parametro, entonces utilizo la palabra mas su propiedad
// o en el parametro utilizo {} y paso directamente las propiedades como variables


export default function CoreConcept({image, title, description}){
    return (
      
        <li>
        <img src={image} alt=''/>
        <h3>{title}</h3>
        <p> {description} </p>
        </li>
      
    )
  }