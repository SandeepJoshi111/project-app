import { useNavigate } from "react-router-dom";
import myKey from "./PaymentKey";
import axios from "axios";

let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: "123766",
  productName: "Health Care Nepal",
  productUrl: "http://healthcarenepal.vercel.app/payments",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      let config = {
        headers: { Authorization: myKey.secretKey },
      };

      axios
        .post("https://khalti.com/api/v2/payment/verify/", data, config)
        
        .then((response) => {
          console.log(response.data);
          useNavigate("/");
          alert("Payment Successful");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
