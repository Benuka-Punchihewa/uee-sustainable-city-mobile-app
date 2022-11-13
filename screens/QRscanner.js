import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import languageQrScanner from "../language/language.qrScanner";
import { BarCodeScanner } from "expo-barcode-scanner";

const language = "SIN";

const QRscanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  //get access to camera
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  //read qr code data
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>
        {languageQrScanner.QR_SCANNER[language]}
      </Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  PageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
export default QRscanner;
