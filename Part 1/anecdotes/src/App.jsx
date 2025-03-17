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
  const [selected, setSelected] = useState(0);

  const all = bad + good + neutral;

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleRandom = () => {
    const min = 0;
    const max = anecdotes.length-1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    setSelected(randomNumber);
  };

  const votesArray= new Array(anecdotes.length).fill(0);
  console.log(votesArray);

  const [votes, setVotes]=useState(votesArray)

  const handleVotes=()=>{
    const copyVotes=[...votes];
    copyVotes[selected]+=1;
    setVotes(copyVotes);
    

  }
  const highest = votes.indexOf(Math.max(...votes));




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

      <br />

      <div>{anecdotes[selected]}</div>

      <br />

      <div>
        <p>has votes:{votes[selected]}</p>
        {console.log(votes)}
        <button onClick={handleVotes}>Vote</button>
        <button onClick={handleRandom}>next anecdote</button>
      </div>

      <h1>Anecdote with the most votes</h1>
      <br />
      <div>{anecdotes[highest]}</div>
      <div>has  {votes[highest]} votes</div>
      

    
    </>
  );
}

export default App;
