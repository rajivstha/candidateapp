import gql from 'graphql-tag';
const candidateFieldsFragment = gql`
  fragment candidateFieldsFragment on Candidate {
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
        post
  }
`;


export const localBodyCandidates = gql`
  query (
    $skip:Int = 0
    $limit:Int = 20
    $localBodyID: String
  ){
    candidates(
      skip: $skip,
      limit: $limit,
      localBodyID: $localBodyID,
      returnPagedData: true
    ) {
      total
      items {
        ...candidateFieldsFragment
      }
      
    }
  }
  ${candidateFieldsFragment}
`;


