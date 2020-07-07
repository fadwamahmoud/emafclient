import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Layer, Feature } from "react-mapbox-gl";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA",
});
function Publictransportmap(props) {
  console.log(props.setStateToFeature);
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_HEROKU_URL}/publictrans/`, {})
        .then((res) => {
          console.log(res.data);
          setState(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();

    console.log(state);
  }, []);

  const handleClick = (feature) => {
    props.setStateToFeature(feature);
  };
  const onDrawCreate = ({ features }) => {
    console.log({ ...features });
    props.setStateToFeature(features[0]);
  };

  return (
    <div>
      <Map
        center={props.center}
        zoom={[13]}
        style={props.style} // eslint-disable-line
        containerStyle={{
          height: props.height,
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
            <Feature
              coordinates={feature.geometry.coordinates}
              onClick={() => handleClick(feature)}
            />
          ))}
        </Layer>
      </Map>
    </div>
  );
}
export default Publictransportmap;
