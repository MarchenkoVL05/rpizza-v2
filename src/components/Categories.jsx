import React from 'react'

export default function Categories() {
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {
          categories.map((category, index) => {
            return <li key={index} className={index == categoryIndex ? 'active' : ''} onClick={() => setCategoryIndex(index)}>{category}</li>
          })
        }
      </ul>
    </div>
  )
}
