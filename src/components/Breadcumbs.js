import React from 'react'
import { View,StyleSheet,Text} from 'react-native'

const Breadcumbs = () => {
return(
    <View style={styles.container}>
  <Text style={styles.breadcumbText}>31 of 50</Text>
    </View>
)
}

const styles= StyleSheet.create({
    breadcumbText:{
textAlign:'center',
color: 'darkgray',
fontWeight: '700',
fontSize:18,
    },
    container:{
        padding:20,
    }
})
export default Breadcumbs