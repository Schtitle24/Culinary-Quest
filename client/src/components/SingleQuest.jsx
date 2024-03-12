import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CARD_BY_ID = gql`
  query GetCardById($id: ID!) {
    cardById(id: $id) {
      id
      title
      description
      imageUrl
    }
  }
`;

const SingleQuest = ({ match }) => {
  const { loading, error, data } = useQuery(GET_CARD_BY_ID, {
    variables: { id: match.params.cardId }, // Access card ID from match.params
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, description, imageUrl } = data.cardById;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="Card" />
    </div>
  );
};

export default SingleQuest;
