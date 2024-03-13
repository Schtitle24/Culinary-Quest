import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CardContainer = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

const RestaurantItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const TextInput = styled.input`
  flex: 1;
`;

// Component
const QuestCardList = () => {
  const [restaurantData, setRestaurantData] = useState([
    { name: 'Restaurant A', food: 'Pizza', checked: false },
    { name: 'Restaurant B', food: 'Burger', checked: false },
    { name: 'Restaurant C', food: 'Sushi', checked: false },
    { name: 'Restaurant D', food: 'Tacos', checked: false },
    { name: 'Restaurant E', food: 'Pasta', checked: false },
    { name: 'Restaurant F', food: 'Steak', checked: false },
    { name: 'Restaurant G', food: 'Salad', checked: false },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedData = [...restaurantData];
    updatedData[index][field] = value;
    setRestaurantData(updatedData);
  };

  const handleCheckboxChange = (index) => {
    const updatedData = [...restaurantData];
    updatedData[index].checked = !updatedData[index].checked;
    setRestaurantData(updatedData);
  };

  return (
    <CenteredContainer>
      <CardContainer>
        <Section>
          <SectionTitle>City Name</SectionTitle>
          <SubTitle>New York</SubTitle>
        </Section>
        <Section>
          <SectionTitle>Username</SectionTitle>
          <SubTitle>Harry McFarry</SubTitle>
        </Section>
        <Section>
          <SectionTitle>Restaurants & Food Items</SectionTitle>
          {restaurantData.map((item, index) => (
            <RestaurantItem key={index}>
              <CheckBox
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <TextInput
                type="text"
                placeholder={`Restaurant Name ${index + 1}`}
                value={item.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              />
              <TextInput
                type="text"
                placeholder={`Food Item ${index + 1}`}
                value={item.food}
                onChange={(e) => handleInputChange(index, 'food', e.target.value)}
              />
            </RestaurantItem>
          ))}
        </Section>
      </CardContainer>
    </CenteredContainer>
  );
};

export default QuestCardList;








