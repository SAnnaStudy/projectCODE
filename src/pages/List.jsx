import React from "react";
import ListProfile from '../components/ListProfile'
import ListProfileSkeleton from '../components/ListProfileSkeleton'
import './../styles/list.scss'
import { NotFound } from './NotFound';

export const List = (props) => {
    if(props.sortType == 1){
        props.items.sort(function(a, b) {
          if (b.firstName < a.firstName) {
              return 1;
          }
          if (b.firstName > a.firstName) {
              return -1;
          }
          if (a.lastName < b.lastName) {
              return 1;
          }
          if (a.lastName > b.lastName) {
              return -1;
          }
          return 0;
        });
      }
      else{
        props.items.sort(function(a, b){
          var aa = a.birthday.split('-').join(),
              bb = b.birthday.split('-').join();
          return aa < bb ? -1 : (aa > bb ? 1 : 0);
        });
      }
    const finalItems = props.items.filter(obj => {
        if(obj.firstName.toLowerCase().includes(props.searchValue.toLowerCase())
        || obj.lastName.toLowerCase().includes(props.searchValue.toLowerCase())
        || obj.userTag.toLowerCase().includes(props.searchValue.toLowerCase())){
            return true
        } else return false
    })
    const sceleton = [...new Array(7)].map((_, i) => <ListProfileSkeleton key={i}/>)
    return(
        <div className="list">
            {
                props.isLoading ? sceleton : finalItems.length != 0 ? finalItems.map((obj) => <ListProfile key={obj.id} {...obj} sortType={props.sortType}/>) : <NotFound/>
            }
        </div>
    )
}