//Agrego className para darle estilo de una clase que se encuentra en css
//Agrego ...props al botón para fusionar y recibir props extras

export default function TabButton ({children, isSelected, ...props}){
    console.log("TABBUTON COMPONENT RENDERING")
return <li><button className={isSelected? "active" : undefined} {...props}>{children}</button></li>
}