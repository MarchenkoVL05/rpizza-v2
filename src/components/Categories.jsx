import React from 'react';

export default function Categories({ onClickCategory, value }) {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className={index == value ? 'active' : ''}
              onClick={() => onClickCategory(index)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
