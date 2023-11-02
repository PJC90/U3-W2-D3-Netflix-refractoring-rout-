import { Col, Row } from "react-bootstrap"
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons"

const FooterNetflix = () => {
return(
    <>
    <footer >
          <div className="row text-center text-sm-start justify-content-center mt-5">
            <div className="col col-6">
              <Row>
                <Col className="mb-2">
                    <Facebook className="text-secondary me-3"/>
                    <Instagram className="text-secondary me-3"/>
                    <Twitter className="text-secondary me-3"/>
                    <Youtube className="text-secondary"/>
                </Col>
              </Row>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"
              >
                <div className="col">
                  <div className="row">
                    <div className="col footer-links text-secondary">
                      <p>
                        Audio and Subtitles
                      </p>
                      <p>
                        Media Center
                      </p>
                      <p>
                        Privacy
                      </p>
                      <p>
                        Contact us
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links text-secondary">
                      <p>
                        Audio Description
                      </p>
                      <p>
                        Investor Relations
                      </p>
                      <p>
                        Legal Notices
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links text-secondary">
                      <p>
                        Help Center
                      </p>
                      <p>
                        Jobs
                      </p>
                      <p>
                        Cookie Preferences
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links text-secondary">
                      <p>
                        Gift Cards
                      </p>
                      <p>
                        Terms of Use
                      </p>
                      <p>
                        Corporate Information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col mb-2">
                  <button
                    type="button"
                    className="btn btn-sm footer-button rounded-0 mt-3 border border-secondary text-secondary"
                  >
                    Service Code
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col mb-2 mt-2 copyright text-secondary">
                  © 1997-2023 Netflix, Inc.
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
)
}

export default FooterNetflix