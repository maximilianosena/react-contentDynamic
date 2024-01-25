//Creo una función (Componente) que arma una estructura (patrón) para reutilizar en menos codigo
//Children permite que la estructura de información se arme como se precise

// Con ...props, le digo a la funcion Section que acepte todos los props que se agreguen manualmente
//Luego el párametro, le indico donde se utilizan esos props pasados
export default function Section ({title, children, ...props}){
    return (<section {...props}>
        <h2>{title}</h2>
        {children}
    </section>)
}