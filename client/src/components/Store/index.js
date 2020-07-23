import React from 'react'
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Store( { name, phone, street, city, state, zip_code, image, rating, url, Button }) {
    return (
        <ListItem> 
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h3>{name}</h3>
                </Col>
                <Col size="md-4">
                    <div className="btn-container">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={url}>
                            View
                        </a>
                        <Button />
                    </div>
                </Col> 
            </Row>

            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={image} alt={name} />
                </Col>
                <Col size="12 sm-8 md-10">
                <p><i class="fas fa-comments"></i> Rating: {rating}</p>
                {phone && <p><i class="fas fa-phone"></i> {phone}</p>} 
                <p className="small"><i class="fas fa-map-marker-alt"></i> {city}, {state} {zip_code}</p>
                </Col>
            </Row>
        </ListItem>
    )
}

export default Store;