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
        candidates {
            _id
            label
            enLabel
            electedStatus
            age
            candidateType
            y_postNp
            y_postEn
            y_genderNp
            y_genderEn
            y_politicalPartyID
            x_politicalPartyName
            x_politicalPartyNameEng
            totalVotes
            totalValidVote
      }
    }
  }
`;

