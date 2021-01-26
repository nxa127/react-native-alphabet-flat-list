/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 19-9-3
 * Time: 下午9:25
 * Desc:
 */
import * as React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface IProps {
  title: string;
  height: number;
  active: boolean;
}

const SectionListItem: FC<IProps> = function (props) {
  return (
    <View style={[styles.sectionListItemContainer, { height: props.height }]}>
      <View
        style={[
          styles.sectionListItemWrapper,
          {
            backgroundColor: "transparent",
          },
        ]}
      >
        <Text
          style={[
            styles.sectionListItemText,
            {
              color: props.active ? "#cccccc" : "#999999",
            },
          ]}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default SectionListItem;
