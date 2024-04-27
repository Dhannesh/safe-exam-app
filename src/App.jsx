import Home from "./Home";
import logo from "./assets/logo.png";
import acpc from "./assets/acpc-logo.jpg";
function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <Home />
    </>
  );
}

export default App;
