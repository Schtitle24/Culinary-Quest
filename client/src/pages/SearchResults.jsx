import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import oldPaperImg from '../imgs/old-paper.jpeg';
import { BsStar, BsStarFill } from 'react-icons/bs';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 20px; 
`;

const Card = styled.div`
  background-image: url(${oldPaperImg});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; 
`;

const CardTitle = styled.h2`
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #333;
`;

const StarIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const SearchResults = () => {
  const location = useLocation();
  const quests = location.state?.quests || [];

  // Function to handle saving a quest
  const saveQuest = (index) => {
    const updatedQuests = [...quests];
    updatedQuests[index].saved = !updatedQuests[index].saved;
    // Store the updated quests in local storage
    localStorage.setItem('savedQuests', JSON.stringify(updatedQuests));
  };

  return (
    <div>
      <h1>Quests</h1>
      <CardContainer>
        {quests.map((quest, index) => (
          <Card key={index}>
            <CardTitle>{quest.name}</CardTitle>
            <CardDescription>{quest.description}</CardDescription>
            {/* Render star icon based on saved status */}
            {quest.saved ? (
              <StarIcon onClick={() => saveQuest(index)}>
                <BsStarFill color="gold" />
              </StarIcon>
            ) : (
              <StarIcon onClick={() => saveQuest(index)}>
                <BsStar color="gold" />
              </StarIcon>
            )}
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default SearchResults;