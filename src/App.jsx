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

      <div className="gridThree">
        <article className="sectionPart">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            doloremqem magni, culpa eveniet unde animi saepe id aliquid
            voluptatibus minima dolores! Ab molestiae velit deleniti
          </p>
        </article>
        <article className="sectionPart">
          <h3>Company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            doloremque officiis voluptatem magni, culpa eveniet unde animi saepe
          </p>
        </article>
        <article className="sectionPart">
          <h3>Services</h3>
          <p>
            Lorem ipsum consectetur adipisicing elit. Dignissimos doloremque
            officiis voluptatem magni, culpa eveniet unde animi saepe id aliquid
            voluptatibus minima dolores! Ab molestiae velit deleniti
          </p>
        </article>
      </div>
    </div>
  );
}

export default App;
