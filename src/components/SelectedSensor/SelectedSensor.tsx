import { View, Text, Button } from 'react-native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { selectedSensorStyle } from '../../styles'
import { SensorType } from '../../types'
import { InputWLabel } from '../../utilComponents'
import { ChangeStats, PrevStats } from './types'

interface ISelecetdSensor {
    currentSensor: SensorType | undefined;
    setCurrentSensor: Dispatch<SetStateAction<SensorType | undefined>>
    setSelectedSensor: Dispatch<SetStateAction<string | undefined>>
}

export default function SelectedSensor(props: ISelecetdSensor): JSX.Element | null {
    const { currentSensor, setCurrentSensor, setSelectedSensor } = props
    if (!currentSensor) return null
    const [locationTag, setLocationTag] = useState(currentSensor.sensor_location)
    const [maxTemp, setMaxTemp] = useState(currentSensor.highTemperatureAlarmThreshold1)
    const [minTemp, setMinTemp] = useState(currentSensor.lowTemperatureAlarmThreshold1)
    const [email, setEmail] = useState(currentSensor.owner_email)
    const [phone, setPhone] = useState(currentSensor.owner_phone)

    const [prevStats, setPrevStats] = useState<PrevStats>({
        locationTag: locationTag,
        maxTemp: maxTemp,
        minTemp: minTemp,
        email: email,
        phone: phone,
    })

    // util object to know which fields to sent on submit
    // maybe add an indicator that the field has been updated and a way
    // to revert it
    const [changes, setChanges] = useState<ChangeStats>({
        locationTag: false,
        maxTemp: false,
        minTemp: false,
        email: false,
        phone: false,

    })
    console.log(changes);

    return (
        <View style={[selectedSensorStyle.selectedSensorContainer]}>
            <View style={[selectedSensorStyle.stack]}>
                <View style={[selectedSensorStyle.backBtn]}>
                    <Button title='<'
                        onPress={
                            () => {
                                setCurrentSensor(undefined);
                                setSelectedSensor(undefined)
                            }}
                    />
                </View>
                <Text style={[selectedSensorStyle.sensorIDLabel]}>
                    Sensor ID#:
                </Text>
                <Text style={[selectedSensorStyle.sensorID]}>
                    {currentSensor?.sensor_ble_id}
                </Text>
            </View>
            <View style={[selectedSensorStyle.stack]}>
                <InputWLabel
                    label='Location Tag'
                    customStylesInput={selectedSensorStyle.customInputStack}
                    customStylesLabel={selectedSensorStyle.customInputLabel}
                    onChangeText={setLocationTag}
                    afterChangeCallback={
                        () => {
                            if (locationTag !== prevStats.locationTag) {
                                setChanges(prevChanges => {
                                    return { ...prevChanges, locationTag: true }
                                })
                            }
                        }}
                    value={locationTag} />
            </View>
            <View style={[selectedSensorStyle.stack]}>
                <InputWLabel
                    label='Max Temp'
                    customStylesInput={selectedSensorStyle.customInputStack}
                    customStylesLabel={selectedSensorStyle.customInputLabel}
                    onChangeText={setMaxTemp}
                    afterChangeCallback={
                        () => {
                            if (maxTemp !== prevStats.maxTemp) {
                                setChanges(prevChanges => {
                                    return { ...prevChanges, maxTemp: true }
                                })
                            }
                        }}
                    defaultValue={maxTemp} />
            </View>
            <View style={[selectedSensorStyle.stack]}>
                <InputWLabel
                    label='Min Temp'
                    customStylesInput={selectedSensorStyle.customInputStack}
                    customStylesLabel={selectedSensorStyle.customInputLabel}
                    onChangeText={setMinTemp}
                    afterChangeCallback={
                        () => {
                            if (minTemp !== prevStats.minTemp) {
                                setChanges(prevChanges => {
                                    return { ...prevChanges, minTemp: true }
                                })
                            }
                        }}
                    defaultValue={minTemp} />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 26, marginBottom: 20 }}>CONTACT DETAILS:</Text>
            <View style={[selectedSensorStyle.stack]}>
                <InputWLabel
                    label='Email'
                    customStylesInput={selectedSensorStyle.customInputStack}
                    customStylesLabel={selectedSensorStyle.customInputLabel}
                    onChangeText={setEmail}
                    afterChangeCallback={
                        () => {
                            if (email !== prevStats.email) {
                                setChanges(prevChanges => {
                                    return { ...prevChanges, email: true }
                                })
                            }
                        }}
                    defaultValue={email} />
            </View>
            <View style={[selectedSensorStyle.stack]}>
                <InputWLabel
                    label='Phone'
                    customStylesInput={selectedSensorStyle.customInputStack}
                    customStylesLabel={selectedSensorStyle.customInputLabel}
                    onChangeText={setPhone}
                    afterChangeCallback={
                        () => {
                            if (phone !== prevStats.phone) {
                                setChanges(prevChanges => {
                                    return { ...prevChanges, phone: true }
                                })
                            }
                        }}
                    defaultValue={phone} />
            </View>
        </View>
    )
}