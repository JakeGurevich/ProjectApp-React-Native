import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {List} from 'react-native-paper';

const MadrihScreen = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <List.Accordion
        title="קורסים פעילים"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Test" />
        <List.Item title="NETA test" />
      </List.Accordion>
      <List.Accordion
        title="קורסים לא פעילים"
        left={props => <List.Icon {...props} icon="folder" />}>
        {/* <List.Item title="First item" />
        <List.Item title="Second item" /> */}
      </List.Accordion>
    </View>
  );
};

export default MadrihScreen;
