import React from 'react';
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

// Component
const StartQuest = () => {
  return (
    <CenteredContainer>
      <Container className="container">
        {/* Centered Search field */}
        <CenteredInputContainer>
          <SearchInput
            type="text"
            className="form-control mb-3"
            placeholder="Search..."
          />
        </CenteredInputContainer>

        {/* Container with rows and columns */}
        <div className="row">
          {/* Column 1 */}
          <Column className="col">
            {/* Rows */}
            {Array.from({ length: 7 }).map((_, index) => (
              <Row className="row" key={index}>
                {/* Content of each row */}
                <InputField type="text" placeholder={`Input ${index + 1}`} />
              </Row>
            ))}
          </Column>
        </div>

        {/* Submit Button */}
        <CenteredInputContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </CenteredInputContainer>
      </Container>
    </CenteredContainer>
  );
};

export default StartQuest;
;


