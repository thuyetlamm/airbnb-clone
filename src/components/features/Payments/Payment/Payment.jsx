import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';
import './Payment.scss';

const stripeTestPromise = loadStripe(process.env.REACT_APP_API_STRIPE);

export default function Payment() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
