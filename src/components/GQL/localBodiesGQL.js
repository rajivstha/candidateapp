import gql from 'graphql-tag';

export const localBodies = gql`
  query localBodies(
    $skip:Int!
    $limit:Int!
    $returnPagedData:Boolean = false
    $districtID:String
  ) {
    localBodies(
      skip: $skip, 
      limit: $limit,
      returnPagedData: $returnPagedData
      districtID: $districtID
    ){
        total
        items {
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
  }
`;