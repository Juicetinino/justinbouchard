import { Col, Container, Row } from 'react-bootstrap'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <>
      <section className="bg-heading bg-light" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center">
                <h1>
                  <span className="font-weight-300">Hi. We are</span> Joognu.
                </h1>
                <h4 className="font-weight-300 mt-4 line-height_1_4">
                  We are a team of creatives, our biggest passion is creating unique{' '}
                  <ReactTyped
                    strings={['Themes', 'Portfolios', 'Designes']}
                    className="element font-weight-500"
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                  />
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
