import Header from "./components/Header/Header.tsx";
import InteractiveMap from "./components/InteractiveMap/InteractiveMap.tsx";
import {useState} from "react";

function App() {
    const [valueSelect, setValueSelect] = useState("");

    return (
        <>
            <Header valueSelect={valueSelect} setValueSelect={setValueSelect}/>
            <InteractiveMap valueSelect={valueSelect}></InteractiveMap>
        </>
    );
}

export default App
