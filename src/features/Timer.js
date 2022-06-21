import React, {useState} from "react";
import {View,StyleSheet,Text,Vibration} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake';
import {Countdown} from '../components/CountDown';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';
import {colors} from '../utils/colors';
import {Timing} from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
  ];

export const Timer = ({focusSubject,clearSubject, onTimerEnd}) => {
  useKeepAwake();

  const [isStarted,setIsStarted] = useState(false);
  const [progress,setProgress] = useState(1);
  const [minutes,setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    //setMinutes();
    reset();
    onTimerEnd(focusSubject);
  };

  return (
      <View style={styles.container}>
        <View style={styles.countdown}>
          <Countdown
            minutes = {minutes}
            onProgress = {(progress) => {setProgress(progress)}}
            isPaused={!isStarted}
            onEnd = {onEnd}
          />
          <View style={{paddingTop:spacing.xxl}}>
            <Text style={styles.title}>Focusing On:</Text> 
            <Text style={styles.task}>{focusSubject}</Text> 
          </View>
        </View>
        <View style={{paddingTop:spacing.sm}}>
          <ProgressBar color={colors.progressBar} progress={progress} style={{height:spacing.sm}} />
        </View>

        <View style={styles.timingWrapper}>
          <Timing onChangeTime={setMinutes}/>
        </View>

        <View style={styles.buttonWrapper}>
          {!isStarted &&  <RoundedButton title="Start" onPress={()=>setIsStarted(true)} ></RoundedButton>}

          {isStarted &&  <RoundedButton title="Pause" onPress={()=>setIsStarted(false)} ></RoundedButton>}
            
        </View>

      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} ></RoundedButton>
      </View>
      </View>
  )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:'green',
  },
  countdown:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'yellow'
  },
  timingWrapper: {
    flex:0.1,
    paddingTop:spacing.xxl,
    flexDirection:'row',
  },
  buttonWrapper: {
    flex:0.3,
    flexDirection:'row',
    padding:spacing.md,
    justifyContent:'center',
    alignItems:'center',
    /*backgroundColor:"yellow"*/
  },
  clearSubjectWrapper:{
    flexDirection:'row',
    padding:spacing.md,
    justifyContent:'center',
  },
  title:{
    color:colors.white,
    textAlign:"center",
  },
  task:{
    color:colors.white,
    textAlign:"center",
  }

})