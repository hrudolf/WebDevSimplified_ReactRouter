import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BookRoutes from "./BookRoutes";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>}></Route>
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/" state="Hi">Hello</NavLink>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><NavLink to="/books">BookList</NavLink></li>
        </ul>
      </nav>
      <p>{location.state}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books/*" element={<BookRoutes />}>

        </Route>
        {/*         <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
