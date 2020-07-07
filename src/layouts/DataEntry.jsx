import React, { useState } from "react";
import ExamplesNavbar from "../components/ExamplesNavbar";
import Footer from "../components/Footer";
import Maps from "../components/maps";
import Forms from "../components/Forms";
import "./layoutStyles.css";
import { Card, CardBody } from "reactstrap";

const DataEntry = (props) => {
  const [state, setState] = useState([]);

  const setStateToFeature = (feature) => {
    // 3: state is the selected feature

    setState(feature);
  };
  console.log(props);
  return (
    <div>
      <ExamplesNavbar />
      <div className="page-header container" id="dataentry">
        <Card id="dataentryMap">
          <CardBody>
            <Maps
              setStateToFeature={setStateToFeature}
              style="mapbox://styles/asma163/ckbgkzh7457611io4q6k872re"
              height="39.5vw"
              center={[31.639448, 30.101757]}
            />
          </CardBody>
        </Card>
        <Forms stateFromDataEntry={state} />
      </div>
      <Footer />
    </div>
  );
};

export default DataEntry;
