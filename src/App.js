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
        <main>
          <Dictionary />
        </main>
        <br />
        <br />
        <div className="footer">
          <footer className="text-center">
            Coded by Anoosha Anand and is open-soursed on{" "}
            <a
              href="https://github.com/anusha5587/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>{" "}
          </footer>
        </div>
      </div>
    </div>
  );
}
