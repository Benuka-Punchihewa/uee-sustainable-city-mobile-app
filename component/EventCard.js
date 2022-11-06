import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import constants from "../constants";

const language = "SIN";

const EventCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg",
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text numberOfLines={2} style={styles.eventTitle}>
          Let's Get Together And Clean Unawatuna Let's Get Together And Clean
          Unawatuna
        </Text>

        <Text style={styles.daysLeft}>
          {language === constants.LANGUAGES.ENGLISH ? (
            <>On 12th Oct 2022</>
          ) : (
            <>2022 ඔක්‌තෝබර් 12 වැනිදා</>
          )}
        </Text>
        <Text style={styles.daysLeft}>
          {language === constants.LANGUAGES.ENGLISH ? (
            <>At Viharamahadewi Park</>
          ) : (
            <>ස්ථානය Viharamahadewi Park</>
          )}
        </Text>
        <Text style={styles.participate}>
          {language === constants.LANGUAGES.ENGLISH ? (
            <>20 People Participating</>
          ) : (
            <>20 දෙනෙකු සහභාගී වේ</>
          )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#D8F3DC",
    height: 150,
    width: "100%",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 10,
  },
  imgContainer: {
    flex: 2,
  },
  img: {
    height: 145,
    width: "100%",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  detailContainer: {
    flex: 3,
    padding: 8,
    justifyContent: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  daysLeft: {
    fontSize: 14,
  },
  goalContainer: {},
  progressContainer: {
    flexDirection: "row",
  },
  progressBarContainer: {
    flex: 8,
    justifyContent: "center",
  },
  progressPercentage: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
    fontSize: 11,
    paddingLeft: 5,
  },
  participate: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EventCard;
