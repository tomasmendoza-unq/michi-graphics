export const getDefaultShapesService = async () => {
    return [
        {
            id: "1",
            type: "rect",
            x: 100,
            y: 80,
            width: 120,
            height: 60,
            fill: "#ff4d4f",
            rotation: 0,
        },
        {
            id: "2",
            type: "circle",
            x: 300,
            y: 150,
            radius: 40,
            fill: "#1890ff",
        },
        {
            id: "3",
            type: "line",
            points: [20, 20, 150, 150],
            stroke: "#ff0000",
            strokeWidth: 3,
        },
    ];
};
