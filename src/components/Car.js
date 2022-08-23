import React from "react";
import cars from "../cars.json";

import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  const { id } = useParams();
  let filteredCar = cars.filter((car) => Number(id) === car.id && car);
  console.log(filteredCar);
  let [car] = filteredCar;
  const carItems = [];
  for (const item in car) {
    console.log(item, car[item]);
    carItems.push(item + ": " + car[item]);
  }
  console.log(carItems);

  return (
    <div className="div-container">
      <Container className="items-container" maxWidth="sm">
        <Paper className="paper-container" elevation={3}>
          <h1>{car.Name}</h1>
          <div>
            {carItems.map((item, index) => {
              return <Chip className="chips" key={index} label={item} />;
            })}
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Car;
