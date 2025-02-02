import {FC} from "react";

type InteractiveMapProps = {
    valueSelect: string;
}

const InteractiveMap: FC<InteractiveMapProps> = ({valueSelect}: InteractiveMapProps) => {
    return (
        <>
            <h6>Interactive map for classroom: {valueSelect}</h6>
        </>
    );
};

export default InteractiveMap;