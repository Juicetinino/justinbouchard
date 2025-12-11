import cloudmessage from '@/assets/images/icons/cloudmessage.png'
import phoneimport from '@/assets/images/icons/phoneimport.png'
import linkedin from '@/assets/images/icons/linkedin.png'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <section className="section bg-light">
        <Container>
          <Row>
            <Col lg={4}>

              <div className="text-center mt-4">
                <div className="services-img">
                  <Image width={50} height={50} src={linkedin} alt="" />
                </div>
                <a target="blank_" href="https://www.linkedin.com/in/justinpbouchard/">
                  <h6 className="mt-4">My Linkedin</h6>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="text-center mt-4">
                <div className="services-img">
                  <Image width={50} height={50} src={phoneimport} alt="" />
                </div>
                <h6 className="mt-4">+1 (802) 624-0064</h6>
              </div>
            </Col>
            <Col lg={4}>
              <div className="text-center mt-4">
                <div className="services-img">
                  <Image width={50} height={50} src={cloudmessage} alt="" />
                </div>
                <h6 className="mt-4">jbouchard18@outlook.com</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
