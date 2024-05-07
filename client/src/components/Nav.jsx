import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="">
      <ul className="mx-auto  max-w-lg flex  justify-center">
        <li className="hidden sm:inline text-slate-700 hover:underline">
          <Link to="/">List Books</Link>
        </li>
        <li className=" hidden sm:inline text-slate-700 hover:underline">
          <Link to="/add">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
