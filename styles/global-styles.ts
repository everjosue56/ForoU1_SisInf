import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
 
 

export const globalStyles = StyleSheet.create({
        background : {
          backgroundColor: Colors.timberWalft,
          flex: 1,
        },
 
        colorText : {
          textAlign : 'center',
          marginTop: 80,
          fontFamily : 'NotoSans',
          fontSize : 40,
          color: Colors.white
        },

        title : {
          textAlign : 'center',
          marginTop: 60,
          fontFamily : 'NotoSans',
          fontSize : 30,
          color: Colors.white,
          padding : 20,
          fontWeight: "bold",
          letterSpacing: 2,
         
        },
        subTitle : {
            color : Colors.gray,
            padding : 10,
            fontWeight: "bold",
            textAlign : 'center',
            fontFamily : 'NotoSans',
            fontSize : 20,
            marginTop : 10
            
            
        },
        viewTitle : {
          backgroundColor : Colors.gray,
          borderBottomColor: Colors.white,
          paddingVertical: 15,
          elevation: 5,
        },
        container: {
          alignItems: "center",
          
        },
        button: {
          width: "80%",
          padding: 15,
          backgroundColor: Colors.black,
          borderRadius: 10,
          alignItems: "center",
        },
        buttonText: {
          color: "#FFF",
          fontSize: 18,
          fontWeight: "bold",
        },
        modalContainer: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        modalContent: {
          width: "80%",
          backgroundColor: "#FFF",
          padding: 20,
          borderRadius: 10,
          alignItems: "center",
        },
        modalTitle: {
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        },
        currencyItem: {
          padding: 15,
          width: "100%",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#DDD",
        },
        currencyText: {
          fontSize: 18,
        },
        closeButton: {
          marginTop: 15,
          padding: 10,
          backgroundColor: "#E74C3C",
          borderRadius: 5,
        },
        closeButtonText: {
          color: "#FFF",
          fontSize: 16,
        },
        input: {
          width: "90%",
          height: 60,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: 20,
          fontSize: 18,
          backgroundColor: "white",
          alignSelf: "center",
         
        },

        result : {
          textAlign : 'center',
          marginTop: 20,
          fontFamily : 'NotoSans',
          fontSize : 20,
          color: Colors.white,
          padding : 20,
          fontWeight: "bold",
          letterSpacing: 1,      
        },

        containerResult : {
          backgroundColor : Colors.gray,
          marginTop : 20 
        },

        buttonConvertor : {
          width: "80%",
          padding: 15,
          backgroundColor: Colors.black,
          borderRadius: 10,
          alignItems: "center",
          marginTop : 20,
          marginLeft : 40
        }


})

 