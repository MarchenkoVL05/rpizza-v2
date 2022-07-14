import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem } from '../../redux/slices/cartSlice';
import PizzaDetails from '../PizzaDetails';

const typesName = ['тонкое', 'традиционное'];

type pizzaBlockProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
};

const PizzaBlock: React.FC<pizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  types,
  sizes,
}) => {
  const [sizeIndex, setSizeIndex] = React.useState(0);
  const [typeIndex, setTypeIndex] = React.useState(0);

  const dispatch = useDispatch();

  const cartItem = useSelector((state: any) =>
    state.cart.items.find((obj: any) => obj.id == id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onAddToCart = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typesName[typeIndex],
      size: sizes[sizeIndex],
    };

    dispatch(addItem(item));
  };

  return (
    <div className='pizza-block-wrapper'>
      <div className='pizza-block'>
        <Link to={'details:' + id}>
          <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
          <h4 className='pizza-block__title'>{title}</h4>
        </Link>
        <div className='pizza-block__selector'>
          <ul>
            {types.map((type, index) => (
              <li
                key={index}
                className={index == typeIndex ? 'active' : ''}
                onClick={() => setTypeIndex(index)}
              >
                {typesName[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                className={index == sizeIndex ? 'active' : ''}
                onClick={() => setSizeIndex(index)}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>от {price} ₽</div>
          <div
            onClick={onAddToCart}
            className='button button--outline button--add'
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <span>Добавить</span>
            {addedCount ? <i>{addedCount}</i> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
