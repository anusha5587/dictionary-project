import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="sunrise" />
        <br />
        <footer className="text-center">
          <div className="footer">
            Coded by Anoosha Anand and is open-soursed on{" "}
            <a
              href="https://github.com/anusha5587/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>{" "}
          </div>
        </footer>
        <br />
      </div>
    </div>
  );
}
