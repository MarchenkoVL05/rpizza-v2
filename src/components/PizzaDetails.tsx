import React from 'react';
import { useParams } from 'react-router-dom';

import jdun from '../assets/images/jdun.png';

const PizzaDetails: React.FC = () => {
  const params = useParams();
  // console.log(params);
  return (
    <>
      <div className='pizza-details'>
        <img
          className='pizza-details__img'
          src={jdun}
          alt='page is under development'
        />
      </div>
      <h1 className='pizza-details__header'>
        Страница находится в разработке...
      </h1>
    </>
  );
};

export default PizzaDetails;
