import { Stage, Layer, Rect, Circle } from "react-konva";

export default function Canvas() {
    return (
        <Stage
            width={800}
            height={600}
        >
            <Layer>
                <Rect
                    x={50}
                    y={50}
                    width={120}
                    height={80}
                    fill="red"
                    draggable
                />

                <Circle
                    x={300}
                    y={150}
                    radius={50}
                    fill="blue"
                    draggable
                />
            </Layer>
        </Stage>
    );
}
