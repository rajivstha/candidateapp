import globalStyle from '../../assets/styles';

module.exports = {
itemListContainer:{
    backgroundColor: '#ccc',
    padding: 10,
    marginBottom: 1
},
listContentContainer: {
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10
},
listContent: {
    flexDirection: 'row',
    backgroundColor: globalStyle.UI.borderColor,
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 5,
    paddingTop: 5
},
partyIcon: {
    marginRight: 10,
    marginLeft: 7
},
name: {
    color: globalStyle.UI.neutralColor,
    marginTop: 7,
    fontWeight: 'bold'
},
designation: {
    color: globalStyle.UI.neutralColor,
    marginTop: 2,

    fontSize: 12
},
wardListContentContainer: {
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10
},
listTitleContainer: {
    flexDirection: 'row',
},
itemIconContainer: {
    marginRight: 10,
    marginTop: 3,
},
itemIcon: {
    color: globalStyle.UI.neutralColor
},
itemText: {
    color: globalStyle.UI.neutralColor,
    fontSize: 15
},
title: {
    paddingTop: 10,
    fontSize: 18,
    color: globalStyle.UI.neutralColor,
    fontWeight: 'bold'
},
breadCrumbTitle: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 18,
    color: globalStyle.UI.neutralColor,
    fontWeight: 'bold'
}
}