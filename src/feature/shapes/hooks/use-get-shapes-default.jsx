import { useState } from "react";
import { getDefaultShapesService } from "../service/get-default-shapes.service";

export const UseGetDefaultShapes = () => {
    const [shapes, setShapes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getDefaultShapes = async () => {
        setLoading(true);
        setError(null);

        const data = await getDefaultShapesService();
        setShapes(data);
        setLoading(false);
    };

    return { shapes, error, loading, getDefaultShapes };
};
