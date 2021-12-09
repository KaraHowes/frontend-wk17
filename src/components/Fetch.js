import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.section`
display: flex;
flex-direction: row:
width: 100%;
flex-wrap: wrap;
margin: 0 auto;
`;
const Card = styled.div`
  margin: 10px;
  width: 23%;
  border: 2px solid black;
  justify-content: center;
  text-align: center;
  font-family: "Courier Prime", monospace;
  max-width: 300px;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.5);
  
`;
const Fetch = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    fetch(`https://kh-nobelprize-api.herokuapp.com`)
      .then((res) => res.json())
      .then((json) => {
        setWinners(json);
      });
  });

  return (
    <CardContainer>
      {winners.map((winner) => (
        <Card>
          <img
            className="medal"
            src="/assets/Nobel_Prize.png"
            alt="Nobel medal"
          />
          <h1>
            {" "}
            {winner.firstname} {winner.surname}
          </h1>
          <h2> {winner.category}</h2>
          <h3> {winner.year}</h3>
        </Card>
      ))}
    </CardContainer>
  );
};
export default Fetch;
