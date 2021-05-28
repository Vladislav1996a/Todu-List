import React from 'react';
import './List.scss';
import classNames from 'classnames';

function List({items,addlist,clickPopup,isRemove,onRemovable}){
// console.log(items)
    return (
        <div onClick={clickPopup} className='list__item ' >
            {items.map(item => (
                <div key={item.id} className={ classNames(item.active ? 'active': '', addlist ? 'list__button' : '')}>

                    <div className="list__wrap">

                        {item.icon ? <div className='icon'>{item.icon}</div> : <div className='icon'><i className='list__icon' style={{background: item.color }} ></i></div>}
                        {item.name}
                        {isRemove && <div onClick={() => onRemovable(item)} className='list__remove'>&#10006;</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List;