import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchValue } from '../../redux/slices/categorySlice';

import styles from './search.module.scss';

import searchIcon from '../../assets/icons/searchIcon.svg';
import closeIcon from '../../assets/icons/closing.svg';

export default function Search() {
  const inputRef = React.useRef();
  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.category.searchValue);

  const clearSearchInput = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={searchIcon} alt='searching' />
      <input
        value={searchValue}
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
        ref={inputRef}
        className={styles.input}
        placeholder='Поиск пицц...'
      />
      {searchValue ? (
        <img
          onClick={() => clearSearchInput()}
          className={styles.close}
          src={closeIcon}
          alt='close'
        />
      ) : (
        ''
      )}
    </div>
  );
}
