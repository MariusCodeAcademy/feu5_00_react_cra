import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h2 className="logo">
          Logo<span>React</span>
        </h2>
        <nav className="mainNav">
          <a href="#home" className="navLink">
            Home
          </a>
          <a href="#product" className="navLink">
            Product
          </a>
          <a href="#company" className="navLink">
            Company
          </a>
          <a href="#contact" className="navLink">
            Contact
          </a>
        </nav>
      </header>

      <div className="hero">
        <img src="https://picsum.photos/id/8/1200/800" alt="hero" />
      </div>
      <h1 id="hi">Hello {5 + 5}</h1>
    </div>
  );
}

export default App;
