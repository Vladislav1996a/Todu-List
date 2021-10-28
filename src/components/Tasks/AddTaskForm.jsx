import {React, useState} from 'react';


function AddTasksForm({addTasks,list}) {
    const [showForm, setShowForm] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const toggleForm = () => {
        setShowForm(!showForm)
        setInputValue('')
    }
    
    return (
        <div className='add-task'>
            <div className="list__button" >
                {!showForm ? (<div onClick={toggleForm} className="list__wrap"> 
                    <div className="icon">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">

                                <path
                                d="M6 1V11"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>

                                <path
                                d="M1 6H11"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    </div>
                   <span>Новая задача</span>
                </div>) : (
                    <div className='add-task__form'>
                        <input value={inputValue} onChange={ e =>{setInputValue(e.target.value)}} className='add-task__input' type="text" />
                        <div onClick={()=>addTasks(inputValue,list.id,setInputValue)} className="add-task__button">Добавить задачу</div>
                        <div onClick={toggleForm} className="add-task__button add-task__button--cancel">Отмена</div>
                    </div>
                )
                
                }
            </div>
           
        </div>
    )
}

export default AddTasksForm;
