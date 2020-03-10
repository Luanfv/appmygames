import React from 'react'
import {View, Text} from 'react-native'
import {Container, Name, Content} from './styled'

export default props =>
{
    game = props.data.item

    return (
        <Container>
            <Name>
                {game.name}
            </Name>
            <Content>
                Plataforma(s): {game.platform.map(e => `${e}, `)}
            </Content>
            <Content>
                Categoria(s): {game.category.map(e => `${e}, `)}
            </Content>
            <Content>
                Status: {game.status === 1 ? 'Jogando' : game.status === 2 ? 'Jogado' : 'Jogar'}
            </Content>
        </Container>
    )
}