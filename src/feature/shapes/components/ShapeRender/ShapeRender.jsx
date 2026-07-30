import { Rect, Circle, Line } from "react-konva";

export const ShapeRenderer = ({ shape }) => {
    switch (shape.type) {
        case "rect":
            return (
                <Rect
                    key={shape.id}
                    {...shape}
                    draggable
                />
            );

        case "circle":
            return (
                <Circle
                    key={shape.id}
                    {...shape}
                    draggable
                />
            );

        case "line":
            return (
                <Line
                    key={shape.id}
                    {...shape}
                    draggable
                />
            );

        default:
            return null;
    }
};
