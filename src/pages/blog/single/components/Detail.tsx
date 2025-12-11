// import post1 from '@/assets/images/blog-post/img-1.webp'
// import { Icon } from '@iconify/react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="blog-post">
                <div className="blog-box">
                  {/* <div className="blog-img">
                    <Image src={post1} className="img-fluid rounded" alt="" />
                  </div> */}
                  <div className="blog-info mt-4 p-2">
                    <h4>
                      I am inspired by the intersection of art and technology.
                    </h4>
                    <hr className="mt-4" />
                    <p className="text-muted mt-4">
                      I am a student pursuing Digital Arts & Sciences and Computer Science at Clarkson University,
                      driven by a passion for combining artistic expression with technical innovation. My interests
                      range from animation and filmmaking to web design and app development, reflecting my belief
                      that the most compelling creations emerge at the intersection of art and technology.
                      <br></br><br></br>
                      As director James Gunn aptly described, "Really great animators in today's world... marry
                      the creative and the logical." That synergy is what inspires me. Whether crafting a digital
                      animation, coding an application, or designing an interactive experience, I strive to bring
                      imagination and precision to every project.
                      <br></br><br></br>
                      While my professional journey is just beginning, I've already had opportunities to explore
                      this interdisciplinary space. At Clarkson's Makerspace, I work part-time assisting others
                      in realizing their creative and technical ideas, honing my problem-solving skills, and
                      deepening my understanding of cutting-edge tools. Additionally, through personal projects,
                      I've developed hands-on experience with C++, Autodesk Maya, Adobe Creative Suite, and
                      filmmaking equipment.
                      <br></br><br></br>
                      I'm committed to refining my skills and contributing to meaningful, impactful work. Whether
                      through building immersive digital worlds or innovating new ways to connect art and technology,
                      I aim to continue nurturing my spirit of creation and making the most of every resource and
                      opportunity.
                    </p>

                  </div>
                </div>

                <Link to="https://drive.google.com/file/d/1KSyRsdvXB1YZAllj99E79pVAzZFvSznN/view?usp=sharing" className="btn btn-dark-custom">
                  View my Resume
                </Link>


              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Detail
