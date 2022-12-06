import React from 'react';
import {StyleSheet, Text, TouchableOpacity,View,Image} from 'react-native';
import Adresse from './fetchingData/ref';


export class AccueilConneted extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Image
                    source={{uri:'http://'+Adresse+'/test_album/Images/15.jpg'}}
                    style={styles.containerImage}
                />
               <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <View style={{position:"absolute",width:"100%",bottom:"70%",left:"35%",justifyContent:"center",alignItems:"center"}}>
                            <Image
                                source={{uri:'http://'+Adresse+'/test_album/Images/9.jpg'}}
                                style={{display:"flex",height:70, width:"23%", borderRadius:50,right:"35%",top:"15%",justifyContent:"center",alignItems:"center"}}
                            />
                             <Text style={{flex:1,position:"absolute",color:"#cad",letterSpacing:1, fontWeight:"bold",fontSize:18,display:"flex",top:85,right:"67%"}}>BENIN TOUR</Text>
                        </View>
               <TouchableOpacity 
                        style={{display:"flex",width:250,height:50,borderWidth:1,marginTop:"80%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:20,fontSize:18,bottom:25,borderColor:"#ffffff"}}
                        onPress={()=>this.props.navigation.navigate("Inscription")}
                        >
                                <Text style={{color:"#ffffff",letterSpacing:2, fontWeight:"bold",fontSize:18}}>S'INSCRIRE</Text>
                            </TouchableOpacity>
                <TouchableOpacity 
                    style={{width:250,height:50,display:"flex",elevation:1,justifyContent:"center",alignItems:"center",borderRadius:20,backgroundColor:"#ffffff",fontWeight:"bold"}}
                    onPress={()=>this.props.navigation.navigate("connecter")}
                >
                                <Text style={{color:"rgba(125,20,10,0.45)",fontWeight:"bold",letterSpacing:1,fontSize:18}}>SE CONNECTER</Text>
                </TouchableOpacity>
               </View>

            </View>
        )
    }
}


const styles=StyleSheet.create({
    containerImage:{position:"absolute",height:"100%", width:"100%",opacity:0.7},
})
export default AccueilConneted;