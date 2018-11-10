import React, { Component } from "react";
import { Container, Row, Col, Mask, Fa, View, Button } from "mdbreact";
// import {
//   Carousel,
//   CarouselInner,
//   CarouselItem,
//   Container,
//   Row,
//   Col,
//   Card,
//   CardImage,
//   CardBody,
//   CardTitle,
//   CardText,
//   Button
// } from "mdbreact";

const Article = () => {
  return (
    <Container>
      <h2 className="h1-responsive font-weight-bold text-center my-5 pt-5">
        Recent posts
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Row>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
          <View hover className="rounded z-depth-2 mb-4" waves>
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
            />
            <Mask overlay="white-slight" />
          </View>
          <a className="pink-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="map" className="pr-2" />
              Adventure
            </h6>
          </a>
          <h4 className="font-weight-bold mb-3">
            <strong>Title of the news</strong>
          </h4>
          <p>
            by <a className="font-weight-bold">Billy Forester</a>, 15/07/2018
          </p>
          <p className="dark-grey-text">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus voluptas.
          </p>
          <Button color="pink" rounded size="md">
            Read more
          </Button>
        </Col>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
          <View hover className="rounded z-depth-2 mb-4" waves>
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            />
            <Mask overlay="white-slight" />
          </View>
          <a className="deep-orange-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="graduation-cap" className="pr-2" />
              Education
            </h6>
          </a>
          <h4 className="font-weight-bold mb-3">
            <strong>Title of the news</strong>
          </h4>
          <p>
            by <a className="font-weight-bold">Billy Forester</a>, 13/07/2018
          </p>
          <p className="dark-grey-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis voluptatum deleniti atque corrupti quos dolores.
          </p>
          <Button color="deep-orange" rounded size="md">
            Read more
          </Button>
        </Col>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
          <View hover className="rounded z-depth-2 mb-4" waves>
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
            />
            <Mask overlay="white-slight" />
          </View>
          <a className="blue-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="fire" className="pr-2" />
              Culture
            </h6>
          </a>
          <h4 className="font-weight-bold mb-3">
            <strong>Title of the news</strong>
          </h4>
          <p>
            by <a className="font-weight-bold">Billy Forester</a>, 11/07/2018
          </p>
          <p className="dark-grey-text">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione.
          </p>
          <Button color="info" rounded size="md">
            Read more
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Article;
