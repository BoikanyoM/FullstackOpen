import { useState } from "react";

const Heading = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  if (!(good || neutral || bad)) {
    return (
      <>
        <div>No feedback was given</div>
      </>
    );
  }
  return (
    <>
      <StatisticLine text={"good"} value={good} />

      <StatisticLine text={"neutral"} value={neutral} />

      <StatisticLine text={"bad"} value={bad} />

      <StatisticLine text="all" value={all} />

      <StatisticLine text="average" value={(good + bad * -1) / all} />

      <StatisticLine text="postive" value={(good / all) * 100 + " %"} />
    </>
  );
};

function App() {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);

  const all = bad + good + neutral;

  return (
    <>
      <Heading text="give feedback" />
      <br />

      <Button onClick={() => setGood(good + 1)} text={"good"} />

      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />

      <Button onClick={() => setBad(bad + 1)} text={"bad"} />

      <br />
      <br />

      <Heading text="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </>
  );
}

export default App;
