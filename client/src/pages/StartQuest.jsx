import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ADD_QUEST, ADD_LOCATION, ADD_ITEMS } from '../utils/mutations';
import {useMutation} from "@apollo/client"
// Styled components
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;


const InputField = styled.textarea`
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
    //inputs: Array.from({ length: 7 }).fill(''),
    inputs: '',
    //questName: "",
    description: ''
  });
  const [addQuest] = useMutation(ADD_QUEST)
  const [addQuestLocation] = useMutation(ADD_LOCATION)
  const [addQuestItems] = useMutation(ADD_ITEMS)
  // const handleInputChange = (e, index) => {
  //   const newInputs = [...formData.inputs];
  //   newInputs[index] = e.target.value;
  //   setFormData({ ...formData, inputs: newInputs });
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleFormSubmit = async (e) =>{
    e.preventDefault()
    const cardData = {
    search: formData.search,
    inputs: formData.inputs,
    //questName: formData.questName,
    description: formData.description
  };
  console.log(cardData)

  const {location} = await addQuestLocation({
    variables: {
      questLocation: formData.search
    }})

  const {items} = await addQuestItems({
    variables: {
      itemName: formData.inputs, 
      quest_id: 1 // to be replaced by real queried value
    }
  })

  const {quest}= await addQuest({
    variables: {
    questName: "John's Quest", // to be replaced by real queried value
    // questName: formData.questName
    questDescription: formData.description, 
    quest_log_id: 1 // to be replaced by real queried value
  }
  })
  console.log(location, items, quest)

  }
 
  

  

  return (
    <CenteredContainer>
     
      <Container className="container">
      <form onSubmit={handleFormSubmit}>
        <CenteredInputContainer>
          <SearchInput
            type="text"
            className="form-control mb-3"
            placeholder="Search Your City"
            value={formData.search}
            onChange={(e) => setFormData({ ...formData, search: e.target.value })}
          />
        
          {/* <SearchInput
            type="text"
            className="form-control mb-3"
            name="questName"
            placeholder="Name Your Quest"
            value={formData.questName}
            onChange={(e) => setFormData({ ...formData, search: e.target.value })}
          /> */}
        </CenteredInputContainer>
        <div className="row">
          <div className="col">
          <InputField
                  type="text"
                  name="inputs"
                  placeholder={``}
                  value={formData.inputs}
                  onChange={ handleInputChange}
                />
            {/* {formData.inputs.map((input, index) => (
              <Row key={index}>
                <InputField
                  type="text"
                  placeholder={`Input ${index + 1}`}
                  value={input}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Row>
            ))} */}
          </div>
        </div>
        <CenteredInputContainer>
          <DescriptionInput
            placeholder="Description"
            value={formData.description}
            onChange={handleDescriptionChange}
          />
        </CenteredInputContainer>
        <CenteredInputContainer>
          {/* <Link to={{ pathname: '/SingleQuest', state: { card: cardData } }}> */}
            <SubmitButton type='submit'>Submit</SubmitButton>
          {/* </Link> */}
            
        </CenteredInputContainer>
        </form>
      </Container>
    </CenteredContainer>
  );
};

export default StartQuest;




