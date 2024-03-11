import React, { useState } from 'react';
import styled from 'styled-components';

// Styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Styled component for the form container
const FormContainer = styled.div`
  position: relative;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 400px;
`;

// Styled component for the form
const Form = styled.form`
  margin-bottom: 20px;
`;

// Styled component for the form row
const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

// Styled component for the form label
const FormLabel = styled.label`
  flex: 1;
`;

// Styled component for the form input
const FormInput = styled.input`
  flex: 2;
  padding: 5px;
`;

// Styled component for the save button
const SaveButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`;

function SingleQuest() {
  const [restaurants, setRestaurants] = useState(['']);
  const [foods, setFoods] = useState(['']);

  const handleRestaurantChange = (index, value) => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants[index] = value;
    setRestaurants(updatedRestaurants);
  };

  const handleFoodChange = (index, value) => {
    const updatedFoods = [...foods];
    updatedFoods[index] = value;
    setFoods(updatedFoods);
  };

  const addRow = () => {
    setRestaurants([...restaurants, '']);
    setFoods([...foods, '']);
  };

  return (
    <Container>
      <FormContainer>
        <Form>
          {restaurants.map((restaurant, index) => (
            <FormRow key={index}>
              <FormLabel>Restaurant:</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter restaurant name"
                value={restaurant}
                onChange={(e) => handleRestaurantChange(index, e.target.value)}
              />
              <FormLabel>Food:</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter food item"
                value={foods[index]}
                onChange={(e) => handleFoodChange(index, e.target.value)}
              />
            </FormRow>
          ))}
        </Form>
        <SaveButton type="button" onClick={addRow}>Add Row</SaveButton>
      </FormContainer>
    </Container>
  );
}

export default SingleQuest;