import gql from 'graphql-tag';

const singleCandidateFieldsFragment = gql`
  fragment singleCandidateFieldsFragment on Candidate {
        _id
        label
        enLabel
        electedStatus
        post
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
`;


export const candidate = gql`
  query candidate(
    $_id:String!
  ) {
    candidate(
      _id:$_id
    ){
      ...singleCandidateFieldsFragment
    }
  }
  ${singleCandidateFieldsFragment}
`;