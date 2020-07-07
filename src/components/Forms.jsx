import React from "react";
import { useState } from "react";
import confirm from "reactstrap-confirm";
import {
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap";
import axios from "axios";
const Forms = ({ stateFromDataEntry }) => {
  const [state, setState] = useState({});

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 6:  combine props which contains feature geometry and id with the form data that was just filled
    let result = await confirm({
      message: "Are you sure you want to add this data?",
    });
    if (result) {
      const data = { ...stateFromDataEntry, ...state };
      console.log(data);

      axios
        .post(`${REACT_APP_HEROKU_URL}/footpath/add`, data)
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div id="xx">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <h3>Footpath Datasets</h3>
          </CardHeader>
          <CardBody>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Input
                  type="text"
                  placeholder="Asset Name"
                  id="asset_name"
                  name="asset_name"
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Input
                  type="text"
                  placeholder="Employee Name"
                  id="surveyorname"
                  name="surveyorname"
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Input
                  type="date"
                  name="Rating_Dat"
                  id="Rating_Dat"
                  onChange={inputHandler}
                  placeholder="Date of survey"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Input
                  type="text"
                  name="cracks"
                  id="cracks"
                  onChange={inputHandler}
                  placeholder="Cracks"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Input
                  type="text"
                  name="pothole"
                  id="pothole"
                  onChange={inputHandler}
                  placeholder="Potehole condition"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Input
                  type="text"
                  name="erosion"
                  id="erosion"
                  onChange={inputHandler}
                  placeholder="Erosion"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-8">
                <Input
                  type="text"
                  name="slipperySurface"
                  id="slipperySurface"
                  onChange={inputHandler}
                  placeholder="Slippery Surface"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-8">
                <Input
                  type="text"
                  name="fallenBranches"
                  id="fallenBranches"
                  onChange={inputHandler}
                  placeholder="Fallen Branches percentage"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-8">
                <Input
                  type="text"
                  name="QualityOfCurbing"
                  id="QualityOfCurbing"
                  onChange={inputHandler}
                  placeholder="Quality of curbing"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Input
                  type="text"
                  name="degreeOfCleanliness"
                  id="degreeOfCleanliness"
                  onChange={inputHandler}
                  placeholder="Degree of cleanliness"
                />
              </FormGroup>

              <FormGroup className="col-md-6">
                <Input
                  type="text"
                  name="conditionofDrains"
                  id="conditionofDrains"
                  onChange={inputHandler}
                  placeholder="Condition of drains"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Input
                  type="text"
                  name="pedestrians_Sainage_Condition"
                  id="pedestrians_Sainage_Condition"
                  onChange={inputHandler}
                  placeholder="Condition of sainage"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Input
                  type="text"
                  name="general_co"
                  id="general_co"
                  onChange={inputHandler}
                  placeholder="General Condition"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Input
                  type="text"
                  name="Oper_statu"
                  id="Oper_statu"
                  onChange={inputHandler}
                  placeholder="Operation Status"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Input
                  type="text"
                  name="Asset_age"
                  id="Asset_age"
                  onChange={inputHandler}
                  placeholder="Asset Age"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Input
                  type="text"
                  name="Overall_ra"
                  id="Overall_ra"
                  onChange={inputHandler}
                  placeholder="Overall Rating"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Input
                  type="text"
                  name="Remain_lif"
                  id="Remain_lif"
                  onChange={inputHandler}
                  placeholder="Remaining Life"
                />
              </FormGroup>
            </div>
          </CardBody>
          <CardFooter>
            <Button type="submit" color="primary">
              Add
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Forms;
