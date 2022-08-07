import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel/>} />     
      </Routes>
    </BrowserRouter>
  );
}
