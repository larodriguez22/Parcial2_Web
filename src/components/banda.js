
import React from 'react';
// import './spaces.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';


const { useEffect, useState } = require("react");

function Bandas() {
    const [elementos, setElementos] = useState([]);
    const [bandaActual, setActualBand] = useState({});
    const [clicked, setClicked] = useState(false);
    // const params = useParams();

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL).then(res => res.json()).then(res => {
            setElementos(res);
            localStorage.setItem("elementos", res);
        })
    }, []);
    console.log("app");
    console.log(elementos);
    
    const onClickCard = (ind) => {
        if (!clicked) {
            setClicked(true);
        }
        setActualBand(elementos[ind]);
        console.log("clicked");
        console.log(ind);
    };
    const tableVisibility = () => {
        return clicked ? "visible" : "hidden";
    };

    function CardBanda(props) {

        return (
            <tr {...props} >
                <td onClick={() => onClickCard(props.ind)}>{props.id}</td>
                <td >{props.name}</td>
                <td>{props.country}</td>
                <td>{props.genre}</td>
                <td>{props.foundation_year}</td>
            </tr>
        );
    }
    

    function GetTable() {
        if (!clicked) {
            return (false);
        }
        return (
            <Col lassName="cards_container_space" style={{}}>
                <Card className="card_space">
                    <a>
                        <Card.Img variant="top" src="https://imgs.search.brave.com/btl8UOSKdMo4ksBAmQepHsrsXe1bV_4UtGXpurdu_JM/rs:fit:728:724:1/g:ce/aHR0cHM6Ly9jZG4u/aW1nYmluLmNvbS84/LzMvNC9pbWdiaW4t/cm9jay1iYW5kLW11/c2ljYWwtZW5zZW1i/bGUtc2lsaG91ZXR0/ZS1ncmFwaGljcy1y/b2NrLWJhbmQtd2to/VlpwUm5GZGNScEVL/a0JSVGpuYTlIVC5q/cGc"
                            className="card_img_space" style={{
                                borderRadius:
                                    "2%", filter: "brightness(100%)"
                            }} />
                    </a>
                    <Card.Body className='card_body'>
                        <Row>
                            {bandaActual.devices.map((device, i) => (
                                <Col>
                                    <Card.Title style={{ textAlign: "center" }}>
                                        <a>{device.name}</a>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <div className='normal_format_space'> {device.descripcion} </div>
                                    </Card.Text>
                                </Col>
                            ))}
                            </Row>
                    </Card.Body>
                    
                </Card>
            </Col>
        );
    }

    return (
        <div className="Bandas">
            <Container className="body_container" style={{ width: "60%" }}>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Pais</th>
                                <th>Genre</th>
                                <th>Foundation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elementos.map((elemento, i) => (
                                <CardBanda id={elemento.id} name={elemento.name} country={elemento.country} genre={elemento.genre} foundation_year={elemento.foundation_year} ind={i} />
                            ))}
                        </tbody>
                    </Table>
                </Row>
                <Row xs={4} md={4} lg={4} className="g-4" style={{ paddingTop: "5%" }}>
                    La Banda musical mas antigua es sdfsdf y fue fundada hace sdfsdf años
                </Row>
            </Container>
            <Col style={{ visibility: tableVisibility() }}>
                <GetTable />
            </Col>
        </div>
    );
}

export default Bandas;