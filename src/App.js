import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Blocks from "./pages/blocks/Blocks";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/** UNPROTECTED ROUTES */}
          {["/", "/signup"].map((path, index) => (
            <Route path={path} element={<Homepage />} key={index} />
          ))}
          <Route path="/blocks" element={<Blocks />} />

          {/* 404 ROUTE */}
          {/* <Route path="*" element={<PageError />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
