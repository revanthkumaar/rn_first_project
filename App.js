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
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals/Tasks"
          style={styles.input}
        />
        <Button title="ADD"/>
      </View>
      <View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  },
  inputContainer: {flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  input: {width:'80%',borderColor:'black',borderWidth:1,padding:10}
});

export default App;


