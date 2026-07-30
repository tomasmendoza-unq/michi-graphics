import { useEffect } from "react";
import { UseGetDefaultShapes } from "../../shapes/hooks/use-get-shapes-default";
import { ShapesSidebar } from "../../shapes/components/shapesSidebar/ShapesSidebar";

export const Designer = () => {
    const { shapes, getDefaultShapes } = UseGetDefaultShapes();

    useEffect(() => {
        getDefaultShapes();
    }, []);

    return (
        <section>
            <h1>Diseñador de rascadores</h1>
            <ShapesSidebar
                title="Formas"
                options={shapes}
                side="left"
            />
        </section>
    );
};
