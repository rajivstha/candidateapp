import gql from 'graphql-tag';


export const constituencies = gql`
  query district(
    $id:String!
  ) {
    district(
      _id: $id
    ){
      constituencies {
        _id
        label
        districtID
      }
    }
  }
`;



