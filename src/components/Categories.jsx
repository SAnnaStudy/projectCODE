import React from "react"
import './../styles/categories.scss'

function Categories({categoryId, setCategoryId}){
    const categories = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android']
    const c = ['all', 'design', 'analytics', 'management', 'ios', 'android']
    return(
        <div className="categories">
            <ul className="categories_ul">
                {
                    categories.map((value, i) => (
                        <li key={i} onClick={() => setCategoryId(c[i])} className={categoryId == c[i] ? 'categories_choosen' : 'categories_li'}>{value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories