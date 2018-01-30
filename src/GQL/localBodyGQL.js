import gql from 'graphql-tag';

export const localBody = gql`
  query localBody(
    $_id: String!
  ) {
    localBody(
      _id: $_id
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
        wards {
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
        province {
            _id
            label
            enLabel
        }
        district {
            _id
            label
            enLabel
        }
    }
  }
`;


