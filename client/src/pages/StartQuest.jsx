import React, { useState } from 'react';
import styled from 'styled-components';
import { ADD_QUEST, ADD_ITEMS } from '../utils/mutations';
import { useMutation } from "@apollo/client";

// Styled components
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 80%; /* Adjust the width as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem; /* Add margin bottom for spacing */
  padding: 0.5rem;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem;
`;

const StartQuest = () => {
  const [formData, setFormData] = useState({
    questName: '',
    questLocation: '',
    questItems: Array.from({ length: 7 }).fill(''),
    questDescription: ''
  });

  const [addQuest] = useMutation(ADD_QUEST);
  const [addItems] = useMutation(ADD_ITEMS);

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the quest
    const { data: { addQuest: { id: questId } } } = await addQuest({
      variables: {
        questName: formData.questName,
        questLocation: formData.questLocation,
        questDescription: formData.questDescription
      }
    });

    // Create the items
    for (const itemName of formData.questItems) {
      await addItems({
        variables: {
          itemName,
          questId
        }
      });
    }

    // Reset form data after submission
    setFormData({
      questName: '',
      questLocation: '',
      questItems: Array.from({ length: 7 }).fill(''),
      questDescription: ''
    });
  };

  return (
    <CenteredContainer>
      <FormContainer onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Quest Name"
          value={formData.questName}
          onChange={(e) => handleInputChange(e, 'questName')}
        />
        <InputField
          type="text"
          placeholder="Quest Location"
          value={formData.questLocation}
          onChange={(e) => handleInputChange(e, 'questLocation')}
        />
        {formData.questItems.map((item, index) => (
          <InputField
            key={index}
            type="text"
            placeholder={`Quest Item ${index + 1}`}
            value={item}
            onChange={(e) => {
              const newItems = [...formData.questItems];
              newItems[index] = e.target.value;
              setFormData({ ...formData, questItems: newItems });
            }}
          />
        ))}
        <TextArea
          placeholder="Quest Description"
          value={formData.questDescription}
          onChange={(e) => handleInputChange(e, 'questDescription')}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </CenteredContainer>
  );
};

export default StartQuest;


