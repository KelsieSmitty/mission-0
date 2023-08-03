import muckyPawsBanner from "../images/muckyPawsBanner.png";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";
// import Row from "react-bootstrap/Row";

export default function HeroImage() {
  return (
    <header
      style={{
        paddingLeft: 0,
        backgroundColor: "rgba(86, 217, 245, 0.4)",
        borderBottom: "2px #56d9f5 solid",
      }}
    >
      <div
        className="p-5 text-center bg-image img-fluid"
        style={{
          backgroundImage: `url(${muckyPawsBanner})`,
          height: "60vh",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            className="row justify-content-center align-items-lg-end ms-lg-1 "
            style={{ height: "100%" }}
          >
            <div className="col-lg-6 ms-lg-1 mt-lg-auto mt-5 pt-lg-5">
              <h1 className="text-info mt-lg-5 pt-lg-5 ms-lg-5 ps-lg-5 text-start d-none d-lg-block">
                {" "}
                Where mucky <br /> paws find <br /> loving homes.
              </h1>
            </div>
            <div className=" col-lg-6 mt-5 pt-5 mt-lg-0">
              <Form className="row  mt-4 pt-5 pt-lg-0">
                <Col xs={12} md={6} lg={8} className=" mb-lg-0">
                  <Form.Control
                    className="form-control text-center shadow p-4 p-lg-3 bg-body-tertiary rounded"
                    type="text"
                    placeholder="Searching for a particular pupper by name?"
                  />
                </Col>

                <Col xs={12} md={3} lg={4} className="mt-2 mt-lg-0">
                  <Button
                    type="submit"
                    className="btn shadow btn-info p-4 p-lg-3 rounded w-100"
                  >
                    Find me my friend!
                  </Button>
                </Col>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
