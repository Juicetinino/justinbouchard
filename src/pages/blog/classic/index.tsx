import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/topnav/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Blog from './components/Blog'
import Contact from './components/Contact'

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-title bg-light" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center">
                <h2 className="text-uppercase ls-4">Blog Classic</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default page
