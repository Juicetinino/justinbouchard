import modeling1 from '@/assets/images/portfolio/modeling-1.webp'
import modeling2 from '@/assets/images/portfolio/modeling-2.webp'
import modeling3 from '@/assets/images/portfolio/modeling-3.webp'
import modeling4 from '@/assets/images/portfolio/modeling-4.webp'
import modeling5 from '@/assets/images/portfolio/modeling-5.webp'
import modeling6 from '@/assets/images/portfolio/modeling-6.webp'
import design1 from '@/assets/images/portfolio/design-1.webp'
import design2 from '@/assets/images/portfolio/design-2.webp'
import design3 from '@/assets/images/portfolio/design-3.webp'
import design4 from '@/assets/images/portfolio/design-4.webp'
import design5 from '@/assets/images/portfolio/design-5.webp'
import design6 from '@/assets/images/portfolio/design-6.webp'
import design7 from '@/assets/images/portfolio/design-7.webp'
import design8 from '@/assets/images/portfolio/design-8.webp'
import design9 from '@/assets/images/portfolio/design-9.webp'
import design10 from '@/assets/images/portfolio/design-10.webp'
import design11 from '@/assets/images/portfolio/design-11.webp'
import design12 from '@/assets/images/portfolio/design-12.webp'
import design13 from '@/assets/images/portfolio/design-13.webp'
import design14 from '@/assets/images/portfolio/design-14.webp'
import design15 from '@/assets/images/portfolio/design-15.webp'
import interactive1 from '@/assets/images/portfolio/interactive-1.webp'
import interactive2 from '@/assets/images/portfolio/interactive-2.webp'
import interactive3 from '@/assets/images/portfolio/interactive-3.webp'
import video1 from '@/assets/images/portfolio/video-1.webp'
import video2 from '@/assets/images/portfolio/video-2.webp'
import video3 from '@/assets/images/portfolio/video-3.webp'
import video4 from '@/assets/images/portfolio/video-4.webp'
import video5 from '@/assets/images/portfolio/video-5.webp'
import GlightBox from '@/components/GlightBox'
import { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Portfolio = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@/helpers/init-isotope').then(({ initIsotope }) => {
        initIsotope()
      })
    }
  }, [])
  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <ul className="col container-filter portfolioFilte list-unstyled mb-0 grid-menu" data-target=".portfolioContainer" id="filter">
                  <li>
                    <a className="categories active" data-filter="*">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="categories" data-filter=".modeling">
                      3D Modeling
                    </a>
                  </li>
                  <li>
                    <a className="categories" data-filter=".design">
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a className="categories" data-filter=".interactive">
                      Interactive
                    </a>
                  </li>
                  <li>
                    <a className="categories" data-filter=".video">
                      Video
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="port portfolio-masonry mt-4">
            <div className="portfolioContainer row" data-isotope='{ "layoutMode": "masonry" }'>


              <Col lg={4} className="p-4 grid-item modeling">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={modeling1} title="Project Name">
                    <Image className="item-container img-fluid" src={modeling1} alt="A board game cover" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Board Game Cover</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item modeling">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={modeling2} title="Project Name">
                    <Image className="item-container img-fluid" src={modeling2} alt="A 3D modeled cabin desk scene" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Cabin Desk</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item modeling">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={modeling3} title="Project Name">
                    <Image className="item-container img-fluid" src={modeling3} alt="A 3D modeled cactus in a sombrero" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Cactus</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item modeling">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={modeling4} title="Project Name">
                    <Image className="item-container img-fluid" src={modeling4} alt="A 3D modeled still-life scene" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Still Life</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item modeling">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={modeling5} title="Project Name">
                    <Image className="item-container img-fluid" src={modeling5} alt="A 3D modeled TV" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Television</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item modeling">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={modeling6} title="Project Name">
                    <Image className="item-container img-fluid" src={modeling6} alt="A tesla tower for a game" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Mobile Game Assets</h6>
                        <p className="text-dark mb-0">2025</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design1} title="Project Name">
                    <Image className="item-container img-fluid" src={design1} alt="A board game cover" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Soniashnyk</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design2} title="Project Name">
                    <Image className="item-container img-fluid" src={design2} alt="A cake business logo" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Cake Business Logo</h6>
                        <p className="text-dark mb-0">2025</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design3} title="Project Name">
                    <Image className="item-container img-fluid" src={design3} alt="A university billboard display" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">University 6-Screen display</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design4} title="Project Name">
                    <Image className="item-container img-fluid" src={design4} alt="A podcast cover" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">'Stead Talk Podcast Cover</h6>
                        <p className="text-dark mb-0">2022</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design5} title="Project Name">
                    <Image className="item-container img-fluid" src={design5} alt="An app icon" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">An app icon for an electrical device</h6>
                        <p className="text-dark mb-0">2022</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design6} title="Project Name">
                    <Image className="item-container img-fluid" src={design6} alt="A memory card with a wave on it" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Memory Cards</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design7} title="Project Name">
                    <Image className="item-container img-fluid" src={design7} alt="An app icon for a keyboard extension" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">App Icon for a Keyboard Extension</h6>
                        <p className="text-dark mb-0">2025</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design8} title="Project Name">
                    <Image className="item-container img-fluid" src={design8} alt="A poster for a drive-in theater" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Movie Theater Posters</h6>
                        <p className="text-dark mb-0">2025</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design9} title="Project Name">
                    <Image className="item-container img-fluid" src={design9} alt="A poster for CAD tutoring" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">CAD Tutoring Poster</h6>
                        <p className="text-dark mb-0">2025</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design10} title="Project Name">
                    <Image className="item-container img-fluid" src={design10} alt="A workshop schedule" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Workshop Schedule Poster</h6>
                        <p className="text-dark mb-0">2025</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design11} title="Project Name">
                    <Image className="item-container img-fluid" src={design11} alt="A protest style poster" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Protest Style Poster</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design12} title="Project Name">
                    <Image className="item-container img-fluid" src={design12} alt="An ad for a ring workshop" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Workshop Ad</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design13} title="Project Name">
                    <Image className="item-container img-fluid" src={design13} alt="An ad calling for artists to paint a mural" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Mural Ad</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design14} title="Project Name">
                    <Image className="item-container img-fluid" src={design14} alt="A banner for a cake business" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Cake Banner</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item design">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={design15} title="Project Name">
                    <Image className="item-container img-fluid" src={design15} alt="A ticket for a University event" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">New Knights Expo Ticket</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item interactive">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={interactive1} title="Project Name">
                    <Image className="item-container img-fluid" src={interactive1} alt="A digital canvas that says hello" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Interractive Digital Canvas</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item interactive">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={interactive2} title="Project Name">
                    <Image className="item-container img-fluid" src={interactive2} alt="A climbing platform game" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Platform Game</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item interactive">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={interactive3} title="Project Name">
                    <Image className="item-container img-fluid" src={interactive3} alt="A screenshot of the Unity game engine" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Unity Experiment</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item video">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={video1} title="Project Name">
                    <Image className="item-container img-fluid" src={video1} alt="Three shapes on a black background" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Shape Animation</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item video">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={video2} title="Project Name">
                    <Image className="item-container img-fluid" src={video2} alt="An image of a guy pointing at an animated dragon" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Dragon Animation</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item video">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={video3} title="Project Name">
                    <Image className="item-container img-fluid" src={video3} alt="A man under a 3D modeled blanket" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Disappear</h6>
                        <p className="text-dark mb-0">2024</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item video">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={video4} title="Project Name">
                    <Image className="item-container img-fluid" src={video4} alt="A guy holding a toque on his head" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Dorm Dishes</h6>
                        <p className="text-dark mb-0">2023</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>

              <Col lg={4} className="p-4 grid-item video">
                <div className="item-box">
                  <GlightBox className="mfp-image" href={video5} title="Project Name">
                    <Image className="item-container img-fluid" src={video5} alt="A basketball falling toward a pool basketball hoop" />
                    <div className="item-mask">
                      <div className="item-caption">
                        <h6 className="text-dark mt-1 text-uppercase">Epic Trick Shot</h6>
                        <p className="text-dark mb-0">2023</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>



            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
