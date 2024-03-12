import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query users($username: String!) {
    user(username: $username) {
      user_id
      username
      email
    }
  }
`;

export const QUERY_CARD = gql`
  query questCard(quest_id: $questId) {
      description
      questLocation
      questName
      username
    }
  }
`;

export const QUERY_QUEST = gql`
  query quest(quest_id: $questId) {
      questDescription
      questName
      quest_id
      quest_log_id
    }
  }  
`;

export const QUERY_SINGLE_ITEM = gql`
  query questItem(quest_item_id: $questItemId) {
      itemName
      quest_id
      quest_item_id
    }
  } 
`;
//explore this query and see if we need to do so by quest_id to find all items for a specific quest. 
export const QUERY_ITEMS = gql`
  questItems {
      itemName
      quest_id
      quest_item_id
    }
  }
`