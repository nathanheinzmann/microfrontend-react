import * as singleSpa from "single-spa";

const buttonStyle = {
  backgroundColor: "lightblue",
  border: "none",
  padding: "1rem",
  cursor: "pointer",
}

const menuStyle = {
  display: "flex",
  backgroundColor: "lightblue",
  padding: "1rem",
}

const Menu = () => {
  return (
    <div style={menuStyle}>
      <button style={buttonStyle} onClick={() => singleSpa.navigateToUrl("/")}>Home</button>
      <button style={buttonStyle} onClick={() => singleSpa.navigateToUrl("/about")}>About</button>
      <button style={buttonStyle} onClick={() => singleSpa.navigateToUrl("/contact")}>Contact</button>
    </div>
  )
}

export default Menu;