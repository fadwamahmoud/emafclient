import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import { Layer, Feature, Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA",
});
function Maps(props) {
  console.log(props.setStateToFeature);
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_HEROKU_URL}/footpath/`, {})
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
  }, [props.change]);

  const handleClick = (feature) => {
    props.setStateToFeature(feature);
    console.log(feature);
  };
  const onDrawCreate = ({ features }) => {
    console.log({ ...features });
    props.setStateToFeature(features[0]);
  };

  return (
    <div>
      <Map
        center={props.center}
        zoom={[14]}
        style={props.style} // eslint-disable-line
        containerStyle={{
          height: props.height,
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} />
        {state.map((p) => (
          <Marker
            {...p}
            coordinates={p.geometry.coordinates[0]}
            onClick={() => handleClick(p)}
            anchor="bottom"
            offset={[11, 2]}
          >
            <div className="mapMarkerStyle" />
          </Marker>
        ))}

        <Layer
          type="line"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "#e14eca",
            "line-width": 3,
          }} // eslint-disable-next-line
        >
          {state.map((p) => (
            <Feature {...p} coordinates={p.geometry.coordinates} />
          ))}
        </Layer>
      </Map>
    </div>
  );
}
export default Maps;
