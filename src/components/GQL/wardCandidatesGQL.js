import gql from 'graphql-tag';
const wardCandidateFieldsFragment = gql`
  fragment wardCandidateFieldsFragment on Candidate {
      _id
      label
      enLabel
      electedStatus
      age
      constitutionalArea
      candidateType
      symbolID
      ucStatus
      totalVotes
      totalValidVote
      candidateID
      gender {
        _id
        label
        enLabel
      }
      politicalParty {
        _id
        label
        enLabel
      }
      candidatePost {
        _id
        label
        enLabel
      }
  }
`;


export const wardCandidates = gql`
  query (
    $skip:Int = 0
    $limit:Int = 50
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
        ...wardCandidateFieldsFragment
      }
    }
  }
  ${wardCandidateFieldsFragment}
`;


