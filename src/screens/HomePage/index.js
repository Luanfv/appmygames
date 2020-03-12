import React, {useState, useEffect} from 'react'
import {Container, Search, Input, InitSearch} from './styled'
import {FlatList, Keyboard, View, Text, AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import Game from './../../components/Game'

Icon.loadFont()

export default () =>
{
    const [games, setGames] = useState([])
    const [search, setSearch] = useState('')
    const [viewGames, setViewGames] = useState([])

    const searchGames = async() => 
    {
        setSearch('')
        Keyboard.dismiss()

        const response = games.filter(e => {
            if(e.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) 
                return e  
        })
        setViewGames(response)
    }

    useEffect(() => {
        const handleGames = async () =>
        {
            /*await AsyncStorage.setItem('@games', JSON.stringify([
                {name: 'The last of us', platform: ['Playstation'], category: ['action', 'adventure'], status: 2, favority: true}, 
                {name: 'The Witcher 3', platform: ['Playstation', 'Xbox', 'PC', 'Nintendo'], category: ['action', 'adventure'], status: 2, favority: true}, 
                {name: 'Resident Evil 2 Remake', platform: ['Playstation', 'Xbox', 'PC'], category: ['action', 'adventure', 'horror'], status: 2, favority: false}, 
                {name: 'The banner saga 3', platform: ['Playstation', 'Xbox', 'PC', 'Nintendo'], category: ['strategy', 'adventure'], status: 1, favority: false}, 
                {name: 'The last of us 2', platform: ['Playstation'], category: ['action', 'adventure'], status: 3, favority: true},
            ]))*/
            const gamesStorage = JSON.parse(await AsyncStorage.getItem('@games'))
            setGames(gamesStorage.length === 0 || !gamesStorage ? [] : gamesStorage)
            setViewGames(gamesStorage.length === 0 || !gamesStorage ? [] : gamesStorage)
        }

        handleGames()
    }, [])

    return (
        <Container>
            <Search>
                <Input placeholder="Buscar..." onChangeText={e => setSearch(e)} />
                <InitSearch onPress={searchGames}>
                    <Icon name="search" size={25} color="#fff" />
                </InitSearch>
            </Search>

            {
                viewGames.length > 0 
                ?
                <FlatList
                    data={viewGames}
                    keyExtractor={viewGames => viewGames.name}
                    renderItem={viewGames => <Game data={viewGames} />}
                />
                :
                <View>
                    <Text>Nenhum jogo encontrado!</Text>
                </View>
            }
        </Container>
    )
}