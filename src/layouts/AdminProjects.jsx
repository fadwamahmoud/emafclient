import React, { useEffect, useState } from "react";
import Table from "../components/Table";
// import Map from '../components/Map';
import ExamplesNavbar from "../components/ExamplesNavbar";
// import Footer from '../components/Footer'
import { Card, Row, CardBody, Col } from "reactstrap";
import Footer from "../components/Footer";
import DrawControl from "react-mapbox-gl-draw";
import { Layer, Feature, Popup } from "react-mapbox-gl";
import ReactMapboxGl from "react-mapbox-gl";
import axios from "axios";
// import "../assets/scss/blk-design-system-react.scss";
// import "../assets/css/nucleo-icons.css";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA",
});

const AdminProjects = (props) => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_HEROKU_URL}/projects/`
    );
    setState(result.data);
    console.log(result.data);
    console.log("state is changed");
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function addProject(newProject) {
    axios
      .post(`${process.env.REACT_APP_HEROKU_URL}/projects/add`, newProject)
      .then((data) => {
        fetchData();
      });
  }
  async function deleteProject(id) {
    axios
      .get(`${process.env.REACT_APP_HEROKU_URL}/projects/delete/${id}`)
      .then((data) => {
        fetchData();
      });
  }

  async function editProject(id, updatedProject) {
    axios
      .patch(
        `${process.env.REACT_APP_HEROKU_URL}/projects/edit/${id}`,
        updatedProject
      )
      .then((data) => {
        fetchData();
      });
  }
  const onDrawCreate = ({ features }) => {
    console.log(features);
    const project = {
      category: "",
      name: "",
      owner: "",
      manager: "",
      status: "",
      start_date: "",
      end_date: "",
      location: features[0].geometry,
    };
    addProject(project);
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="" id="adminProjects">
        <Row style={{ marginRight: "5vw", marginLeft: "5vw" }}>
          <Col lg="8">
            <Card>
              <CardBody>
                <Table
                  state={props.state}
                  setState={props.setState}
                  data={state}
                  editProject={editProject}
                  deleteProject={deleteProject}
                  style={{ width: "100%" }}
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardBody>
                <Map
                  center={[31.6306, 30.0917]}
                  zoom={[13]}
                  style="mapbox://styles/asma163/ckbgkzh7457611io4q6k872re" // eslint-disable-line
                  containerStyle={{
                    height: "66vh",
                  }}
                >
                  <DrawControl onDrawCreate={onDrawCreate} />

                  <Layer
                    type="circle"
                    id="marker"
                    paint={{
                      "circle-color": "#e14eca",
                      "circle-stroke-width": 1,
                      "circle-stroke-color": "#fff",
                      "circle-stroke-opacity": 1,
                    }}
                  >
                    {state.map((feature) => (
                      <Feature coordinates={feature.location.coordinates} />
                    ))}
                  </Layer>
                </Map>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default AdminProjects;
