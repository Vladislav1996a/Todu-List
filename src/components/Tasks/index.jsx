import {React} from 'react';
import './task.scss';
import edit from '../../assets/img/int.svg';
function Tasks() {
    return (
        <div className='task'>
            <h2 className='task__title'>
                Фронтенд
                <img src={edit} alt="edit"/>
            </h2>

            <div className="task__wrap">
                <div className="checkbox">
                    <input id='check' type="checkbox"/>
                    <label htmlFor="check">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </label>
                    <p>Redux (redux-observable, redux-saga)</p>
                </div>
            </div>
        </div>
    )
}

export default Tasks;
