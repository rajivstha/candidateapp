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


export const wardCandidates = gql`
  query (
    $skip:Int = 0
    $limit:Int = 20
    $wardID: String
  ){
    candidates(
      skip: $skip,
      limit: $limit,
      wardID: $wardID,
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


