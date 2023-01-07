import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './page/Main';
import UserDetails from './page/UserDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<UserDetails />} />
        <Route path="/:id/:page" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
