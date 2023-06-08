import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import axios from 'axios';

const Receive = () => {
  const [qrData, setQrData] = React.useState('abc')

  React.useEffect(() => {
    axios.get("https://dapp-eallet-deploy1.vercel.app/api/getAddress").then((res) => {
      setQrData(res.data.address);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <View style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
      <QRCode
        value={qrData}
        size={200}
      />
      <Text style={{fontSize: 20, marginTop: 20}}>Scan this QR code to receive funds</Text>
    </View>
  );
};

export default Receive;
