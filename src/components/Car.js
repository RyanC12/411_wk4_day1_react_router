import React from "react";
import cars from "../cars.json";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
// import material ui components here //
// Container, Paper, Chip //

const Car = props => {
  const newCar = cars.find(car => {
    return car.id === Number(props.match.params.id);
  });
  const carDetails = Object.entries(newCar).map(([key, value]) => {
    return <Chip label={`${key}: ${value}`} />;
  });

  return (
    <>


      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px"
        }}
      >
        <Container
          style={{
            width: "600px"
          }}
        >
          <Paper>
            <div style={{ padding: "40px" }}>
              <h1>{newCar.Name}</h1>
              <>{carDetails}</>
            </div>
          </Paper>
        </Container>
      </Container>
    </>
  );
};

export default Car;