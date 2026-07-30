import { Stage, Layer } from "react-konva";
import { ShapeRenderer } from "../ShapeRender/ShapeRender";

export const ShapeItem = ({ shape, onClick }) => {
    return (
        <button
            className="shape-item"
            onClick={() => onClick?.(shape)}
        >
            <Stage
                width={60}
                height={60}
                className="shape-item__preview"
            >
                <Layer>
                    <ShapeRenderer shape={shape} />
                </Layer>
            </Stage>

            <span>{shape.name}</span>
        </button>
    );
};
