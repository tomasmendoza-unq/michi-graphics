import { Stage, Layer } from "react-konva";
import { ShapeRenderer } from "../ShapeRender/ShapeRender";

const PREVIEW_SIZE = 60;

const getPreviewProps = (shape) => {
    const centered = { x: PREVIEW_SIZE / 2, y: PREVIEW_SIZE / 2 };

    switch (shape.type) {
        case "rect":
            return { ...shape, x: 10, y: 15, width: 40, height: 30 };
        case "circle":
            return { ...shape, x: centered.x, y: centered.y, radius: 20 };
        case "line":
            return { ...shape, points: [10, 50, 50, 10] };
        default:
            return shape;
    }
};

export const ShapeItem = ({ shape, onClick }) => {
    const previewShape = getPreviewProps(shape);

    return (
        <button
            className="shape-item"
            onClick={() => onClick?.(shape)}
        >
            <Stage
                width={PREVIEW_SIZE}
                height={PREVIEW_SIZE}
                className="shape-item__preview"
            >
                <Layer>
                    <ShapeRenderer shape={previewShape} />
                </Layer>
            </Stage>
            <span>{shape.name}</span>
        </button>
    );
};
