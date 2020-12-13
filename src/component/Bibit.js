import React from 'react'
import {Card, Button} from "react-bootstrap"


function Bibit() {
    return (
        <div className='bibit' id="bibit">
            <div className="container">
        <div className="bibit-judul">
            <h1>Bibit</h1>
        </div>
        <div className="bibit-content">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
      </div>
        </div>
    )
}

export default Bibit
