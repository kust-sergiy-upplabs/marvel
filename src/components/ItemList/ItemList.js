import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./ItemList.sass"

class ItemList extends Component {
    render() {
        const Items = this.props.items.map((item) =>
        <li
            className="heros-list_item"
            key={item.id}>
            <Link to={`/hero/${item.id}`}>
                <img className="heros-list_img" src={item.images ? item.images.map(img => `${img.path}.jpg`) : null} alt={`hero${item.id}`}/>
                {item.title}
            </Link>
        </li>)
        return (
            <div className="col-12 list-wrap">
                <ul className="heros-list">
                    {Items}
                </ul>
            </div>
        );
    }
}

export default ItemList;
