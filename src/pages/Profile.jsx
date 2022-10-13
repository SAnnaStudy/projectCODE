import React from 'react';
import './../styles/profile.scss'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Profile(){

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    function getNumber(number) {
        number = number.split('');
        number.splice(2,0,'(')
        number.splice(6,0,')')
        number = number.join('')
        return number
    }
    const location = useLocation()
    const props = location.state.information;
    let date=new Date(props.birthday);
    let res = getAge(props.birthday)
    let dateList=date.toUTCString().split(" ")
    let job = props.department
    const c = ['android', 'ios', 'design', 'management', 'qa', 'back_office', 'frontend', 'hr', 'pr', 'backend', 'support', 'analytics']
    const categories = ['Android developer', 'iOS developer', 'Designer', 'Manager', 'QA engineer', 'Back_office specialist', 'Frontend developer', 'HR specialist', 'PR specialist', 'Backend developer', 'Support specialist', 'Analytic']
    let title = categories[c.indexOf(job)]
    let rightNumber = getNumber(props.phone)
    return (
        <div className='profile_container'>
            <div className="profile_header">
                <div className="profile_header_first">
                    <Link  to={'/'}>
                        <svg className="profile_back" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.17006 6.71005L5.41006 10.9501C5.50302 11.0438 5.61362 11.1182 5.73548 11.1689C5.85734 11.2197 5.98805 11.2458 6.12006 11.2458C6.25207 11.2458 6.38277 11.2197 6.50463 11.1689C6.62649 11.1182 6.73709 11.0438 6.83006 10.9501C7.01631 10.7627 7.12085 10.5092 7.12085 10.2451C7.12085 9.98087 7.01631 9.72741 6.83006 9.54005L3.29006 6.00005L6.83006 2.46005C7.01631 2.27269 7.12085 2.01924 7.12085 1.75505C7.12085 1.49086 7.01631 1.23741 6.83006 1.05005C6.73662 0.957369 6.6258 0.884045 6.50396 0.83428C6.38213 0.784515 6.25166 0.759291 6.12006 0.760052C5.98845 0.759291 5.85799 0.784515 5.73615 0.83428C5.61431 0.884044 5.5035 0.957369 5.41006 1.05005L1.17006 5.29005C1.07633 5.38301 1.00194 5.49361 0.951167 5.61547C0.900398 5.73733 0.874259 5.86804 0.874259 6.00005C0.874259 6.13206 0.900398 6.26277 0.951167 6.38463C1.00194 6.50649 1.07633 6.61709 1.17006 6.71005Z" fill="#050510"/>
                        </svg>
                    </Link>
                </div>
                <div className="profile_header_second">
                    <div className="profile_header_content">
                        <div className="profile_photo">
                            <img className="profile_picture" src={props.avatarUrl} alt="profilePhoto"/>
                        </div>
                        <div className="profile_title">
                            <div className="profile_name">{props.firstName} {props.lastName}</div>
                            <div className="profile_tag">{props.userTag == 'string' ? '' : props.userTag}</div>
                        </div>
                        <div className="profile_department">{title}</div>
                    </div>
                </div>
            </div>
            <div className="profile_body">
                <div className="profile_body_list">
                    <div className="profile_body_list_date">{dateList[1]} {dateList[2]} {dateList[3]}</div>
                    <div className="profile_body_old">{res} лет</div>
                </div>
                <div className="profile_body_list2">
                    <div className="profile_body_list_phone">{rightNumber}</div>
                </div>
            </div>
        </div>
    );
}
export default Profile;
