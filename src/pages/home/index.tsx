import NavBar from 'components/layout/navbar';
import HomeItem from 'components/pageComponents/home';
import * as React from 'react';

export interface  HomePageProps {
}

export default function HomePage (props:  HomePageProps) {
  return (
    <div>
      <NavBar/>
      <HomeItem/>
    </div>
  );
}
