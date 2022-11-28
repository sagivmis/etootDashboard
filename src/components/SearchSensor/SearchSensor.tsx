import { View, Text } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import searchSensorStyle from '../../styles/searchSensor.style'
import { InputWLabel } from '../../utilComponents'

interface ISearchSensor {
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
}
export default function SearchSensor(props: ISearchSensor) {
    const { searchQuery, setSearchQuery } = props

    return (
        <View style={[searchSensorStyle.searchSensorContainer]}>
            <InputWLabel placeholder='Search...' onChangeText={setSearchQuery} customStylesInputStack={searchSensorStyle.customSearchInputContainer} />
        </View>
    )
}