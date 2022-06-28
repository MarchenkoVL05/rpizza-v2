import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';
import Sort from './components/Sort';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
