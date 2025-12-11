// import { Icon } from '@iconify/react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="bg-image" id="home">
        <div className="bg-overlay" />
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center text-white">
                <h1 className="text-uppercase display-4 font-weigh-bold ls-4">Justin Bouchard</h1>
                <p className="mt-4">
                  Hi! I'm Justin, a Digital Arts and Computer Science student. <br>
                  </br>Here are some of the projects I created.
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
