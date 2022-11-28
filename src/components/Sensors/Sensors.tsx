import { ScrollView, View } from 'react-native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { SensorType } from '../../types';
import Sensor from '../Sensor/Sensor';
import { sensorsStyle } from '../../styles';
import { adminList } from '../../../cfg';

interface ISensors {
    sensors: SensorType[]
    filter: boolean
    searchQuery: string;
    setSelectedSensor: Dispatch<SetStateAction<string | undefined>>
    userId: string;
}
export default function Sensors(props: ISensors) {
    const { sensors, filter, searchQuery, setSelectedSensor, userId } = props

    const [filteredSensors, setFilteredSensors] = useState(sensors);

    useEffect(() => {
        setFilteredSensors(sensors.filter((sensor) => {
            if (Object.values(sensor).includes(searchQuery.toUpperCase())) {
                // check for ble id
                return sensor
            }
            const returnValue: any = [];
            Object.values(sensor).forEach((field) => {
                if (typeof field === 'string') {
                    const lowerField = field.toLowerCase()
                    if (lowerField.includes(searchQuery.toLowerCase()))
                        returnValue.push(sensor)

                }
            })

            if (returnValue[0])
                return returnValue[0]

        }))
    }, [filter, searchQuery])

    return (
        <ScrollView style={[sensorsStyle.sensorsContainer]} >

            {!filter &&
                sensors.map((sensor) => {
                    if (sensor.userId.toLowerCase() === userId.toLowerCase() || adminList.includes(userId.toLowerCase()))
                        return <Sensor sensor={sensor} key={sensor.sensor_ble_id} setSelectedSensor={setSelectedSensor} />
                })
            }
            {
                filter &&
                filteredSensors.map((sensor) => {
                    if (sensor.userId.toLowerCase() === userId.toLowerCase() || adminList.includes(userId.toLowerCase()))
                        return <Sensor sensor={sensor} key={sensor.sensor_ble_id} setSelectedSensor={setSelectedSensor} />
                })
            }
        </ScrollView >
    )
}