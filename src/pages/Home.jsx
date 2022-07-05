import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

import { setCategoryIndex } from '../redux/slices/categorySlice';

import { SearchContext } from '../App.js';

function Home() {
  const { searchValue } = React.useContext(SearchContext);

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [optionActive, setOptionActive] = React.useState({
    name: 'Популярности',
    sortProperty: 'rating',
  });

  const categoryIndex = useSelector((state) => state.category.categoryId);
  const dispatch = useDispatch();

  const onClickCategory = (id) => {
    dispatch(setCategoryIndex(id));
    console.log(categoryIndex);
  };

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62bdba87bac21839b609fc45.mockapi.io/pizzas?${
        categoryIndex > 0 ? `category=${categoryIndex}` : ''
      }&sortBy=${optionActive.sortProperty}&order=desc`
    )
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setPizzas(items);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, optionActive]);

  return (
    <div>
      <div className='content__top'>
        <Categories
          value={categoryIndex}
          onClickCategory={(id) => onClickCategory(id)}
        />
        <Sort value={optionActive} onChangeSort={(id) => setOptionActive(id)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas
              .filter((obj) =>
                obj.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
