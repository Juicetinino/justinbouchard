import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/topnav/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Contact from './components/Contact'
import Detail from './components/Detail'

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-title bg-light" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center">
                <h2 className="text-uppercase ls-4">Blog Single</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Detail />
      <Contact />
      <Footer />
    </>
  )
}

export default page
