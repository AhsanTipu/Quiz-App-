import React from 'react'
import { TouchableOpacity,View,StyleSheet,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NextBtn = () => {
return(
    <View  >
<LinearGradient colors={['#f7a23e', '#d92a56']}  useAngle={true} angle={100} style={{borderRadius:10}}>
  <TouchableOpacity style={styles.Buttonback}>
<Text style={styles.BackText}>Next</Text>
  </TouchableOpacity>
  </LinearGradient>
  </View>
)
}

const styles= StyleSheet.create({
   BackText:{
fontWeight:'600',
color: "white",
fontSize:18,
textAlign:'center'
   },
   Buttonback:{
    borderRadius:10,
    paddingLeft:40,
    paddingRight:40,
    paddingTop:15,
    paddingBottom:15,
   
   }
})
export default NextBtn