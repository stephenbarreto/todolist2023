import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface TaskCardProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function TaskCard({ title, onPress, ...rest }: TaskCardProps) {
  return (
    <TouchableOpacity style={styles.buttonTask} onPress={onPress}>
      <Text style={styles.textTask}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}