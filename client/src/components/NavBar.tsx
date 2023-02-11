const Navbar = ({ theme, setTheme }: any) => {
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <nav id="nav">
      <div className="nav-title">Two Boxes</div>
      <button className="nav-color-toggle" onClick={toggleTheme}>
        ☀
      </button>
    </nav>
  );
};

export default Navbar;
