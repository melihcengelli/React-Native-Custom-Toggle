import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const Toggle = ({toggleState,toggleFunction,toggleSize,toggleCircleMarginLeft,toggleCircleMarginRight,toggleOnColor,toggleOffColor,toggleShape,toggleSign,toggleCircleColor}) => {
    // Toggle states comes from parent components through props.
    const initialState = toggleState;
    const [circleSitu,setCircleSitu] = useState(initialState);

    // Toggle mode changes if toggle states changes.
    useEffect(() => {
        if (toggleState!==undefined){
            setCircleSitu(toggleState)
        }
    }, [toggleState])
    
    // Default Style Values
    const toggleWidth = 65;
    const toggleHeight = 35;
    const circleMarginLeft = 3;
    const circleMarginRight = 3;
    
    
    // Handling toggle situation.
    const handleToggle = () => {
        setCircleSitu(!circleSitu);
        if (toggleFunction!==undefined){
            toggleFunction();
        }
    }

    const styles = StyleSheet.create({
        container:{
            width:toggleSize!==undefined ? (toggleSize/3)*2 : toggleWidth,
            height:toggleSize!==undefined ? (toggleSize/3)*1 : toggleHeight,
            backgroundColor:'transparent',
        },
        circlecontaineroneTrue:{
            flexDirection:'row',
            width:'100%',
            height:'100%',
            backgroundColor:toggleOnColor!==undefined ? toggleOnColor : 'rgba(0,153,76,1)',
            justifyContent:'flex-end',
            borderRadius:100,
            alignItems:'center',
            textAlign:'center',
        },
        circlecontaineroneFalse:{
            flexDirection:'row',
            width:'100%',
            height:'100%',
            backgroundColor:toggleOffColor!==undefined ? toggleOffColor : 'rgba(200,200,200,1)',
            justifyContent:'flex-start',
            borderRadius:100,
            alignItems:'center',
            textAlign:'center',
        },
        circlecontainerTrue:{
            flexDirection:'row',
            width:'100%',
            height:'100%',
            backgroundColor:toggleOnColor!==undefined ? toggleOnColor : 'rgba(0,153,76,1)',
            justifyContent:'flex-end',
            borderRadius:100,
            alignItems:'center',
            textAlign:'center',

        },
        circlecontainerFalse:{
            flexDirection:'row',
            width:'100%',
            height:'100%',
            backgroundColor:toggleOffColor!==undefined ? toggleOffColor : 'rgba(200,200,200,1)',
            justifyContent:'flex-start',
            borderRadius:100,
            alignItems:'center',
            textAlign:'center',
        },
        circleFalse:{
            height:'90%',
            width:'50%',
            backgroundColor:toggleCircleColor!==undefined ? toggleCircleColor : "white",
            borderRadius:100,
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center',
            marginLeft:toggleCircleMarginLeft!==undefined ? toggleCircleMarginLeft : circleMarginLeft,
        },
        circleTrue:{
            height:'90%',
            width:'45%',
            backgroundColor:toggleCircleColor!==undefined ? toggleCircleColor : "white",
            borderRadius:100,
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center',
            marginRight: toggleCircleMarginRight!==undefined ? toggleCircleMarginRight : circleMarginRight,

        },
    })

    const stylesRectangle = StyleSheet.create({
        container:{
            width:toggleSize!==undefined ? (toggleSize/3)*2 : toggleWidth,
            height:toggleSize!==undefined ? (toggleSize/3)*1 : toggleHeight,
            backgroundColor:'transparent',
        },
        circlecontaineroneTrue:{
            flexDirection:'row',
            width:'100%',
            height:'100%',
            backgroundColor:toggleOnColor!==undefined ? toggleOnColor : 'rgba(0,153,76,1)',
            justifyContent:'flex-end',
            borderRadius:10,
            alignItems:'center',
            textAlign:'center',
        },
        circlecontaineroneFalse:{
            flexDirection:'row',
            width:'100%',
            height:'100%',
            backgroundColor:toggleOffColor!==undefined ? toggleOffColor : 'rgba(200,200,200,1)',
            justifyContent:'flex-start',
            borderRadius:10,
            alignItems:'center',
            textAlign:'center',
        },
        circlecontainerTrue:{
            flexDirection:'row',
            width:'100%',
            height:'100%',
            backgroundColor:toggleOnColor!==undefined ? toggleOnColor : 'rgba(0,153,76,1)',
            justifyContent:'flex-end',
            borderRadius:10,
            alignItems:'center',
            textAlign:'center',

        },
        circlecontainerFalse:{
            flexDirection:'row',
            width:'100%',
            height:'100%',
            backgroundColor:toggleOffColor!==undefined ? toggleOffColor : 'rgba(200,200,200,1)',
            justifyContent:'flex-start',
            borderRadius:10,
            alignItems:'center',
            textAlign:'center',
        },
        circleFalse:{
            height:'90%',
            width:'50%',
            backgroundColor:"white",
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center',
            marginLeft:toggleCircleMarginLeft!==undefined ? toggleCircleMarginLeft : circleMarginLeft,
            
        },
        circleTrue:{
            height:'90%',
            width:'45%',
            backgroundColor:"white",
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center',
            marginRight: toggleCircleMarginRight!==undefined ? toggleCircleMarginRight : circleMarginRight,

        },
    })


  return (
    <>
    {
        toggleShape!==undefined ?
            toggleShape=="circle" ?
                    <View style={styles.container} >
                        <TouchableWithoutFeedback style={circleSitu ? styles.circlecontaineroneTrue : styles.circlecontaineroneFalse} onPress={() => handleToggle()}>
                            <View style={circleSitu==true ? styles.circlecontainerTrue : styles.circlecontainerFalse} >
                                <View style={circleSitu==true ? styles.circleTrue :styles.circleFalse} >
                                {
                                    circleSitu ? 
                                        toggleSign!==undefined ? 
                                            toggleSign==true ? 
                                                <Text style={{color:toggleOnColor!==undefined ? toggleOnColor : 'rgba(0,153,76,1)',fontSize:toggleSize!==undefined ? (toggleSize/7) : toggleWidth/4.5}}>I</Text>
                                            : 
                                                <Text></Text>  
                                        :
                                            <Text></Text>
                                    : 
                                        toggleSign!==undefined ? 
                                            toggleSign==true ? 
                                                <Text style={{color:toggleOffColor!==undefined ? toggleOffColor : 'rgba(200,200,200,1)',fontSize:toggleSize!==undefined ? (toggleSize/7) : toggleWidth/4.5}}>O</Text>
                                            : 
                                                <Text></Text>  
                                        :
                                            <Text></Text>
                                }

                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                : 
                    toggleShape=="rectangle" ? 
                        <View style={stylesRectangle.container} >
                            <TouchableWithoutFeedback style={circleSitu ? stylesRectangle.circlecontaineroneTrue : stylesRectangle.circlecontaineroneFalse} onPress={() => handleToggle()}>
                                <View style={circleSitu==true ? stylesRectangle.circlecontainerTrue : stylesRectangle.circlecontainerFalse} >
                                    <View style={circleSitu==true ? stylesRectangle.circleTrue :stylesRectangle.circleFalse} >
                                        {
                                            circleSitu ? 
                                                toggleSign!==undefined ? 
                                                    toggleSign==true ? 
                                                        <Text style={{color:toggleOnColor!==undefined ? toggleOnColor : 'rgba(0,153,76,1)',fontSize:toggleSize!==undefined ? (toggleSize/7) : toggleWidth/4.5}}>I</Text>
                                                    : 
                                                        <Text></Text>  
                                                :
                                                    <Text></Text>
                                            : 
                                                toggleSign!==undefined ? 
                                                    toggleSign==true ? 
                                                        <Text style={{color:toggleOffColor!==undefined ? toggleOffColor : 'rgba(200,200,200,1)',fontSize:toggleSize!==undefined ? (toggleSize/7) : toggleWidth/4.5}}>O</Text>
                                                    : 
                                                        <Text></Text>  
                                                :
                                                    <Text></Text>
                                        }
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    : <></>
        :
        <View style={styles.container} >
            <TouchableWithoutFeedback style={circleSitu ? styles.circlecontaineroneTrue : styles.circlecontaineroneFalse} onPress={() => handleToggle()}>
                <View style={circleSitu==true ? styles.circlecontainerTrue : styles.circlecontainerFalse} >
                    <View style={circleSitu==true ? styles.circleTrue :styles.circleFalse} >
                        {
                            circleSitu ? 
                                toggleSign!==undefined ? 
                                    toggleSign==true ? 
                                        <Text style={{color:toggleOnColor!==undefined ? toggleOnColor : 'rgba(0,153,76,1)',fontSize:toggleSize!==undefined ? (toggleSize/7) : toggleWidth/4.5}}>I</Text>
                                    : 
                                        <Text></Text>  
                                :
                                    <Text></Text>
                            : 
                                toggleSign!==undefined ? 
                                    toggleSign==true ? 
                                        <Text style={{color:toggleOffColor!==undefined ? toggleOffColor : 'rgba(200,200,200,1)',fontSize:toggleSize!==undefined ? (toggleSize/7) : toggleWidth/4.5}}>O</Text>
                                    : 
                                        <Text></Text>  
                                :
                                    <Text></Text>
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    }
    </>
    
  )
}

export default Toggle