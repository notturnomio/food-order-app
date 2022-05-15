import React from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./DummyMeals.js";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MealItem key={meal.id} {...meal} />;
  });
  console.log(DUMMY_MEALS);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
