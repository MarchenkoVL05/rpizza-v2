import React from 'react';

type categoriesPrors = {
  onClickCategory: (index: number) => void;
  value: number;
};

const Categories: React.FC<categoriesPrors> = ({ onClickCategory, value }) => {
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
};

export default Categories;
