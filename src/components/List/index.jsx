import React from 'react';
import './List.scss';
import classNames from 'classnames';
import axios from "axios";

function List({items,addlist,clickPopup,isRemove,onRemovable,onClickItem,task}){

    const removeList = item => {
        axios.delete('http://localhost:3001/lists/'+item.id)
            .then(
                onRemovable(item.id)
            )
    }

    return (

        <div onClick={clickPopup} className='list__item ' >

            {items.map(item => (
                <div 
                    onClick = { onClickItem ? () => onClickItem(item) : null } 
                    key = {item.id} 
                    className = { classNames(item.active ? 'active': '', addlist ? 'list__button' : '')}
                >
                    <div 
                        className={classNames('list__wrap',task && task.id === item.id ?'item__active':'' )}
                    >
                        {item.icon ? <div className='icon'>{item.icon}</div> : <div className='icon'><i className='list__icon' style={{background: item.color.hex }} ></i></div>}
                        {item.name} {item.tasks && `(${item.tasks.length})`}
                        {isRemove && <div onClick={() => removeList(item)} className='list__remove'>&#10006;</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List;