import React from 'react'
import {Container, Search, Input, InitSearch} from './styled'
import {Text, View, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import Game from './../../components/Game'

Icon.loadFont()

export default () =>
{
    const games = [
        {name: 'The last of us', platform: ['Sony'], category: ['adventure', 'action'], status: 3, favority: true},
        {name: 'The Witcher 3', platform: ['Sony', 'Nintendo', 'Xbox', 'PC'], category: ['adventure', 'action'], status: 3, favority: true},
        {name: 'Crash Bandicoot Remastered', platform: ['Sony', 'Nintendo', 'Xbox', 'PC'], category: ['adventure'], status: 2, favority: false},
        {name: 'Resident Evil 2 Remake', platform: ['Sony', 'Xbox', 'PC'], category: ['adventure', 'action', 'horror'], status: 2, favority: false},
        {name: 'The last of us 2', platform: ['Sony'], category: ['adventure', 'action'], status: 1, favority: true},
        {name: 'UFC 3', platform: ['Sony', 'Xbox'], category: ['fight'], status: 3, favority: false},
    ]

    return (
        <Container>
            <Search>
                <Input placeholder="Buscar..." />
                <InitSearch>
                    <Icon name="search" size={25} color="#fff" />
                </InitSearch>
            </Search>

            <FlatList
                data={games}
                keyExtractor={games => games.name}
                renderItem={games => <Game data={games} />}
            />
        </Container>
    )
}