import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

const App = () => {
  return (
 <>
    <ul className="d-flex gap-4 p-4 ">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/posts">Posts</NavLink></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/" element={<Posts />} />
      <Route path="/posts/:id" element={<Post/>} />
     
    </Routes>
 
 
 </>
  );
};

export default App;
