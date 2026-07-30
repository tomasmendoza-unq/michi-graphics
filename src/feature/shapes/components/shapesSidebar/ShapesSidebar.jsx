import { SideBar } from "../../../../shared/components/sideBar/SideBar";
import { ShapeItem } from "../ShapeItem/ShapeItem";

export const ShapesSidebar = ({ title, options, side }) => {
    console.log("ShapesSidebar options:", options); // Debugging line to check the options prop
    return (
        <SideBar
            title={title}
            side={side}
        >
            {options.map((shape) => (
                <ShapeItem
                    key={shape.id}
                    shape={shape}
                />
            ))}
        </SideBar>
    );
};
