import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/labs" />} />

          <Route path="/labs/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />

          {/* Redirects */}
          <Route path="/profile" element={<Navigate to="/tuiter/profile" />} />
          <Route path="/login" element={<Navigate to="/tuiter/login" />} />
          <Route path="/register" element={<Navigate to="/tuiter/register" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
