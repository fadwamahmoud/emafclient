import React, { useState } from "react";
import ExamplesNavbar from "../components/ExamplesNavbar";
import Footer from "../components/Footer";
import Stormwaterform from "../components/Stormwaterform";
import Stormwatermap from "../components/Stormwatermap";
import "./layoutStyles.css";
import { Card, CardBody } from "reactstrap";

const Dataentrystormwater = (props) => {
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
            <Stormwatermap
              setStateToFeature={setStateToFeature}
              center={[31.6306, 30.0917]}
              style="mapbox://styles/asma163/ckbgkzh7457611io4q6k872re"
              height="39.5vw"
            />
          </CardBody>
        </Card>
        <Stormwaterform stateFromDataEntry={state} />
      </div>
      <Footer />
    </div>
  );
};

export default Dataentrystormwater;
