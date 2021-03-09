import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App(){
  return(
    <View style={{padding:50}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TextInput
          placeholder="Goals/Tasks"
          style={{borderColor:'black',borderWidth:1,padding:10}}
        />
        <Button title="ADD"/>
      </View>

      <View>

      </View>
    </View>


  );
}



const styles = StyleSheet.create({
  
});

export default App;
