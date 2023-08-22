import React, { Suspense } from 'react';
const BillingChart = React.lazy(() => import('../Dashboard/billing/billing'));
const Liveprice = React.lazy(() => import('./liveprice'));

export default function billingdata() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BillingChart />
        <Liveprice />
      </Suspense>
    </>
  );
}
