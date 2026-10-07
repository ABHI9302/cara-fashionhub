import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import MainContext from "./Context/MainContext";
import SetBackgroundContext from "./Context/SetBackgroundContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MainContext>
        
        <SetBackgroundContext>
            <Router />
        </SetBackgroundContext>
       
    </MainContext>
);
