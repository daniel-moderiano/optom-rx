import Nav from "../Nav/Nav"

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header__title">
        {/* Later add an image element within the link tag for a logo */}
        <a className="Header__logo" href="#">OptomRx</a>
      </h1>
      <Nav />
      
    </div>
  )
}

export default Header
