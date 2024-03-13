// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import oldPaperImg from '../imgs/old-paper.jpeg';

// const CardContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust column width as needed */
//   grid-gap: 20px; /* Gap between cards */
// `;

// const Card = styled.div`
//   background-image: url(${oldPaperImg});
//   background-size: cover;
//   background-position: center;
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const CardTitle = styled.h2`
//   margin-bottom: 10px;
// `;

// const CardDescription = styled.p`
//   color: #333;
// `;

// const SearchResults = () => {
//   const location = useLocation();
//   const [quests, setQuests] = useState([]);
//   const searchQuery = new URLSearchParams(location.search).get('city');

//   useEffect(() => {
//     const fetchQuests = async () => {
//       try {
//         if (!searchQuery) return; // Don't fetch if searchQuery is empty

//         const response = await fetch(`/server/models/quests?city=${searchQuery}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch quests');
//         }
//         const data = await response.json();
//         setQuests(data.quests);
//       } catch (error) {
//         console.error('Error fetching quests:', error);
//         // Optionally, set an empty array to quests if fetching fails
//         setQuests([]);
//       }
//     };

//     fetchQuests();
//   }, [searchQuery]);

//   return (
//     <div>
//       <h1>Quests</h1>
//       <CardContainer>
//         {quests.map((quest) => (
//           <Card key={quest.id}>
//             <CardTitle>{quest.name}</CardTitle>
//             <CardDescription>{quest.description}</CardDescription>
//           </Card>
//         ))}
//       </CardContainer>
//     </div>
//   );
// };

// export default SearchResults;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import oldPaperImg from '../imgs/old-paper.jpeg';

// Font styling
const mysteryQuestFont = `
  font-family: "Mystery Quest", system-ui;
  font-weight: 400;
  font-style: normal;
`;

// Styled components
const CardContainer = styled.div`
  display: grid;
  grid-gap: 20px; /* Gap between cards */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Default layout */

  /* Media query for screen size greater than 1599x906 */
  @media (min-width: 1600px) and (min-height: 907px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns for larger screens */
  }
`;

const Card = styled.div`
  background-image: url(${oldPaperImg});
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
  margin-bottom: 10px;
  color: #fff;
  ${mysteryQuestFont}
  text-align: center;
  position: relative;
  cursor: pointer;
  font-weight: normal;

  &:hover::after {
    content: '';
    position: absolute;
    left: 45%; /* Adjust left position */
    bottom: -2px;
    width: 50%;
    transform: translateX(-50%);
    height: 1px;
    background-color: #fff;
  }
`;

const CardDescription = styled.div`
  color: #fff; 
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
`;

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  ${props => props.cityHeader ? mysteryQuestFont : null};
`;
const CheckBox = styled.input`
  margin-right: 10px;
`;

const Username = styled.div`
  position: absolute;
  top: 10px; /* Adjust top position */
  right: 10px; /* Adjust right position */
  color: #fff;
  opacity: 0.8;
`;

const HoverEffect = styled.div`
  &:hover {
    transform: translateY(-5px);
  }
`;




const SearchResults = () => {
  // Sample data for demonstration
  const sampleData = [
    { id: 1, city: 'Austin', username: 'MattyMuncher', restaurants: ['Enchanted Eatery', 'Mystical Cafe', 'Wizard Wok'], foods: ['Spellbinding Spaghetti', 'Magic Muffins', 'Enchanted '] },
    { id: 2, city: 'Austin', username: 'FairyFeaster', restaurants: ['Goblin Grotto', 'Pixie Pizzeria', 'Fairy Feasts'], foods: ['Elf-made Pizza', 'Pixie Pasta', 'Fey Fries'] },
    { id: 3, city: 'Austin', username: 'DragonDiner', restaurants: ['Fire & Flames Grill', 'Dragon Diner', 'Mythical Meats'], foods: ['Roasted Dragon Wings', 'Dragonfire Burger', 'Sorcerer Sushi'] },
    { id: 4, city: 'Austin', username: 'OceanEater', restaurants: ['Seashell Shack', 'Mermaid Cove', 'Neptune\'s Nook'], foods: ['Siren Sushi', 'Seaweed Salad', 'Deep Sea Delight'] },
    { id: 5, city: 'Austin', username: 'WizardNomad', restaurants: ['Magical Munchies', 'Wizard\'s Waffles', 'Spellbound Spuds'], foods: ['Potion Pancakes', 'Magic Mushrooms', 'Enchanted Entree'] },
    { id: 6, city: 'Austin', username: 'FeyFoodie', restaurants: ['Fairy Frolics Cafe', 'Fey Fountains', 'Pixie Palace'], foods: ['Unicorn Burger', 'Pixie Pie', 'Mystic Morsels'] },
    { id: 7, city: 'Austin', username: 'WitchyWanderer', restaurants: ['Broomstick Bistro', 'Witchs Ward', 'Cauldron Cuisine'], foods: ['Witch Brew Stew', 'Hexed Hamburgers', 'Spellbound Salad'] },
    { id: 8, city: 'Austin', username: 'GoblinGourmet', restaurants: ['Troll Tavern', 'Goblin Grill', 'Gnomish Galley'], foods: ['Goblin Goulash', 'Ogre Omelette', 'Fantasy Fajitas'] },
    { id: 9, city: 'Austin', username: 'VampVoracious', restaurants: ['Bat Bite Bites', 'Vampire Feast', 'Coffin Cafe'], foods: ['Vampire Velvet Cake', 'Blood Berry Smoothie', 'Fanged Frittata'] },
    { id: 10, city: 'Austin', username: 'WolfWanderer', restaurants: ['Howling Hut', 'Werewolf Way', 'Lunar Lodge'], foods: ['Moonlit Meatballs', 'Lunar Lasagna', 'Nightfall Noodles'] },
    { id: 11, city: 'Austin', username: 'GhostGourmet', restaurants: ['Spectral Spooks Diner', 'Ghostly Grub', 'Phantom Feast'], foods: ['Phantom Fries', 'Ectoplasmic Eclair', 'Spectral Soup'] },
    { id: 12, city: 'Austin', username: 'ZombieNomNom', restaurants: ['Brain Buffet', 'Zombie Zone Cafe', 'Rotten Restaurant'], foods: ['Zombie Ziti', 'Decayed Donuts', 'Ghastly Grains'] },
    { id: 13, city: 'Austin', username: 'UnicornFeast', restaurants: ['Rainbow Retreat', 'Unicorn Cafe', 'Pegasus Pub'], foods: ['Magic Muffins', 'Rainbow Rolls', 'Unicorn Udon'] },
    { id: 14, city: 'Austin', username: 'LuckyLuncher', restaurants: ['Leprechaun Lounge', 'Shamrock Shack', 'Pot of Gold Grille'], foods: ['Lucky Lasagna', 'Shamrock Stew', 'Leprechaun Linguine'] },
    { id: 15, city: 'Austin', username: 'FableFeaster', restaurants: ['Storybook Cafe', 'Fairytale Feasts', 'Wonderland Diner'], foods: ['Fairytale Fajitas', 'Wonderful Waffles', 'Magical Macarons'] },
  ];

  // Use state to hold quest data
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    // Set sample data after component mounts
    setQuests(sampleData);
  }, []);

  return (
    <div>
    <h1 style={{ fontFamily: "Mystery Quest", color: "#065446", textAlign: "center", fontSize: "30px" }}>Quests for Austin</h1>
      <CardContainer>
        {quests.map((quest) => (
          <Card key={quest.id}>
            <CardTitle>{quest.city}</CardTitle>
            <Username>@{quest.username}</Username> {/* Added username here */}
            <CardDescription>
              <Column>
                <Header>Restaurant</Header>
                {quest.restaurants.map((restaurant, index) => (
                  <div key={index}>
                    <label>
                      <CheckBox type="checkbox" />
                      {restaurant}
                    </label>
                  </div>
                ))}
              </Column>
              <Column>
                <Header>Food</Header>
                {quest.foods.map((food, index) => (
                  <div key={index}>{food}</div>
                ))}
              </Column>
            </CardDescription>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default SearchResults;