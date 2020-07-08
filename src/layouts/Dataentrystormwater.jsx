import React, { useState } from "react";
import ExamplesNavbar from "../components/ExamplesNavbar";
import Footer from "../components/Footer";
import Stormwaterform from "../components/Stormwaterform";
import Stormwatermap from "../components/Stormwatermap";
import "./layoutStyles.css";
import { Card, CardBody } from "reactstrap";

const Dataentrystormwater = (props) => {
  const [state, setState] = useState([]);
  const [change, setChange] = useState(false);

  const setStateToFeature = (feature) => {
    // 3: state is the selected feature

    setState(feature);
  };
  const changeFn = () => {
    console.log("change");
    setChange(!change);
  };
  return (
    <div>
      <ExamplesNavbar />
      <div className="page-header container" id="dataentry">
        <Card id="dataentryMap">
          <CardBody>
            <Stormwatermap
              setStateToFeature={setStateToFeature}
              center={[31.64086, 30.102094]}
              style="mapbox://styles/asma163/ckbgkzh7457611io4q6k872re"
              height="90vh"
              change={change}
            />
          </CardBody>
        </Card>
        <Stormwaterform change={changeFn} stateFromDataEntry={state} />
      </div>
      <Footer />
    </div>
  );
};

export default Dataentrystormwater;
