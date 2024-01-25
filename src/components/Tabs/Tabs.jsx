//Children para exportar la información de tabContent.
//Buttons para generalizar la función, y poder meter los botones de TabButton en examples.jsx

export default function Tabs({children, buttons}){
    return <>
    <menu>
{buttons}
    </menu>
    {children}
    </>
}