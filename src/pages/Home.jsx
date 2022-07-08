import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import QueryString from 'qs';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

import { setCategoryIndex, setParams } from '../redux/slices/categorySlice';
import { setPizzas } from '../redux/slices/pizzaSlice';

import { SearchContext } from '../App.js';

import { list } from '../components/Sort';

function Home() {
  const { searchValue } = React.useContext(SearchContext);

  const [isLoading, setIsLoading] = React.useState(true);

  const categoryIndex = useSelector((state) => state.category.categoryId);
  const optionActive = useSelector((state) => state.category.sort);
  const pizzas = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isParams = React.useRef(false);
  const isMounted = React.useRef(false);

  const onClickCategory = (id) => {
    dispatch(setCategoryIndex(id));
  };

  const fetchPizzas = async () => {
    setIsLoading(true);
    try {
      let { data } = await axios.get(
        `https://62bdba87bac21839b609fc45.mockapi.io/pizzas?${
          categoryIndex > 0 ? `category=${categoryIndex}` : ''
        }&sortBy=${optionActive.sortProperty}&order=desc`
      );
      dispatch(setPizzas(data));
    } catch (error) {
      alert('Не удалось загрузить пиццы :( Ошибка сервера');
    } finally {
      setIsLoading(false);
    }
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = QueryString.parse(window.location.search.slice(1));
      const sorted = list.find(
        (obj) => obj.sortProperty == params.sortProperty
      );
      dispatch(setParams({ ...params, sorted }));
      isParams.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isParams.current) {
      fetchPizzas();
    }

    isParams.current = false;
  }, [categoryIndex, optionActive]);

  React.useEffect(() => {
    if (isMounted.current) {
      const qs = QueryString.stringify({
        sortProperty: optionActive.sortProperty,
        categoryIndex: categoryIndex,
      });

      navigate(`?${qs}`);
    }

    isMounted.current = true;
  }, [optionActive, categoryIndex]);

  return (
    <div>
      <div className='content__top'>
        <Categories
          value={categoryIndex}
          onClickCategory={(id) => onClickCategory(id)}
        />
        <Sort optionActive={optionActive} />
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
