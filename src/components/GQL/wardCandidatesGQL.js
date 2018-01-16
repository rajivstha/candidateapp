import gql from 'graphql-tag';
const wardCandidateFieldsFragment = gql`
  fragment wardCandidateFieldsFragment on Candidate {
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


