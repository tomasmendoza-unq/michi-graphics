import { useEffect } from "react";
import { UseGetDefaultShapes } from "../../shapes/hooks/use-get-shapes-default";
import { ShapesSidebar } from "../../shapes/components/shapesSidebar/ShapesSidebar";
import { DesignCanvas } from "../components/DesignCanvas";
import "./Designer.css";

export const Designer = () => {
    const { shapes, getDefaultShapes } = UseGetDefaultShapes();

    useEffect(() => {
        getDefaultShapes();
    }, [getDefaultShapes]);
    return (
        <section className="designer">
            <ShapesSidebar
                title="Formas"
                options={shapes}
                side="left"
            />

            <DesignCanvas />

            <ShapesSidebar
                title="Formas"
                options={shapes}
                side="right"
            />
        </section>
    );
};
