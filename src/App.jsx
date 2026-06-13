
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BadgesPage from "./pages/fe/BadgesPage";
import AddPage from "./pages/fe/AddPage";
import EditPage from "./pages/fe/EditPage";
import DeletePage from "./pages/fe/DeletePage";


function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <Routes>
        <Route path="/" element={<BadgesPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:badgeId" element={<EditPage />} />
        <Route path="/delete/:badgeId" element={<DeletePage />} />
      </Routes>
    </Router>
  );

}

export default App
