import { Link } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <section className="section bg-dark pb-5">
        <Container>
          <Row>
            <Col lg={3}>
              <h5 className="text-uppercase text-white">Joognu</h5>
            </Col>
            <Col lg={9}>
              <Row>
                <Col lg={3}>
                  <h6 className="text-white">Home</h6>
                  <ul className="list-unstyled footer-link mt-3">
                    <li>
                      <Link to="">About us</Link>
                    </li>
                    <li>
                      <Link to="">Careers</Link>
                    </li>
                    <li>
                      <Link to="">Contact us</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={3}>
                  <h6 className="text-white">Services</h6>
                  <ul className="list-unstyled footer-link mt-3">
                    <li>
                      <Link to="">Terms &amp; Condition</Link>
                    </li>
                    <li>
                      <Link to="">Jobs</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={3}>
                  <h6 className="text-white">Pricing</h6>
                  <ul className="list-unstyled footer-link mt-3">
                    <li>
                      <Link to="">Business</Link>
                    </li>
                    <li>
                      <Link to="">Bookmarks</Link>
                    </li>
                    <li>
                      <Link to="">Contact</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={3}>
                  <h6 className="text-white">Contact</h6>
                  <ul className="list-unstyled footer-link mt-3">
                    <li>
                      <Link to="">+01 773-792-5692</Link>
                    </li>
                    <li>
                      <Link to="">Roger@dayrep.com</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={12}>
              <p className="text-center text-white-50"> {new Date().getFullYear()} © Joognu. Design by Themesdesign</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
