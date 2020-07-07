import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
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
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: true,
      color: "navbar-transparent",
    };
  }
  componentDidMount() {
    console.log(this.props);
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info",
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out",
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: "",
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
          <NavbarBrand to={"/"} id="navbar-brand" tag={Link}>
          <span style={{ fontSize: "30px" }}>EMAF• </span>
          </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Designed and Coded by GIS Developer Team
            </UncontrolledTooltip>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>

          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col md="3">
                  <h1 className="title">EMAF•</h1>
                </Col>

                <Col className="collapse-close text-right" xs="6">
                <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </NavLink>
              </NavItem>

              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "Admin" ? (
                <NavLink
                  tag={Link}
                  to="/admin/projects"
                  className="inactive"
                  activeclassname="active"
                >
                  Projects
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "Admin" ? (
                <NavLink tag={Link} to="/admin/departments" className="inactive"
                activeclassname="active">
                  Departments
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "DataEntry" ? (
                <NavLink
                  tag={Link}
                  to="/project/publictransport"
                  className="inactive"
                  activeclassname="active"
                >
                  Public Transport
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "DataEntry" ? (
                <NavLink
                  tag={Link}
                  to="/project/footpath"
                  className="inactive"
                  activeclassname="active"
                >
                  Footpath
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "DataEntry" ? (
                <NavLink
                  tag={Link}
                  to="/project/cycleway"
                  className="inactive"
                  activeclassname="active"
                >
                  Cycleway
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "DataEntry" ? (
                <NavLink
                  tag={Link}
                  to="/project/stormwater"
                  className="inactive"
                  activeclassname="active"
                >
                  Storm water
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "DecisionMaker" ? (
                <NavLink tag={Link} to="/projects/publictransport" className="inactive"
                activeclassname="active">
                  Public Transport
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "DecisionMaker" ? (
                <NavLink tag={Link} to="/projects/footpath" className="inactive"
                activeclassname="active">
                  Footpath
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "DecisionMaker" ? (
                <NavLink tag={Link} to="/projects/cycleway" className="inactive"
                activeclassname="active">
                  Cycleway
                </NavLink>
                
              ) : null}
              {localStorage.getItem("token") &&
              localStorage.getItem("role") === "DecisionMaker" ? (
                <NavLink tag={Link} to="/projects/stormwater" className="inactive"
                activeclassname="active">
                  Storm water
                </NavLink>
                
              ) : null}
              <NavLink
                tag={Link}
                to="/about"
                className="inactive"
                activeclassname="active"
              >
                About
              </NavLink>
              <NavLink
                tag={Link}
                to="/contact"
                className="inactive"
                activeclassname="active"
              >
                Contact us
              </NavLink>
              {localStorage.getItem("token") ? (
                  <NavLink tag={Link}
                          to="/"
                          className="inactive"
                          activeclassname="active"
                          onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("role");
                          }}>
                      Logout
                  </NavLink>
              ) : (
                  <NavLink tag={Link}
                          to="/login"
                          className="inactive"
                          activeclassname="active"
                          color="primary">
                      Login
                  </NavLink>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
