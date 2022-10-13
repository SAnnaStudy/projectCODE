import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Main from './pages/Main';
import { ErrorURLPage } from './pages/ErrorURLPage';
/*
1 добавить страницы о человеке
  ошибка и не найдено
 добавить в карточку департамент
 поменять на axios
4 добавить стили когда сортировка по дате (фиолетовую кнопку и года) и в списке даты
5 сделать адаптив
6 шрифты
*/
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<Profile/>}/>
      <Route path='*' element={<ErrorURLPage/>}/>
    </Routes>
  )
}

export default App;
