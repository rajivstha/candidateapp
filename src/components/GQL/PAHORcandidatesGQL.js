import gql from 'graphql-tag';


export const PAHORcandidates = gql`
  query constituency(
    $id:String!
  ) {
    constituency(
      _id: $id
    ){
      provinceAssemblyCandidates {
        _id
        label
        enLabel
        electedStatus
        age
        politicalPartyID
        constitutionalArea
        candidateType
        symbolID
        ucStatus
        totalVotes
        totalValidVote
        candidateID
      }
      houseOfRepresentativeCandidates {
        _id
        label
        enLabel
        electedStatus
        age
        politicalPartyID
        constitutionalArea
        candidateType
        symbolID
        ucStatus
        totalVotes
        totalValidVote
        candidateID
      }
    }
  }
`;