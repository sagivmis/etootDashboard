import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { SensorType } from '../../types'
import sensorStyle from '../../styles/sensor.style'

interface ISensor {
    sensor: SensorType
    setSelectedSensor: Dispatch<SetStateAction<string | undefined>>
}
export default function Sensor(props: ISensor) {
    const { sensor, setSelectedSensor } = props
    return (
        <Pressable style={[sensorStyle.sensorContainer]} onPress={() => setSelectedSensor(sensor.sensor_ble_id)}>
            <Text style={[sensorStyle.field]}>{sensor.sensor_ble_id}</Text>
            <Text style={[sensorStyle.field]}>Location Tag</Text>
            <Text style={[sensorStyle.field]}>Temp</Text>
            <Text style={[sensorStyle.field]}>Min Temp</Text>
            <Text style={[sensorStyle.field]}>Max Temp</Text>
        </Pressable>
    )
}