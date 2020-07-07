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
  Form,
} from "reactstrap";
import axios from "axios";
const Cyclewayform = ({ stateFromDataEntry, change }) => {
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
      const sentData = { ...stateFromDataEntry, ...state };
      console.log(sentData);

      axios
        .post(`${process.env.REACT_APP_HEROKU_URL}/cycleway/add`, sentData)
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
        <Form onSubmit={handleSubmit}>
          <CardHeader>
            <h3>Cycleway Datasets</h3>
          </CardHeader>
          <CardBody>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="asset_name">
                  Asset:
                </Label>
                <Input
                  type="text"
                  placeholder={
                    stateFromDataEntry.asset_name
                      ? `Asset: ${stateFromDataEntry.asset_name}`
                      : "Enter asset name"
                  }
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
                  value={state.surveyorname || ""}
                  placeholder={
                    stateFromDataEntry.surveyorname
                      ? `Surveyor: ${stateFromDataEntry.surveyorname}`
                      : "Surveyor name"
                  }
                  id="surveyorname"
                  name="surveyorname"
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
                  placeholder={
                    stateFromDataEntry.Rating_Dat
                      ? `Date: ${stateFromDataEntry.Rating_Dat}`
                      : "Date"
                  }
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Potholes">
                  Potholes:
                </Label>
                <Input
                  type="text"
                  value={state.Potholes || ""}
                  name="Potholes"
                  id="Potholes"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.Potholes
                      ? `Potholes: ${stateFromDataEntry.Potholes}`
                      : "Potholes"
                  }
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="surfaceCracking">
                  surface Cracking:
                </Label>
                <Input
                  type="text"
                  name="surfaceCracking"
                  value={state.surfaceCracking || ""}
                  id="surfaceCracking"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.surfaceCracking
                      ? `surface Cracking: ${stateFromDataEntry.surfaceCracking}`
                      : "surface Cracking"
                  }
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="qualityOfSinage">
                  Quality Of Sinage:
                </Label>
                <Input
                  type="text"
                  value={state.qualityOfSinage || ""}
                  name="qualityOfSinage"
                  id="qualityOfSinage"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.qualityOfSinage
                      ? `Quality of Sinage: ${stateFromDataEntry.qualityOfSinage}`
                      : "Quality of Sinage"
                  }
                />
              </FormGroup>
            </div>

            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="overhangingVegetation">
                  Overhanging Vegetation
                </Label>
                <Input
                  type="text"
                  value={state.overhangingVegetation || ""}
                  name="overhangingVegetation"
                  id="overhangingVegetation"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.overhangingVegetation
                      ? `overhanging Vegetation: ${stateFromDataEntry.overhangingVegetation}`
                      : "overhanging Vegetation"
                  }
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="widthRestrictions">
                  Width Restrictions:
                </Label>
                <Input
                  type="text"
                  value={state.widthRestrictions || ""}
                  name="widthRestrictions"
                  id="widthRestrictions"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.widthRestrictions
                      ? `width Restrictions: ${stateFromDataEntry.widthRestrictions}`
                      : "width Restrictions"
                  }
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="general_co">
                  General Condition:
                </Label>
                <Input
                  type="text"
                  value={state.general_co || ""}
                  name="general_co"
                  id="general_co"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.general_co
                      ? `General Condition: ${stateFromDataEntry.general_co}`
                      : "General Condition"
                  }
                />
              </FormGroup>
            </div>

            <div className="form-row">
              {/* <FormGroup className="col-md-8">
                <Input
                  type="text"
                  name="qualityOfLighting"
                  id="qualityOfLighting"
                  onChange={inputHandler}
                  placeholder="Quality of Lighting"
                  disabled={stateFromDataEntry.qualityOfLighting ? false : true}
                  placeholder={
                    stateFromDataEntry.qualityOfLighting
                      ? `quality Of Lighting: ${stateFromDataEntry.qualityOfLighting}`
                      : "quality Of Lighting"
                  }
                />
              </FormGroup> */}
            </div>
            <div className="form-row">
              {/* <FormGroup className="col-md-4">
                <Input
                  type="text"
                  name="degreeOfCleanliness"
                  id="degreeOfCleanliness"
                  onChange={inputHandler}
                  disabled={
                    stateFromDataEntry.degreeOfCleanliness ? false : true
                  }
                  placeholder={
                    stateFromDataEntry.degreeOfCleanliness
                      ? `degree Of Cleanliness: ${stateFromDataEntry.degreeOfCleanliness}`
                      : "degree Of Cleanliness"
                  }
                />
              </FormGroup> */}
            </div>
            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="wornLines">
                  Worn Lines:
                </Label>
                <Input
                  type="text"
                  value={state.wornLines || ""}
                  name="wornLines"
                  id="wornLines"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.wornLines
                      ? `Worn lines condition: ${stateFromDataEntry.wornLines}`
                      : "Worn lines condition"
                  }
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="wornLines">
                  Operation Status:
                </Label>
                <Input
                  type="text"
                  value={state.Oper_statu || ""}
                  name="Oper_statu"
                  id="Oper_statu"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.Oper_statu
                      ? `Operation Status: ${stateFromDataEntry.Oper_statu}`
                      : "Operation Status"
                  }
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Asset_age">
                  Asset Age:
                </Label>
                <Input
                  type="text"
                  value={state.Asset_age || ""}
                  name="Asset_age"
                  id="Asset_age"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.Asset_age
                      ? `Asset Age: ${stateFromDataEntry.Asset_age}`
                      : "Asset Age"
                  }
                />
              </FormGroup>
            </div>

            <div className="form-row">
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Overall_ra">
                  Overall Rating:
                </Label>
                <Input
                  value={state.Overall_ra || ""}
                  type="text"
                  name="Overall_ra"
                  id="Overall_ra"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.Overall_ra
                      ? `Overall rating: ${stateFromDataEntry.Overall_ra}`
                      : "Overall rating"
                  }
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label className="mr-sm-2" for="Remain_lif">
                  Remaining Life:
                </Label>
                <Input
                  type="text"
                  value={state.Remain_lif || ""}
                  name="Remain_lif"
                  id="Remain_lif"
                  onChange={inputHandler}
                  disabled={stateFromDataEntry.geometry ? false : true}
                  placeholder={
                    stateFromDataEntry.Remain_lif
                      ? `Remaining Life: ${stateFromDataEntry.Remain_lif}`
                      : "Remaining Life"
                  }
                />
              </FormGroup>
            </div>
          </CardBody>
          <CardFooter>
            <Button type="submit" color="primary">
              Add
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
};

export default Cyclewayform;
