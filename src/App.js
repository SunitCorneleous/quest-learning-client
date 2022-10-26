import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeProvider";

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
