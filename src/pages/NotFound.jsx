import React from "react";
import './../styles/notFound.scss'

export const NotFound = (props) => {
    return(
        <div className="notf_container">
            <div className="notf_content">
                <div className="notf_picture"></div>
                <p className="notf_title">Мы никого не нашли</p>
                <p className="notf_text">Попробуй скорректировать запрос</p>
            </div>
        </div>
    )
}