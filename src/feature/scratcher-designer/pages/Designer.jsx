import { SideBar } from "../../../shared/components/sideBar/SideBar";
import Canvas from "../../shapes/components/card/shape-card";

export const Designer = () => {
    return (
        <section>
            <h1>Diseñador de rascadores</h1>
            <SideBar
                title="Piezas"
                options={["Opción 1", "Opción 2", "Opción 3"]}
                side="left"
            />
            <Canvas />
        </section>
    );
};
