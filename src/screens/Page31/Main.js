
import React from 'react';
import { View,SafeAreaView,Image, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import CloseButton from '../../components/CloseButton';
import Breadcumbs from '../../components/Breadcumbs';
import Question from '../../components/Question';
import BackBtn from '../../components/BackBtn';
import NextBtn from '../../components/NextBtn';
import Choices from '../../components/Choices';
const Main = ()  => {

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
   <CloseButton />
<Breadcumbs />
<Question />

<Choices />
<View style={styles.column}>
<BackBtn />
<NextBtn />
</View>
</ScrollView>
    </SafeAreaView>
  )
};
const styles= StyleSheet.create({
    questionImage:{
        height:"50%",
        width:'100%',
        resizeMode:'contain'
    },
    container:{
        padding:30,
        flex:1
    },
    column:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:50,
        paddingBottom:30
    },
  
})
export default Main;
