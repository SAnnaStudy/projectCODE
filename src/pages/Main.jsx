
import './../App.css';
import Searcher from './../components/Searcher';
import Categories from './../components/Categories';
import Sort from './../components/Sort';
import React from 'react';
import { List } from './List';
import axios from 'axios'
import { ErrorPage } from './ErrorPage';

function Main (){
  const [openPop, setOpenPop] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState('all');
  const [sortType, setSortType] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    axios
    .get(
      `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${categoryId!= 0?categoryId:'all'}`
    )
    .then((res) => {
        setItems(res.data.items);
        setIsLoading(false);
        setIsError(false);
        console.log(items)
    })
    .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setIsError(true)
    })
  }, [categoryId, sortType])

  return (
    <div className="App">     
      <div className='appTitle'>Поиск</div>
      <Searcher setOpenPop={setOpenPop} searchValue={searchValue} sortType={sortType} setSearchValue={setSearchValue}/>
      <Categories categoryId={categoryId} setCategoryId={(i) => setCategoryId(i)}/>
      <hr className='hr'></hr>
      { isError ?
        <ErrorPage/>
      :
        <List isLoading={isLoading} items={items} sortType={sortType} searchValue={searchValue}/>
      }
      {
        openPop && (
            <Sort setOpenPop={setOpenPop} sortType={sortType} setSortType={(i) => setSortType(i)}/>
        )
      }
    </div>
  );
}
export default Main;