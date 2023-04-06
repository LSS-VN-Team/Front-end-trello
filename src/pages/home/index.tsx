import NavBar from 'components/layout/navbar';
import HomeItem from 'components/pageComponents/home';
import * as React from 'react';

export interface  HomePageProps {
}

export default function HomePage (props:  HomePageProps) {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.reload()
  }
  return (
    <div className='h-full w-full'>
      <NavBar/>
      <HomeItem/>
    </div>
  );
}
