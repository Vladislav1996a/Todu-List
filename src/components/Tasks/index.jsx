import {React} from 'react';
import './task.scss';
import edit from '../../assets/img/int.svg';
function Tasks({list}) {
   
    return (
        <div className='task'>
            <h2 className='task__title'>
               {list.name}
                <img src={edit} alt="edit"/>
            </h2>

            <div  className="task__wrap">
                {list.tasks.map(item => (
                    
                    <div key={item.id} className="checkbox">
                      
                        <input id={`check_${item.id}`} type="checkbox"/>
                        <label htmlFor={`check_${item.id}`}>
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </label>
                        <p>{item.text}</p>
                    </div>
                )
                    
                )}
               
            </div>
        </div>
    )
}

export default Tasks;
