
const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        {/* Later add an image element within the link tag for a logo */}
        <a href="#">OptomRx</a>
      </h1>
      {/* Another component here for nav */}
      <nav className="Header-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
