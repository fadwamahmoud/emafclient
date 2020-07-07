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
const Stormwaterform = ({ stateFromDataEntry, change }) => {
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
        .post(`${process.env.REACT_APP_HEROKU_URL}/stormwater/add`, data)
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
            <h3>Storm Water Datasets</h3>
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
                <Label className="mr-sm-2" for="maintenance_of_hole">
                  Hole maintenance Condition:
                </Label>
                <Input
                  value={state.maintenance_of_hole || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="maintenance_of_hole"
                  id="maintenance_of_hole"
                  onChange={inputHandler}
                  placeholder="Hole maintenance Condition"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="groutmiss_around">
                  Grout around joints condition:
                </Label>
                <Input
                  value={state.groutmiss_around || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="groutmiss_around"
                  id="groutmiss_around"
                  onChange={inputHandler}
                  placeholder="Grout around joints condition"
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="exposed_rebar">
                  Exposed Rebar:
                </Label>
                <Input
                  value={state.exposed_rebar || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="exposed_rebar"
                  id="exposed_rebar"
                  onChange={inputHandler}
                  placeholder="Exposed Rebar"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="hydrogensulfide_damage">
                  Hydrogensulfide damage rate:
                </Label>
                <Input
                  value={state.hydrogensulfide_damage || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="hydrogensulfide_damage"
                  id="hydrogensulfide_damage"
                  onChange={inputHandler}
                  placeholder="Hydrogensulfide damage rate"
                />
              </FormGroup>

              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="hole_bricks_missing">
                  Hole bricks missing:
                </Label>
                <Input
                  value={state.hole_bricks_missing || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="hole_bricks_missing"
                  id="hole_bricks_missing"
                  onChange={inputHandler}
                  placeholder="Hole bricks missing"
                />
              </FormGroup>

              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="object_restrict_flow">
                  Object Restrict flow:
                </Label>
                <Input
                  value={state.object_restrict_flow || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="object_restrict_flow"
                  id="object_restrict_flow"
                  onChange={inputHandler}
                  placeholder="Object Restrict flow"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="checklid_frame_forcracks">
                  Check lid frame for cracks:
                </Label>
                <Input
                  value={state.checklid_frame_forcracks || ""}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  type="text"
                  name="checklid_frame_forcracks"
                  id="checklid_frame_forcracks"
                  onChange={inputHandler}
                  placeholder="Check lid frame for cracks"
                />
              </FormGroup>

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
            </div>
            <div className="form-row">
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
                  Asset Age:
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

              <FormGroup className="col-md-4">
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

export default Stormwaterform;
