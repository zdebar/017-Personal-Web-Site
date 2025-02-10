import React from 'react';
import Intro from "../components/Intro";
import ProjectList from '../components/ProjectList';
import BlogList from '../components/BlogList';

export default function HomePage () {
  return (
    <div>
      <Intro /> 
      <ProjectList />
      <BlogList />
    </div>
  );
};