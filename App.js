import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
    <Text style={styles.welcome}>WELCOME TO LIMKOKWING STUDENT PORTAL</Text>
    <View style={styles.main}>
    <View style={styles.details}>
       <Image style={styles.img} source={require('./assets/dp.jpg')}/>
       <Text style={styles.name}>THABISO KHOBOTLE</Text>
       <Text style={styles.id}>St.ID: 901013587</Text>
    </View> 
    <View style={styles.course}>
        <Text style={styles.BSSM}>Bsc.SOFTWARE ENGINEERING WITH MULTIMEDIA</Text>
      </View>
    <View style={styles.y2s2}>
      <Text style={styles.year2}>
        <Text style={styles.s2 }>Year 2 semester 2                                                                                     </Text>
        Database System:................................................................................ B
        C++ Programming II:......................................................................... A-
        Software Modelling and Analysis:..................................................... C
        Mobile Device Programming:.......................................................... A+
        Probability and Statistics:................................................................... B
        Java Programming I:........................................................................... B
      </Text>
    </View>
    <View style={styles.y2s2}>
      <Text style={styles.year2}>
        <Text style={styles.s2 }>Year 2 semester 1                                                                                     </Text>
        Calculus II:............................................................................................ B
        C++ Programming I:.......................................................................... A-
        Principles of Software:....................................................................... C
        Data Communication:....................................................................... A+
        Internet Technology:.......................................................................... B
        Web Design:........................................................................................ B
      </Text>
    </View>
    <ScrollView style={styles.y2s2}>
      <Text style={styles.year2}>
        <Text style={styles.s2 }>Year 1 semester 2                                                                                     </Text>
        Intro Digital Imaging:............................................................................................ B
        Intro Digital Graphics:..................................................................... A-
        Calculus I:............................................................. C
        Intro Data Communication:............................................................... A+
        Intro Multimedia:....................................................................... B
        Intro Database:............................................................................... B 
      </Text>
    </ScrollView>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding:5,
    width:'100%',
    height:'100%',
  },
  welcome:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
       },
  main:{
    backgroundColor:'#666',
    width:'95%',
    height:'90%',
  },
  details:{
    backgroundColor:'black',
    marginTop:5,
    marginLeft:5,
    flexDirection:'row',
    width:'98%',
    justifyContent:'space-between',
    height:'8.5%',
    padding:7,
  },
  y2s2:{
    backgroundColor:'black',
    margin:5,
    width:'98%',
    height:'35%',
  },
  year2:{
    textAlignVertical:'top',
    flexDirection:'column',
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    padding:6,
    alignContent:'flex-start',
  },
  s2:{
    fontWeight:'bold',
    color:'white'
  },
  img:{
    width:50,
    height:47,
    marginLeft:10,
    borderRadius:'50%',
    alignItems:'flex-start',
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    marginTop:10,
    alignItems:'center',
  },
  id:{
    fontSize:20,
    marginTop:10,
    marginRight:10,
    fontWeight:'bold',
    color:'white',
    alignItems:'center',
  },
  course:{
    backgroundColor:'black',
    marginLeft:5,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    width:'98%',
    height:'5%',
  },
  BSSM:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    alignItems:'center',
  },

});
