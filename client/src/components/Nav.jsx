import { NavLink } from "react-router-dom";

const Nav = () => {
  const navigation = [
    { path: "/", name: "List Book" },
    { path: "/add", name: "Add Book" },
  ];
  return (
    <nav className="mt-8 gap-4 flex justify-center">
      {navigation.map((nav) => (
        <NavLink
          key={nav.name}
          to={nav.path}
          className={({ isActive }) =>
            isActive
              ? "border px-8 py-2 text-white bg-[#222]"
              : "border px-8 py-2 text-black bg-white"
          }
        >
          {nav.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
