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
		candidateType
		totalVotes
		totalValidVote
		y_postNp
		y_postEn
		y_genderNp
		y_genderEn
		y_politicalPartyID
		x_politicalPartyName
		x_politicalPartyNameEng
		constitutionalAreaEn
		constitutionalAreaNp
      }
      houseOfRepresentativeCandidates {
		_id
		label
		enLabel
		electedStatus
		age
		candidateType
		totalVotes
		totalValidVote
		y_postNp
		y_postEn
		y_genderNp
		y_genderEn
		y_politicalPartyID
		x_politicalPartyName
		x_politicalPartyNameEng
		constitutionalAreaEn
		constitutionalAreaNp
      }
    }
  }
`;