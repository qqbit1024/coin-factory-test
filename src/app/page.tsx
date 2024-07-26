import React from 'react';
import PurchaseForm from './components/PurchaseForm';
import Banner from './components/Banner';

const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <PurchaseForm />
    </>
  );
};

export default HomePage;
