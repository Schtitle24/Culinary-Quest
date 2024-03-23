import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($user_id: Int!) {
    user(user_id: $user_id) {
      user_id
      username
      email
    }
  }
`;

export const QUERY_QUESTS = gql`
  query quests {
    quests {
      quest_id
      questName
      questDescription
      quest_log_id
      quest_location_id
    }
  }
`;

export const QUERY_QUEST_ITEMS = gql`
  query questItems($quest_id: Int!) {
    questItems(quest_id: $quest_id) {
      quest_item_id
      itemName
      quest_id
    }
  }
`;

export const QUERY_QUEST_CARD = gql`
  query questCard($city: String!) {
    questCard(city: $city) {
      username
      questName
      quest_location
      description
    }
  }
`;

export const QUERY_SINGLE_ITEM = gql`
  query questItem($quest_item_id: Int!) {
    questItem(quest_item_id: $quest_item_id) {
      quest_item_id
      itemName
      quest_id
    }
  }
`;

export const QUERY_LOG = gql`
  query questLog($quest_log_id: Int!) {
    questLog(quest_log_id: $quest_log_id) {
      quest_log_id
      user_id
      completionDate
    }
  }
`;

export const QUERY_LOCATION = gql`
  query questLocation($quest_location_id: Int!) {
    questLocation(quest_location_id: $quest_location_id) {
      quest_location_id
      quest_location
    }
  }
`;

export const QUERY_JUNCTION = gql`
  query questJunction($quest_id: Int!, $quest_location_id: Int!) {
    questJunction(quest_id: $quest_id, quest_location_id: $quest_location_id) {
      quest_id
      quest_location_id
    }
  }
`;