import {React} from 'react';
import './task.scss';
import edit from '../../assets/img/int.svg';
import axios from 'axios';
import AddTasksForm from './AddTaskForm';

function Tasks({list,changeTitle,addTasks}) {
   const changeTitletask =()=>{
       let newName = window.prompt('Изменить название категории',list.name);
      if(newName){
        changeTitle(newName,list.id)
        axios.patch('http://localhost:3001/lists/' + list.id,{
            name: newName
        })
        .catch (()=>{
            alert('не удалось изменить заголовок')
        })
      }
   }
   const taskComplite = (id,completed) => {
        axios.patch('http://localhost:3001/tasks/' + id,{
            completed: !completed
        })
   }
  
 
    return (
        <div className='task'>
            <h2 className='task__title' style={{color:list.color.hex}}>
               {list.name}
              
                <img onClick={changeTitletask} src={edit} alt="edit"/>
            </h2>

            <div  className="task__wrap">
                {list.tasks && list.tasks.map(item => (
                    
                    <div key={item.id} className="checkbox">
                      
                        <input  onChange={()=>taskComplite(item.id,item.completed)} defaultChecked={item.completed}  id={`check_${item.id}`} type="checkbox"/>
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
            <AddTasksForm
               addTasks = {
                addTasks
               }
               list = {
                list
               }
            />
        </div>
    )
}

export default Tasks;
