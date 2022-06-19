import { gql } from 'graphql-request'
import { gqlClient } from './client'

export async function getProducts() {
    try {
        const { products } = await gqlClient.request(
            gql`
                query {
                    products {
                        _id
                        name
                        price
                        stock
                        createdAt
                        createdBy {
                            firstname
                            lastname
                        }
                    }
                }
            `,
        )
        
        return products
    } catch (error) {
        console.error(error)
        throw new Error('Hubo un problema obteniendo los productos')
    }
}