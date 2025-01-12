import { useContext } from "react";
import { ThemeContext } from "./Theme";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  if(theme === "dark") document.body.style.backgroundColor = "black";
  else document.body.style.backgroundColor = "white";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={theme === "dark" ? { color: "white" } : { color: "black" }}>
  Current Theme: {theme}
</h1>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggler;
