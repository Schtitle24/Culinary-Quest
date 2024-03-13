import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ADD_QUEST, ADD_LOCATION, ADD_ITEMS } from '../utils/mutations';
import { useMutation } from "@apollo/client"

// Styled components
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; Remove this line */
`;
const Container = styled.div`
  margin-top: 5rem;
`;
const CenteredInputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SearchInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;
const Column = styled.div`
  flex: 1;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;
const InputField = styled.input`
  flex: 1;
  margin-left: 0.5rem;
`;
const DescriptionInput = styled.textarea`
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
`;
const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem;
`;

const StartQuest = () => {
  const [formData, setFormData] = useState({
    search: '',
    inputs: Array.from({ length: 7 }).fill(''),
    description: ''
  });

  const handleInputChange = (e, index) => {
    const newInputs = [...formData.inputs];
    newInputs[index] = e.target.value;
    setFormData({ ...formData, inputs: newInputs });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleSubmit = () => {
    const card = {
      search: formData.search,
      inputs: formData.inputs,
      description: formData.description
    };
    console.log(card);
    window.location.assign("/SingleQuest");
  };

  return (
    <CenteredContainer>
      <Container className="container">
        <CenteredInputContainer>
          <SearchInput
            type="text"
            className="form-control mb-3"
            placeholder="Search Your City"
            value={formData.search}
            onChange={(e) => setFormData({ ...formData, search: e.target.value })}
          />
        </CenteredInputContainer>
        <Column className="col">
          {formData.inputs.map((input, index) => (
            <Row className="row" key={index}>
              <InputField
                type="text"
                placeholder={`Input ${index + 1}`}
                value={input}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Row>
          ))}
          <CenteredInputContainer>
            <DescriptionInput
              placeholder="Description"
              value={formData.description}
              onChange={handleDescriptionChange}
            />
          </CenteredInputContainer>
        </Column>
        <CenteredInputContainer>
          <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
        </CenteredInputContainer>
      </Container>
    </CenteredContainer>
  );
};

export default StartQuest;
