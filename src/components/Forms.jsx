import React from "react";
import { useState, useEffect } from "react";
import confirm from "reactstrap-confirm";
import {
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Label,
} from "reactstrap";
import axios from "axios";
const Forms = ({ stateFromDataEntry, change }) => {
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
        .post(`${process.env.REACT_APP_HEROKU_URL}/footpath/add`, data)
        .then(({ data }) => {
          setState({});
          change();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    setState({
      ...stateFromDataEntry,
    });
  }, [stateFromDataEntry]);
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
                <Label className="mr-sm-2" for="asset_name">
                  Asset:
                </Label>
                <Input
                  value={state.asset_name || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  placeholder="Asset Name"
                  id="asset_name"
                  name="asset_name"
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="surveyorname">
                  Surveyor:
                </Label>
                <Input
                  value={state.surveyorname || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  placeholder="Employee Name"
                  id="surveyorname"
                  name="surveyorname"
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Rating_Dat">
                  Date:
                </Label>
                <Input
                  value={state.Rating_Dat || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
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
                <Label className="mr-sm-2" for="cracks">
                  Cracks:
                </Label>
                <Input
                  value={state.cracks || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="cracks"
                  id="cracks"
                  onChange={inputHandler}
                  placeholder="Cracks"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="pothole">
                  Potholes:
                </Label>
                <Input
                  value={state.pothole || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="pothole"
                  id="pothole"
                  onChange={inputHandler}
                  placeholder="Potehole condition"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="erosion">
                  Erosion:
                </Label>
                <Input
                  value={state.erosion || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="erosion"
                  id="erosion"
                  onChange={inputHandler}
                  placeholder="Erosion"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="slipperySurface">
                  Slippery Surface:
                </Label>
                <Input
                  value={state.slipperySurface || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="slipperySurface"
                  id="slipperySurface"
                  onChange={inputHandler}
                  placeholder="Slippery Surface"
                />
              </FormGroup>

              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="fallenBranches">
                  Fallen Branches:
                </Label>
                <Input
                  value={state.fallenBranches || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="fallenBranches"
                  id="fallenBranches"
                  onChange={inputHandler}
                  placeholder="Fallen Branches percentage"
                />
              </FormGroup>

              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="QualityOfCurbing">
                  Quality Of Curbing:
                </Label>
                <Input
                  value={state.QualityOfCurbing || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="QualityOfCurbing"
                  id="QualityOfCurbing"
                  onChange={inputHandler}
                  placeholder="Quality of curbing"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="degreeOfCleanliness">
                  Degree Of Cleanliness:
                </Label>
                <Input
                  value={state.degreeOfCleanliness || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="degreeOfCleanliness"
                  id="degreeOfCleanliness"
                  onChange={inputHandler}
                  placeholder="Degree of cleanliness"
                />
              </FormGroup>

              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="conditionofDrains">
                  Condition of Drains:
                </Label>
                <Input
                  value={state.conditionofDrains || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="conditionofDrains"
                  id="conditionofDrains"
                  onChange={inputHandler}
                  placeholder="Condition of drains"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="pedestrians_Sainage_Condition">
                  Condition of sainage:
                </Label>
                <Input
                  value={state.pedestrians_Sainage_Condition || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="pedestrians_Sainage_Condition"
                  id="pedestrians_Sainage_Condition"
                  onChange={inputHandler}
                  placeholder="Condition of sainage"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="general_co">
                  General Condition:
                </Label>
                <Input
                  value={state.general_co || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="general_co"
                  id="general_co"
                  onChange={inputHandler}
                  placeholder="General Condition"
                />
              </FormGroup>

              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Oper_statu">
                  Operation Status:
                </Label>
                <Input
                  value={state.Oper_statu || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="Oper_statu"
                  id="Oper_statu"
                  onChange={inputHandler}
                  placeholder="Operation Status"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Asset_age">
                  Asset age:
                </Label>
                <Input
                  value={state.Asset_age || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
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
                <Label className="mr-sm-2" for="Overall_ra">
                  Overall Rating:
                </Label>
                <Input
                  value={state.Overall_ra || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="Overall_ra"
                  id="Overall_ra"
                  onChange={inputHandler}
                  placeholder="Overall Rating"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label className="mr-sm-2" for="Remain_lif">
                  Remaining Life:
                </Label>
                <Input
                  value={state.Remain_lif || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
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
