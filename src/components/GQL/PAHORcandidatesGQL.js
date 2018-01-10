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
          establishedYear
        }
        candidatePost {
          _id
          label
          enLabel
          candidateCountLimit
          locationLabel
        }
      }
      houseOfRepresentativeCandidates {
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
          establishedYear
        }
        candidatePost {
          _id
          label
          enLabel
          candidateCountLimit
          locationLabel
        }
      }
    }
  }
`;