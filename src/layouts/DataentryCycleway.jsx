import React, { useState } from "react";
import ExamplesNavbar from "../components/ExamplesNavbar";
import Footer from "../components/Footer";
import Cyclewaymap from "../components/Cyclewaymap";
import Cyclewayform from "../components/Cyclewayform";
import "./layoutStyles.css";
import { Card, CardBody } from "reactstrap";

const DataentryCycleway = (props) => {
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
            <Cyclewaymap
              setStateToFeature={setStateToFeature}
              style="mapbox://styles/asma163/ckbgkzh7457611io4q6k872re"
              height="39.5vw"
              center={[31.645144, 30.102097]}
            />
          </CardBody>
        </Card>
        <Cyclewayform stateFromDataEntry={state} />
      </div>
      <Footer />
    </div>
  );
};

export default DataentryCycleway;
