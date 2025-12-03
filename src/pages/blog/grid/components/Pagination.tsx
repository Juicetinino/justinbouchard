import { Icon } from '@iconify/react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <>
      <section className="section pt-0">
        <Container>
          <Row>
            <Col lg={12}>
              <ul className="pagination mt-3">
                <li className="next">
                  <Link to="">
                    <Icon icon="mdi:chevron-left" className="mdi" />
                  </Link>
                </li>
                <li className="active">
                  <Link to="">1</Link>
                </li>
                <li>
                  <Link to="">2</Link>
                </li>
                <li>
                  <Link to="">3</Link>
                </li>
                <li>
                  <Link to="">4</Link>
                </li>
                <li>
                  <Link to="">5</Link>
                </li>
                <li className="prev">
                  <Link to="">
                    <Icon icon="mdi:chevron-right" className="mdi" />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Pagination
