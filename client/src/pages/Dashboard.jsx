import React from 'react';
import { Container, Carousel } from 'react-bootstrap'; 
import { BsStarFill } from 'react-icons/bs'; 
import styled from 'styled-components'; 
import oldPaper from '../imgs/old-paper.jpeg'; 
import NavBarIcon from '../imgs/NavBarIcon.jpeg'

// Styled components
const ThoughtBubbleCard = styled.div`
  background-color: #f0f0f0;
  color: #065446;
  font-weight: bold;
  border-radius: 20px;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto 40px; 
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
    border-radius: 50%; 
    background-image: url(${NavBarIcon}); 
    background-size: cover;
    transform: translateX(-50%) rotate(45deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 

  @media (min-width: 1600px) and (min-height: 907px) {
    grid-template-columns: repeat(4, 1fr); 
  }
`;

const Card = styled.div`
  background-image: url(${oldPaper});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

`;

const CardTitle = styled.h2`
  color: #fff;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-weight: normal;

  &:hover::after {
    content: '';
    position: absolute;
    left: 45%; 
    bottom: -2px;
    width: 50%;
    transform: translateX(-50%);
    height: 1px;
    background-color: #fff;
  }
`;

const CardDescription = styled.div`
  color: #fff; 
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
`;

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const CheckBox = styled.input`
  margin-right: 5px; /* Adjust the margin for better alignment */
`;

const Username = styled.div`
  position: absolute;
  top: 10px; 
  right: 10px; 
  color: #fff;
  opacity: 0.8;
`;

function Dashboard() {
    // Sample data for saved quests
    const savedQuests = [
        { id: 1, city: 'Austin', username: 'MattyMuncher', restaurants: ['Enchanted Eatery', 'Mystical Cafe', 'Wizard Wok'], foods: ['Spellbinding Spaghetti', 'Magic Muffins', 'Enchanted '] },
        { id: 2, city: 'Austin', username: 'FairyFeaster', restaurants: ['Goblin Grotto', 'Pixie Pizzeria', 'Fairy Feasts'], foods: ['Elf-made Pizza', 'Pixie Pasta', 'Fey Fries'] },
        { id: 3, city: 'Austin', username: 'DragonDiner', restaurants: ['Fire & Flames Grill', 'Dragon Diner', 'Mythical Meats'], foods: ['Roasted Dragon Wings', 'Dragonfire Burger', 'Sorcerer Sushi'] },
        { id: 4, city: 'Austin', username: 'OceanEater', restaurants: ['Seashell Shack', 'Mermaid Cove', 'Neptune\'s Nook'], foods: ['Siren Sushi', 'Seaweed Salad', 'Deep Sea Delight'] },
        { id: 5, city: 'Austin', username: 'WizardNomad', restaurants: ['Magical Munchies', 'Wizard\'s Waffles', 'Spellbound Spuds'], foods: ['Potion Pancakes', 'Magic Mushrooms', 'Enchanted Entree'] },
        { id: 6, city: 'Austin', username: 'FeyFoodie', restaurants: ['Fairy Frolics Cafe', 'Fey Fountains', 'Pixie Palace'], foods: ['Unicorn Burger', 'Pixie Pie', 'Mystic Morsels'] },
        { id: 7, city: 'Austin', username: 'WitchyWanderer', restaurants: ['Broomstick Bistro', 'Witchs Ward', 'Cauldron Cuisine'], foods: ['Witch Brew Stew', 'Hexed Hamburgers', 'Spellbound Salad'] },
        { id: 8, city: 'Austin', username: 'GoblinGourmet', restaurants: ['Troll Tavern', 'Goblin Grill', 'Gnomish Galley'], foods: ['Goblin Goulash', 'Ogre Omelette', 'Fantasy Fajitas'] },
    ];
    return (
        <Container>
            {/* Saved quests carousel */}
            <h2 className="my-4 text-center" style={{ fontFamily: "Mystery Quest", color: "#065446", textAlign: "center" }}>Saved Quests</h2>
            <Carousel>
                {savedQuests.map((quest) => (
                    <Carousel.Item key={quest.id}>
                        <div style={{ 
                            position: 'relative', 
                            backgroundImage: `url(${oldPaper})`, 
                            backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat',
                            height: '300px' 
                            }}>
                            {/* Star icon at the top right */}
                            <BsStarFill style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                color: 'gold', 
                                fontSize: '24px', 
                                zIndex: '999', 
                            }} />
                            <div className="carousel-caption">
                                <CardTitle>{quest.city}</CardTitle>
                                <CardDescription>
                                    <Column>
                                        <Header>Restaurant</Header>
                                        {quest.restaurants.map((restaurant, index) => (
                                            <div key={index}>
                                                <CheckBox type="checkbox" />
                                                {restaurant}
                                            </div>
                                        ))}
                                    </Column>
                                    <Column>
                                        <Header>Food</Header>
                                        {quest.foods.map((food, index) => (
                                            <div key={index}>
                                                {food}
                                            </div>
                                        ))}
                                    </Column>
                                </CardDescription>
                                <Username>{quest.username}</Username>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* Thought bubble card */}
            <ThoughtBubbleCard>
                <p>
                    Welcome to the dashboard! Here you can view your saved quests and track your culinary adventures.
                </p>
            </ThoughtBubbleCard>
        </Container>
    );
}
export default Dashboard;