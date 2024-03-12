// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { BsStarFill } from 'react-icons/bs'; 
// import oldPaper from '../imgs/old-paper.jpeg';

// function Dashboard() {
//     // Sample data for saved quests
//     const savedQuests = [
//         { id: 1, title: 'Quest 1', description: 'Description for Quest 1' },
//         { id: 2, title: 'Quest 2', description: 'Description for Quest 2' },
//         { id: 3, title: 'Quest 3', description: 'Description for Quest 3' },
//         // Add more saved quests as needed
//     ];

//     return (
//         <Container>
//             <h2 className="my-4 text-center">My Quests</h2>
//             <Row xs={1} md={3} lg={4} xl={5} className="g-4">
//                 {savedQuests.map((quest) => (
//                     <Col key={quest.id}>
//                         <Card style={{ 
//                             position: 'relative', 
//                             backgroundImage: `url(${oldPaper})`, 
//                             backgroundSize: 'cover', 
//                             backgroundRepeat: 'no-repeat' 
//                             }}>
//                             {/* Star icon at the top right */}
//                             <BsStarFill style={{
//                                 position: 'absolute',
//                                 top: '10px',
//                                 right: '10px',
//                                 color: 'gold', // Adjust color as needed
//                                 fontSize: '24px', // Adjust size as needed
//                                 zIndex: '999', // Ensure the icon stays above other content
//                             }} />
//                             <Card.Body>
//                                 <Card.Title>{quest.title}</Card.Title>
//                                 <Card.Text>{quest.description}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Dashboard;


import React from 'react';
import { Container, Carousel } from 'react-bootstrap'; // Import Carousel component
import { BsStarFill } from 'react-icons/bs'; 
import oldPaper from '../imgs/old-paper.jpeg'; 

function Dashboard() {
    // Sample data for saved quests
    const savedQuests = [
        { id: 1, title: 'Quest 1', description: 'Description for Quest 1' },
        { id: 2, title: 'Quest 2', description: 'Description for Quest 2' },
        { id: 3, title: 'Quest 3', description: 'Description for Quest 3' },
        // Add more saved quests as needed
    ];

    // Sample data for own quests
    const ownQuests = [
        { id: 1, title: 'My Quest 1', description: 'Description for My Quest 1' },
        { id: 2, title: 'My Quest 2', description: 'Description for My Quest 2' },
        { id: 3, title: 'My Quest 3', description: 'Description for My Quest 3' },
        // Add more own quests as needed
    ];

    return (
        <Container>
            <h2 className="my-4 text-center">Saved Quests</h2>
            <Carousel>
                {savedQuests.map((quest) => (
                    <Carousel.Item key={quest.id}>
                        <div style={{ 
                            position: 'relative', 
                            backgroundImage: `url(${oldPaper})`, 
                            backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat',
                            height: '300px' // Set height as needed
                            }}>
                            {/* Star icon at the top right */}
                            <BsStarFill style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                color: 'gold', // Adjust color as needed
                                fontSize: '24px', // Adjust size as needed
                                zIndex: '999', // Ensure the icon stays above other content
                            }} />
                            <div className="carousel-caption">
                                <h3>{quest.title}</h3>
                                <p>{quest.description}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <h2 className="my-4 text-center">My Own Quests</h2>
            <Carousel>
                {ownQuests.map((quest) => (
                    <Carousel.Item key={quest.id}>
                        <div style={{ 
                            position: 'relative', 
                            backgroundImage: `url(${oldPaper})`, 
                            backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat',
                            height: '300px' // Set height as needed
                            }}>
                            {/* Star icon at the top right */}
                            <BsStarFill style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                color: 'gold', // Adjust color as needed
                                fontSize: '24px', // Adjust size as needed
                                zIndex: '999', // Ensure the icon stays above other content
                            }} />
                            <div className="carousel-caption">
                                <h3>{quest.title}</h3>
                                <p>{quest.description}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Dashboard;