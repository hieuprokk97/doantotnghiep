import { StyleSheet } from "react-native";

const styleProfile = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "white",
        paddingHorizontal: 30,
    },
    profileInfos: {
        paddingVertical: 20, 
        flexDirection: "row",
    },
    image: {
        width: 120, 
        height: 120, 
        borderRadius: 60, 
        borderColor: "#dddddd",
        borderWidth: 1, 
        backgroundColor: "#dcdcdc"
    },
    nameSection: {
        marginLeft: 10,
        alignItems: 'center',
        marginTop: 30
    },
    email: {
        fontSize: 10,
        fontWeight: 200,
        color: '#000'
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    menuWrapper: {
        marginTop: 10
    },
    menuItem: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: "center"
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },

})
export default styleProfile;
