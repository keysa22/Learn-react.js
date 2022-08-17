import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Clock from './components/Clock';

function App() {
 
const traceButton = () => {
  alert("alhamdulillah");
  console.log("button di click")
};
const paragraf = () => {
    return(
      <div>
    <h1>maaSyaaAllah</h1>
    {<marquee><h1><Clock></Clock></h1></marquee> 
    }
    </div>
    );

};
  return (
    <div className="App">
      <header className="App-header">
      <marquee><h1><Clock></Clock></h1></marquee>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Belajar Progaming
        </p>
        <button onClick={() => traceButton()}>ubah navgasi</button>
        <Footer paragraf={paragraf}/>
      </header>
    </div>
  );
}

export default App;
