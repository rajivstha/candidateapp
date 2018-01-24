import gql from 'graphql-tag';
export const geoQuery = gql`
    query geoLocate(
        $location: LocationInput!
    ) {
        geoLocate(
            location: $location
        ){
            province {
                _id
                enLabel
            }
            district {
                _id
                enLabel
            }
            localBody {
                _id
                enLabel
            }
        }
    }
`;