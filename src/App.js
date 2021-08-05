import React, { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
// import { CSSTransition } from "react-transition-group";
import "../src/app.css";
// import PropTypes from "prop-types";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const handleFeedback = (event) => {
    const { name } = event.currentTarget;
    switch (name) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        alert("You haven't left any feedback!");
    }
  };

  const countPositiveFeedbackPercentage = (totalValue) => {
    return Math.round((good / totalValue) * 100);
  };

  const totalValue = good + neutral + bad;
  const positiveFeedbackValue = countPositiveFeedbackPercentage(totalValue);
  return (
    <>
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalValue === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalValue}
              positivePercentage={positiveFeedbackValue}
            ></Statistics>
          )}
        </Section>
      </Container>
    </>
  );
}
