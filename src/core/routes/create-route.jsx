import { createBrowserRouter } from "react-router-dom";
import { designerRoutes } from "../../feature/scratcher-designer/routes/designer-routes";

export const routes = createBrowserRouter([...designerRoutes]);
