import React, { Component } from "react";

import { Screen, Spinner, Examples } from "@shoutem/ui";
import { stringify as queryString } from "query-string";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class MapsExample extends Component {
  state = {
    mapRegion: null,
    gpsAccuracy: null,
  };
  watchID = null;

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 1.5,
        longitudeDelta: 0.00421 * 1.5,
      };

      this.onRegionChange(region, position.coords.accuracy);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange(region, gpsAccuracy) {
    this.fetchVenues(region);

    this.setState({
      mapRegion: region,
      gpsAccuracy: gpsAccuracy || this.state.gpsAccuracy,
    });
  }

  render() {
    const { mapRegion, lookingFor } = this.state;

    if (mapRegion) {
      return (
        <Screen>
          <Text>
            {mapRegion.latitude}, {mapRegion.longitude}
          </Text>
        </Screen>
      );
    } else {
      return (
        <Screen style={styles.centered}>
          <Spinner styleName="large" />
        </Screen>
      );
    }
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapHeader: {
    backgroundColor: "rgba(255, 255, 255, .7)",
    paddingTop: 20,
  },
});
