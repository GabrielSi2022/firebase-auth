import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <section className="bg-gray-800 h-screen  px-5 w-full flex justify-center items-center">
    <App />
  </section>
);

reportWebVitals();
