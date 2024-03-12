
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
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
const Separator = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 font-weight: bold;
`;
const SubmitButton = styled.button`
 margin-top: 1rem;
 padding: 0.5rem 2rem;
`;
const StartQuest = () => {
 const [formData, setFormData] = useState({
   search: '',
   inputs1: Array.from({ length: 7 }).fill(''),
   inputs2: Array.from({ length: 7 }).fill(''),
 });
//  const history = useHistory();
 const handleInputChange = (e, index, column) => {
   const newFormData = { ...formData };
   if (column === 1) {
     newFormData.inputs1[index] = e.target.value;
   } else {
     newFormData.inputs2[index] = e.target.value;
   }
   setFormData(newFormData);
 };
 const handleSubmit = () => {
   const card = {
     search: formData.search,
     inputs1: formData.inputs1,
     inputs2: formData.inputs2,
   };
   history.push('/otherpage', { card });
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
       <div className="row">
         <Column className="col">
           {formData.inputs1.map((input, index) => (
             <Row className="row" key={index}>
               <InputField
                 type="text"
                 placeholder={`Input ${index + 1}`}
                 value={input}
                 onChange={(e) => handleInputChange(e, index, 1)}
               />
             </Row>
           ))}
         </Column>
         <Separator className="col-1">
           <strong>FROM</strong>
         </Separator>
         <Column className="col">
           {formData.inputs2.map((input, index) => (
             <Row className="row" key={index}>
               <InputField
                 type="text"
                 placeholder={`Input ${index + 8}`}
                 value={input}
                 onChange={(e) => handleInputChange(e, index, 2)}
               />
             </Row>
           ))}
         </Column>
       </div>
       <CenteredInputContainer>
         <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
       </CenteredInputContainer>
     </Container>
   </CenteredContainer>
 );
};
export default StartQuest;

