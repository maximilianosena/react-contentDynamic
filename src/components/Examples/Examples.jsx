
//Importo todo lo que utiliza la funcion
import { useState } from "react";
import { EXAMPLES } from "../../data-with-examples";
import TabButton from "../../components/TabButton/TabButton"

// Importo Tabs, que son las pestañas
import Tabs from "../../components/Tabs/Tabs.jsx";

//Importo Section.jsx

import Section from "../Section/Section";

export default function Examples (){

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
  
    let tabContent = <p>Please select a Topic</p>;
  
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code> {EXAMPLES[selectedTopic].code} </code>
          </pre>
        </div>
      );
    }

return(
<Section id="examples"
title="Examples"
>
  <Tabs buttons={<>
    <TabButton
    isSelected={selectedTopic === "components"}
    onClick={() => handleSelect("components")}
  >
    Components
  </TabButton>
  <TabButton
    isSelected={selectedTopic === "jsx"}
    onClick={() => handleSelect("jsx")}
  >
    JSX
  </TabButton>
  <TabButton
    isSelected={selectedTopic === "props"}
    onClick={() => handleSelect("props")}
  >
    Props
  </TabButton>
  <TabButton
    isSelected={selectedTopic === "state"}
    onClick={() => handleSelect("state")}
  >
    State
  </TabButton>
  </>}>
    {tabContent}
    </Tabs>

</Section>
)}

//TabButton se encuentra dentro del prop Button, que tiene la estructura de la funcion Tabs