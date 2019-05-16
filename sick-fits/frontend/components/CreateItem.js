import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import DisplayError from './ErrorMessage';

export const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ) {
        createItem(title: $title, description: $description, price: $price, image: $image, largeImage: $largeImage) {
            id
            title
            description
            price
        }
    }
`;
function CreateItem() {
    const [state, setState] = React.useState({
        title: 'Dogg',
        description: 'Awesome dog',
        image: '',
        largeImage: '',
        price: 2300,
    });
    return (
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={state}>
            {(createItem, { loading, error }) => (
                <Form
                    onSubmit={async e => {
                        e.preventDefault();
                        // calls mutation
                        const res = await createItem();

                        Router.push({
                            pathname: '/item',
                            query: {
                                id: res.data.createItem.id,
                            },
                        });
                    }}
                >
                    <DisplayError error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                        <label htmlFor="title">
                            Title
                            <input
                                type="text"
                                id="title"
                                placeholder="Title"
                                name="title"
                                required
                                value={state.title}
                                onChange={e => setState({ ...state, title: e.target.value })}
                            />
                        </label>

                        <label htmlFor="price">
                            Price
                            <input
                                type="number"
                                id="price"
                                placeholder="Price"
                                name="price"
                                required
                                value={state.price}
                                onChange={e => setState({ ...state, price: e.target.value })}
                            />
                        </label>

                        <label htmlFor="description">
                            Description
                            <textarea
                                id="description"
                                placeholder="Description"
                                name="description"
                                required
                                value={state.description}
                                onChange={e => setState({ ...state, description: e.target.value })}
                            />
                        </label>
                        <button>Submit</button>
                    </fieldset>
                </Form>
            )}
        </Mutation>
    );
}

export default CreateItem;
