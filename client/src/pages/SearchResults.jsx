import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import oldPaperImg from '../imgs/old-paper.jpeg';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  grid-gap: 20px; /* Gap between cards */
`;

const Card = styled.div`
  background-image: url(${oldPaperImg});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #333;
`;

const SearchResults = () => {
  const location = useLocation();
  const quests = location.state?.quests || [];

  return (
    <div>
      <h1>Quests</h1>
      <CardContainer>
        {quests.map((quest, index) => (
          <Card key={index}>
            <CardTitle>{quest.name}</CardTitle>
            <CardDescription>{quest.description}</CardDescription>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default SearchResults;