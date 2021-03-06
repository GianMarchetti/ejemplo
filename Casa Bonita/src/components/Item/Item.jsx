import {h3S} from "./Item.module.css"
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount/index";
import {useContext, useState} from 'react';
import { btnIC } from "../ItemCount/ItemCount.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CartContext } from "../../Context/CartContext";

export const Item = ({product}) => {
    const [irCart, setIrCart] = useState(false);
    const {showQuantity,addCart} = useContext(CartContext)

    const onAdd = (contador) => {
        console.log("Se ha seleccionó", contador, "productos");
        setIrCart(true);
        showQuantity()
        addCart()
    };
    return (
      <Container fluid>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
              <Card style={{margin:8, borderColor:'green',backgroundColor:'pink',textAlign:'center',padding:4,color:'white' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                <Card.Title className={h3S}>{product.name}</Card.Title>
                <Card.Text>
                    <p>Precio: {product.price}</p>
                </Card.Text>
                <Link className={btnIC} to={`/product/${product.id}`}>Ver más</Link>
                </Card.Body>
              </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
};

