import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./core/routes/create-route";

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
