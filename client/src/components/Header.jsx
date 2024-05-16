import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <h1
        className="text-center text-2xl font-bold"
        data-testid="cypress-title"
      >
        Book Catalog
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
