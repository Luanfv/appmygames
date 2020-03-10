import styled from 'styled-components'
import {View, TextInput, TouchableOpacity, FlatList} from 'react-native'

export const Container = styled(View)`
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    padding: 10% 5% 0%;
    max-width: 700px;
`

export const Search = styled(View)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const Input = styled(TextInput)`
    width: 70%;
    padding: 5px 10px;
    border: #0B3861 solid 2px;
    border-radius: 4px;
    font-size: 16px;
`

export const InitSearch = styled(TouchableOpacity)`
    width: 28%;
    background: #0B3861;
    border: none;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`