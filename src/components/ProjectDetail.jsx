import React from 'react';
import { useParams } from 'react-router-dom';
import FindMyPark from './FindMyPark';
import HomerStCafe from './HomerStCafe';
import LightWinsDark from './LightWinsDark';
import SaveEnergy from './SaveEnergy';

const ProjectDetail = () => {
  const { id } = useParams();

  if (id === '1') return <FindMyPark />;
  if (id === '2') return <LightWinsDark />;
  if (id === '3') return <HomerStCafe />;
  if (id === '4') return <SaveEnergy />;

  return <div style={{ padding: '4rem', textAlign: 'center' }}>Project Not Found</div>;
};

export default ProjectDetail;
