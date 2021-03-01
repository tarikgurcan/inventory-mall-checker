import React from 'react'

const Categorylist = ({categories, SelectCategory, currentCategory}) => {
    return (
        <div>
            <ul className="list-group">
            {categories.map((categories)=>{
                return(<li className={currentCategory===categories.categoryName?"list-group-item active":"list-group-item"} key={categories.id} id={categories.id} onClick={(e)=>SelectCategory(e)}>{categories.categoryName}</li>
                )
            })}
            </ul>
        </div>
    )
}

export default Categorylist
