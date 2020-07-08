import React from "react";
import Users from "../components/Userui.jsx";
import ExamplesNavbar from "../components/ExamplesNavbar.js";
import { Card, CardBody } from "reactstrap";
import Footer from "../components/Footer";

const Departments = () => {
  return (
    <>
      <ExamplesNavbar />

      <div
        style={{ marginRight: "5vw", marginLeft: "5vw" }}
        className=""
        id="adminProjects"
      >
        <Card>
          <CardBody>
            <Users />
          </CardBody>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Departments;
