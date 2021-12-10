import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useParams } from 'react-router-dom';


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

const CategoryWinners = () => {
const [subject, setSubject] = useState([]);
const { category } = useParams();

    useEffect(() => {
    fetch(`https://kh-nobelprize-api.herokuapp.com/winners/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setSubject(json);
      });
  }, [category]);    

return (
    <CardContainer>
    {subject.map((item) => (
      <Card key={item.surname}>
        <img
          className="medal"
          src="/assets/Nobel_Prize.png"
          alt="Nobel medal"
        />
        <h1>
          {item.firstname} {item.surname}
        </h1>
        <h2> {item.category}</h2>
        <h3> {item.year}</h3>
      </Card>
    ))}
  </CardContainer>
    )
}
export default CategoryWinners

