import React from 'react';
import Intro from "../components/Intro";
import CardList from "../components/CardList";
import BlogList from '../components/BlogList';

export default function HomePage () {
  return (
    <div>
      <Intro /> 
      <CardList />
      <BlogList />
    </div>
  );
};