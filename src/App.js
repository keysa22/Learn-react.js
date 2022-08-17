import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Clock from "./components/Clock";

function App() {
  const traceButton = () => {
    alert("alhamdulillah");
    console.log("button di click");
  };
  // eslint-disable-next-line
  const paragraf = () => {
    return (
      <div>
        <h1>maaSyaaAllah</h1>
        <span>
          <h1>
            <Clock></Clock>
          </h1>
        </span>
      </div>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <h1>
            <Clock></Clock>
          </h1>
        </span>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Belajar Progaming</p>
        <button onClick={() => traceButton()}>ubah navgasi</button>
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
}

export default App;
