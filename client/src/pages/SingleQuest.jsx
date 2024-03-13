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
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')}; /* Added font-weight */
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
const SingleQuest = () => {
  const [restaurantData, setRestaurantData] = useState([
    { name: 'Bills Famous', food: 'Pizza and Wings', checked: false },
    { name: 'Timmy Jims', food: 'BBQ Burger', checked: false },
    { name: 'Ninja Warrior', food: 'Special Sushi', checked: false },
    { name: 'Pancho Villas', food: 'Beef Tacos', checked: false },
    { name: 'Sals Shop', food: ' Lamb Pasta', checked: false },
    { name: 'Big Todds', food: ' 72 ounce Steak', checked: false },
    { name: 'Little Susies', food: 'Sexy Salad', checked: false },
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
          <SectionTitle bold><strong>City</strong></SectionTitle> {/* Bolded City */}
          <SubTitle>New York</SubTitle>
        </Section>
        <Section>
          <SectionTitle bold><strong>Username</strong></SectionTitle> {/* Bolded Username */}
          <SubTitle>Harry Mcfarry</SubTitle>
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

export default SingleQuest;








