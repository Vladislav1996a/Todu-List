import {React, useEffect, useState} from 'react';
import './AddList.scss';
import List from "../List/";
import classNames from 'classnames';
import axios from 'axios';

function  AddList({colors, onAddList}) {
   const [showPopup, setShow] = useState(false);
   const [activeItem, setActive] = useState(null);
   const [valueInput, setValue] = useState('')
    useEffect(()=>{
        if(Array.isArray(colors)){
            setActive(colors[0].id)
        }
    },[colors])
   const addList = () => {

       axios.post('http://localhost:3001/lists',{
           name:valueInput, colorId:activeItem
       }).then(({data}) =>{
          const color = colors.filter(color => color.id ===  activeItem )[0].hex;
          const listObj = {
              ...data,color:color
          }

           onAddList(listObj)
       })
   }





    return (
        <div>
            <List

              clickPopup={()=>setShow(!showPopup)}
              items={[
                  {
                      icon: <svg
                        width="12"
                        height="12"
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
                      </svg>,
                      name: 'Добавить список',
                      id:0
                  }
              ]}
              addlist
            />
          {showPopup && (
            <div  className='popup'>
              <div onClick={()=>setShow(false)} className='popup__close'><span></span></div>
              <input onChange={e => setValue(e.target.value)} type="text"/>
                <div className='popup__wrap'>
                    {
                        colors.map( color => (
                            <div onClick={()=>setActive(color.id)} key={color.id} className={classNames('icon', activeItem === color.id ?'active-border':'')}>
                                <i className='list__icon list__icon--big'
                                   style={{backgroundColor: color.hex}} >
                                </i>
                            </div>
                        ))
                    }
                </div>
              <button onClick={addList} className='popup__button'>Add</button>
            </div>
          ) }
        </div>
    )
}

export default AddList;