import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

function Item(props) {
    const { item } = props;
    const { title, description, price, id, image } = item;
    console.log(item);
    return (
        <ItemStyles>
            {image && <img src={image} alt={title} />}
            <Title>
                <Link href={{ pathname: '/item', query: { id } }}>
                    <a>{title}</a>
                </Link>
            </Title>
            <PriceTag>{formatMoney(price)}</PriceTag>
            <p>{description}</p>
            <div className="buttonList">
                <Link href={{ pathname: 'update', query: { id } }}>
                    <a>Edit</a>
                </Link>
                <button>Add to Cart</button>
                <button>Delete</button>
            </div>
        </ItemStyles>
    );
}
Item.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Item;
