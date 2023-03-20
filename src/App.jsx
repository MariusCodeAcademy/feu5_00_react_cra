import Header from './components/layout/Header';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

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
