import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Schedule from "./pages/Schedule"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (  
    <BrowserRouter>    
      <nav>      
      <h1>Allied MFG Pte Ltd</h1>
        <h2>Production Schedule</h2>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Order</Link>
        <Link to="/schedule">Schedule</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
