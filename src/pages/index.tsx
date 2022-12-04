import React from 'react';
import { SCsomething } from './styles';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return <div>This is homepage second</div>;
};

HomePage.getLayout = page => {
  return <SCsomething>{page}</SCsomething>;
};
export default HomePage;
