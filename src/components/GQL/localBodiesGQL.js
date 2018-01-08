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
        }
    }
  }
`;