
import React, { useState, useEffect } from 'react';
import { Container, Carousel, Button } from 'react-bootstrap'; 
import { BsStarFill } from 'react-icons/bs'; 
import oldPaper from '../imgs/old-paper.jpeg'; 

function Dashboard() {
    // Initialize saved quests state
    const [savedQuests, setSavedQuests] = useState([]);

    // Load saved quests from local storage when component mounts
    useEffect(() => {
        const savedQuestsFromStorage = JSON.parse(localStorage.getItem('savedQuests')) || [];
        setSavedQuests(savedQuestsFromStorage);
    }, []);

   
    const clearSavedQuests = () => {
        localStorage.removeItem('savedQuests');
        setSavedQuests([]); 
    };

    return (
        <Container>
            <h2 className="my-4 text-center">My Quests</h2>
            <Carousel>
                {savedQuests.map((quest, index) => (
                    <Carousel.Item key={index}>
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
                                <h3>{quest.title}</h3>
                                <p>{quest.description}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="text-center my-4">
                <Button variant="danger" onClick={clearSavedQuests}>Clear Saved Quests</Button>
            </div>
        </Container>
    );
}

export default Dashboard;