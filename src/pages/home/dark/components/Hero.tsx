import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <section className="home-dark bg-dark" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center bg-white p-5">
                <h1 className="text-uppercase">
                  <span className="font-weight-300">Hi. We are</span> Joognu
                </h1>
                <h6 className="font-weight-300 text-muted mt-3 text-uppercase">Design | Development | Branding </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
