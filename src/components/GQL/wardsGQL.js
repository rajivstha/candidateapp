import gql from 'graphql-tag';


export const wards = gql`
  query wards(
    $skip: Int!
    $limit: Int!
    $localBodyID: String
  ) {
    wards(
      skip: $skip, 
      limit: $limit,
      localBodyID: $localBodyID
    ){
        _id
        label
        enLabel
    }
  }
`;

