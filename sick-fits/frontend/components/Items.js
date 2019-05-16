import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

const Center = styled.div`
    text-align: center;
`;
const ItemsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: 1024px;
    margin: 0 auto;
`;

export const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            description
            price
            image
            largeImage
        }
    }
`;

function Items() {
    return (
        <>
            <Query query={ALL_ITEMS_QUERY}>
                {({ data, error, loading }) => {
                    if (loading) {
                        return 'Loading...';
                    }

                    if (error) {
                        return <p>Error: {error.message}</p>;
                    }

                    return (
                        <ItemsList>
                            {data.items.map(item => (
                                <Item key={item.id} item={item} />
                            ))}
                        </ItemsList>
                    );
                }}
            </Query>
        </>
    );
}

export default Items;
