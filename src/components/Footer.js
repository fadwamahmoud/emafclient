/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        className="section"
        className="footer"
      >
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">EMAF•</h1>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="http://iti.gov.eg/">ITI</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://en.wikipedia.org/wiki/Asset_management">
                    Asset Management
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login" tag={Link}>
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/contact" tag={Link}>
                    Contact Us
                    {/* <Link to={"/contact"}>Contact Us</Link> */}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about" tag={Link}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://opensource.org/licenses/MIT">
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    style={{ marginTop: "10px" }}
                    icon={faTwitter}
                  />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    style={{ marginTop: "10px" }}
                    icon={faFacebook}
                  />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://dribbble.com/"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    style={{ marginTop: "10px" }}
                    icon={faInstagram}
                  />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
