import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bandas from './components/banda';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const navbar = {backgroundColor: '#B3DBE5'};
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <Navbar style = {navbar}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="https://imgs.search.brave.com/ArXV8oNRUvwuWpRcw_zYmg8x-HaxjvAsUlvLZ4Ej0YQ/rs:fit:880:1060:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL21p/ZGRsZS8zNjUtMzY1/ODI2N19tdXNpY2Fs/LW5vdGUtc3ltYm9s/LWNvbW1lbnRzLXNp/bWJvbG8tZGUtbGEt/bm90YS5wbmc"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Bandas Musicales
                        </Navbar.Brand>
                    </Container>
                </Navbar>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bandas />} />
          {/* <Route path="/spaces/:spaceId" element={<SpacesDetail/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
