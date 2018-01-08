import gql from 'graphql-tag';

const provinceFieldsFragment = gql`
  fragment provinceFieldsFragment on Province {
    _id
    label
    enLabel
    districts {
      _id
      label
      enLabel
    }
  }
`;

export const provinces = gql`
  query{
    provinces(skip:0, limit:7) {
      ...provinceFieldsFragment
    }
  }
  ${provinceFieldsFragment}
`;
