/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState }  from 'react';
import { Text } from 'react-native';
import SInfo from 'react-native-sensitive-info';


function App()  {
  const [logText, setLogText] = useState('')
  async function runTest(){
    const options =  {
      sharedPreferencesName: 'exampleAppTest',
      keychainService: 'exampleAppTest',
    };
    let dbgText = '';
    dbgText += `setItem(key1, value1): ${await SInfo.setItem('key1', 'value1', options)}\n`;
    dbgText += `setItem(key2, value2): ${await SInfo.setItem('key2', 'value2', options)}\n`;
    dbgText += `setItem(key3, value3): ${await SInfo.setItem('key3', 'value3', options)}\n`;
    dbgText += `getItem(key2): ${await SInfo.getItem('key2', options)}\n`;
    dbgText += `delItem(key2): ${await SInfo.deleteItem('key2', options)}\n`;
    dbgText += `getAllItems():\n`
    const allItems = await SInfo.getAllItems(options);
    for (const key in allItems) {
      dbgText += ` - ${key} : ${allItems[key]}\n`;
    }
    setLogText(dbgText);
  };
  runTest();
  return (
    <>
     <Text>{logText}</Text>
    </>
  );
};

export default App;
