import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

function Diplomes() {
  return (
    <>
   <Timeline
    mode="alternate"
    items={[
      {
        children: "Baccalauréat STI2D Laon : 2016 - 2019",
        color : 'blue'
      },
      {
        children: 'DUT Informatique Amiens : 2019 - 2021',
        color: 'green',
      },
      {
         
        children: `Licence Pro RGI Amiens :  2021-2022`,
        color: 'green',
      },
      {
        children: 'Master MIAGE Amiens : 2022-2024 ',
        color: 'pink',
      },
    ]}
  />
  </>
  );
}

export default Diplomes;
