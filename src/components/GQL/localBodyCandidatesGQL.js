import gql from 'graphql-tag';
const candidateFieldsFragment = gql`
  fragment candidateFieldsFragment on Candidate {
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


