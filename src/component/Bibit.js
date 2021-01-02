import React from "react";
import "./../App.css";
import { Card, Form, Col, Container } from "react-bootstrap";
import Alpukat from "./../img/alpukat.jpg";
// import Animasi
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/source/animate.css";

function Bibit() {
  return (
    <div className="bibit" id="bibit">
      <Container fluid="sm">
        <div className="bibit-judul">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="zoomOut"
            duration={0.4}
          >
            <h1>Bibit</h1>
          </ScrollAnimation>
        </div>
        <div className="bibit-content">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={100}>
            <Form>
              <Form.Row>
                <Col>
                  <Card style={{ border: "none" }}>
                    <div
                      className="atas"
                      style={{
                        height: "300px",
                        overflow: "hidden",
                        borderRadius: "3px",
                      }}
                    >
                      <Card.Img variant="top" src={Alpukat} />
                    </div>
                    <Card.Body>
                      <Card.Text>
                        {/* <p className="namaProduk"  >Bibit Alpukat Tanpa Biji Unggulan</p>
          <b className="text-success ">Rp 50.000</b> */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col sm={2}>
                  <Card>
                    <Card.Img variant="top" src={Alpukat} />
                    <Card.Body>
                      <p className="namaProduk">
                        Bibit Alpukat Tanpa Biji Unggulan
                      </p>
                      <b className="text-success ">Rp 50.000</b>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={2}>
                  <Card>
                    <Card.Img variant="top" src={Alpukat} />
                    <Card.Body>
                      <p className="namaProduk">
                        Bibit Alpukat Tanpa Biji Unggulan
                      </p>
                      <b className="text-success ">Rp 50.000</b>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={2}>
                  <Card>
                    <Card.Img variant="top" src={Alpukat} />
                    <Card.Body>
                      <p className="namaProduk">
                        Bibit Alpukat Tanpa Biji Unggulan
                      </p>
                      <b className="text-success ">Rp 50.000</b>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={2}>
                  <Card>
                    <Card.Img variant="top" src={Alpukat} />
                    <Card.Body>
                      <p className="namaProduk">
                        Bibit Alpukat Tanpa Biji Unggulan
                      </p>
                      <b className="text-success ">Rp 50.000</b>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={2}>
                  <Card>
                    <Card.Img variant="top" src={Alpukat} />
                    <Card.Body>
                      <p className="namaProduk">
                        Bibit Alpukat Tanpa Biji Unggulan
                      </p>
                      <b className="text-success ">Rp 50.000</b>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={2}>
                  <Card>
                    <Card.Img variant="top" src={Alpukat} />
                    <Card.Body>
                      <p className="namaProduk">
                        Bibit Alpukat Tanpa Biji Unggulan
                      </p>
                      <b className="text-success ">Rp 50.000</b>
                    </Card.Body>
                  </Card>
                </Col>
              </Form.Row>
            </Form>
          </ScrollAnimation>
        </div>
        <div className="bibit-footer">
          <ScrollAnimation animateIn="slideInUp" animateOut="slideOutDown">
            <a href="https://tokopedia.link/ZKKKmvSEIcb">
              <button className="lebihBanyak">Lihat lebih banyak...</button>
            </a>
          </ScrollAnimation>
        </div>
      </Container>
    </div>
  );
}

export default Bibit;
