import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './PaymentConfig';

export default function Payment() {
    let checkout = new KhaltiCheckout(config);
  return (
    <div>
        <button onClick={()=>checkout.show({amount: 1000})} className='btn'>Payment</button>
    </div>
  )
}
