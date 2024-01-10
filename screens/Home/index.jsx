import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import Svg, { Path } from "react-native-svg";
import SvgComponent from "../../assets/basket";

const OPTIONS = [
  {
    id: 0,
    content: "Yiyecek",
  },
  {
    id: 1,
    content: "İçecek",
  },
  {
    id: 2,
    content: "Yiyecek",
  },
  {
    id: 3,
    content: "Yiyecek",
  },
  {
    id: 4,
    content: "Yiyecek",
  },
  {
    id: 5,
    content: "Yiyecek",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 24 }}>
        <View
          style={{
            marginTop: 18,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 18,
          }}
        >
          <Text>Masa No:1764HJ</Text>
          <Text>
            <SvgComponent />
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#d9d9d9",
            paddingVertical: 12,
            borderRadius: 8,
            marginBottom: 24,
          }}
        >
          <Button
            title="Garson Çağır"
            color="#000"
            accessibilityLabel="Garson cagirma butonu"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {OPTIONS.map((option) => (
            <View
              style={{
                backgroundColor: "#d9d9d9",
                width: "48%",
                height: 160,
                marginBottom: 24,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{option.content}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
