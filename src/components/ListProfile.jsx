import React from "react"
import {Link} from 'react-router-dom'
import './../styles/listProfile.scss'

function ListProfile(props){
    let date=new Date(props.birthday);
    let dateList=date.toUTCString().split(" ").slice(1,3)
    return(
        <Link to="/about" state={{ information: props }} className="list_link">
                <div className="list_profile">
                    <div className="list_profile_content">
                        <div className="list_profile_picture">
                            <img className="list_profile_photo" src={props.avatarUrl} alt="profilePhoto"/>
                        </div>
                        <div className="list_profile_text">
                            <div className="list_profile_information">
                                <div className="list_profile_name">{props.firstName} {props.lastName}</div>
                                <div className="list_profile_userTag">{props.userTag == 'string' ? '' : props.userTag}</div>
                            </div>
                            <div className="list_profile_description">{props.department}</div>
                        </div>
                    </div>
                    {
                        props.sortType == 2 &&(
                            <div className="list_profile_date"><p>{dateList[0]} {dateList[1]}</p></div>
                        )
                    }
                </div>
        </Link>
    )
}

export default ListProfile