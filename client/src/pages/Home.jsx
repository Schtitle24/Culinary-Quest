import React from 'react';
import styled from 'styled-components';
import questimg from '../imgs/CQ-img.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center; 
  justify-content: center; 
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 290px;
  height: calc(100% - 560px);

  img {
    width: 272px;
    height: 92px;
    margin-top: auto;
  }
`;

const SearchSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 14px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  max-width: 584px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  padding-top: 18px;
  top: 53px;
  z-index: 0;

  button {
    background-color: #065446;
    background-image: linear-gradient(to right, #3C6255 0%, #61876E 100%);
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #EAE7B1;
    font-family: Roboto, arial, sans-serif;
    font-size: 18px;
    margin: 11px 4px;
    padding: 12 px;
    line-height: 27px;
    height: 36px;
    min-width: 80px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
`;

const SearchIcon = styled.span`
  color: #9aa0a6;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;

  & svg {
    fill: #9aa0a6;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
`;


const ThoughtBubbleCard = styled.div`
  background-color: #f0f0f0;
  color: #065446;
  font-weight: bold;
  border-radius: 20px;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
  position: relative;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0.8; 

  

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    width: 30px;
    height: 30px;
    background-color: #f0f0f0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: translateX(-50%) rotate(45deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Home = () => {
  return (
    <Container className="my-auto py-4">
      <LogoSection className="d-flex justify-content-center">
        <img
          src={questimg}
          alt="quest-img"
          className="img-responsive h-100 w-250 object-cover rounded-3"
        />
      </LogoSection>
      <SearchSection>
        <Form action="/" method="GET" role="search">
          <Search>
            <SearchIcon>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </SearchIcon>
            <SearchInput type="text" />
          </Search>
        </Form>
        <ButtonSection>
          <button>Search</button>
        </ButtonSection>
      </SearchSection>
      {/* Section for brief directions */}
      <ThoughtBubbleCard>
        <p>
          Type the name of a city in the search bar to find Culinary quests in
          that location!
        </p>
      </ThoughtBubbleCard>
    </Container>
  );
};

export default Home;