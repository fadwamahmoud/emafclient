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
const Publictransportform = ({ stateFromDataEntry, change }) => {
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
        .post(`${process.env.REACT_APP_HEROKU_URL}/publictrans/add`, data)
        .then(({ data }) => {
          console.log(data);
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
            <h3>Public Transport Datasets</h3>
          </CardHeader>
          <CardBody>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="asset_name">
                  Asset:
                </Label>
                <Input
                  type="text"
                  placeholder="Asset Name"
                  id="asset_name"
                  name="asset_name"
                  value={state.asset_name || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="surveyorname">
                  Surveyor:
                </Label>
                <Input
                  type="text"
                  placeholder="Employee Name"
                  id="surveyorname"
                  name="surveyorname"
                  value={state.surveyorname || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Rating_Dat">
                  Date:
                </Label>
                <Input
                  type="date"
                  name="Rating_Dat"
                  id="Rating_Dat"
                  onChange={inputHandler}
                  value={state.Rating_Dat || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder="Date of survey"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label
                  className="mr-sm-2"
                  for="LevelOf_modal_integration_service"
                >
                  Modal Integration Service:
                </Label>
                <Input
                  type="text"
                  name="LevelOf_modal_integration_service"
                  id="LevelOf_modal_integration_service"
                  onChange={inputHandler}
                  value={state.LevelOf_modal_integration_service || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder="Level of modal integration service"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="bus_punctuality">
                  Bus punctuality:
                </Label>
                <Input
                  type="text"
                  name="bus_punctuality"
                  id="bus_punctuality"
                  onChange={inputHandler}
                  value={state.bus_punctuality || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder="Bus Punctuality"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="train_punctuality">
                  Train punctuality:
                </Label>
                <Input
                  type="text"
                  name="train_punctuality"
                  id="train_punctuality"
                  onChange={inputHandler}
                  value={state.train_punctuality || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder="Train Punctuality"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="ferry_punctuality">
                  Ferry punctuality:
                </Label>

                <Input
                  type="text"
                  name="ferry_punctuality"
                  id="ferry_punctuality"
                  onChange={inputHandler}
                  value={state.ferry_punctuality || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder="Ferry Punctuality"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="perceived_qualityof_service">
                  Perceived Quality of Service:
                </Label>
                <Input
                  type="text"
                  name="perceived_qualityof_service"
                  id="perceived_qualityof_service"
                  onChange={inputHandler}
                  placeholder="Perceived Quality of Service"
                  value={state.perceived_qualityof_service || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                />
              </FormGroup>

              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="mobilityofInhabitant">
                  Mobility of Inhabitant:
                </Label>
                <Input
                  type="text"
                  name="mobilityofInhabitant"
                  id="mobilityofInhabitant"
                  onChange={inputHandler}
                  placeholder="Mobility of Inhabitant"
                  value={state.mobilityofInhabitant || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Label className="mr-sm-2" for="Oper_statu">
                  Operation Status:
                </Label>
                <Input
                  type="text"
                  name="Oper_statu"
                  id="Oper_statu"
                  onChange={inputHandler}
                  placeholder="Operation Status"
                  value={state.Oper_statu || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                />
              </FormGroup>

              <FormGroup className="col-md-6">
                <Label className="mr-sm-2" for="avail_infowith_ptservice">
                  Information Availability connect with PT service:
                </Label>
                <Input
                  type="text"
                  name="avail_infowith_ptservice"
                  id="avail_infowith_ptservice"
                  onChange={inputHandler}
                  placeholder="Information Availability connect with PT service"
                  value={state.avail_infowith_ptservice || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="passengerDemand">
                  Passenger Demand :
                </Label>
                <Input
                  type="text"
                  name="passengerDemand"
                  id="passengerDemand"
                  onChange={inputHandler}
                  placeholder="Passenger Demand "
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="serviceEffeciency">
                  Service Effeciency :
                </Label>
                <Input
                  type="text"
                  name="serviceEffeciency"
                  id="serviceEffeciency"
                  onChange={inputHandler}
                  placeholder="Service Effeciency"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Asset_age">
                  Asset Age:
                </Label>
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
                <Label className="mr-sm-2" for="general_co">
                  General Condition:
                </Label>
                <Input
                  type="text"
                  name="general_co"
                  id="general_co"
                  onChange={inputHandler}
                  placeholder="General Condition"
                  value={state.general_co || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                />
              </FormGroup>

              <FormGroup className="col-md-6">
                <Label className="mr-sm-2" for="acess_passenger_info">
                  Accessibility of realtime Passenger Information:
                </Label>
                <Input
                  type="text"
                  name="acess_passenger_info"
                  id="acess_passenger_info"
                  onChange={inputHandler}
                  placeholder="Accessibility of realtime Passenger Information"
                  value={state.acess_passenger_info || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Label className="mr-sm-2" for="Overall_ra">
                  Overall Rating:
                </Label>
                <Input
                  type="text"
                  name="Overall_ra"
                  id="Overall_ra"
                  onChange={inputHandler}
                  placeholder="Overall Rating"
                  value={state.Overall_ra || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
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

export default Publictransportform;
