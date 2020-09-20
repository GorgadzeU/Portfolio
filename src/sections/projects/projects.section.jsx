import React from 'react';
import './projects.styles.css';

import IMG from '../../assets/web.jpg';

import Card from '../../components/card/card.component';

const ProjectsSection = (props) => {
  return (
    <div className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='cards'>
        <Card img={IMG} title={'test project'} />
        <Card img={IMG} title={'test project'} />
        <Card img={IMG} title={'test project'} />
        <Card img={IMG} title={'test project'} />
        <Card img={IMG} title={'test project'} />
        <Card img={IMG} title={'test project'} />
        <Card img={IMG} title={'test project'} />
        <Card img={IMG} title={'test project'} />
      </div>
    </div>
  );
};

export default ProjectsSection;
