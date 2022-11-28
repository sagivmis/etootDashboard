import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { Button, Keyboard, TouchableWithoutFeedback, View } from "react-native"
import { appStyle } from "./src/styles"
import Login from "./src/components/Login"
import { SensorType } from "./src/types"
import Sensors from "./src/components/Sensors"
import { defaultSensors } from "./cfg"
import SearchSensor from "./src/components/SearchSensor"
import SelectedSensor from "./src/components/SelectedSensor"

export default function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(true)
  const [userId, setUserId] = useState<string>("")
  const [sensors, setSensors] = useState<SensorType[] | []>(defaultSensors)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filter, setFilter] = useState<boolean>(false)
  const [selectedSensor, setSelectedSensor] = useState<string>()
  const [currentSensor, setCurrentSensor] = useState<SensorType>()

  useEffect(() => {
    setCurrentSensor(
      sensors.filter((sensor) => sensor.sensor_ble_id === selectedSensor)[0]
    )
  }, [selectedSensor])

  useEffect(() => {
    if (searchQuery && !filter) {
      setFilter(true)
    } else if (!searchQuery && filter) {
      setFilter(false)
    }
  }, [searchQuery])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={appStyle.appContainer}>
        {!loggedIn && (
          <Login
            setLoggedIn={setLoggedIn}
            userId={userId}
            setUserId={setUserId}
          />
        )}
        {loggedIn && !selectedSensor && (
          <View style={[appStyle.dashboardStack]}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                width: "90%"
              }}
            >
              <Button
                title='LOG OUT'
                onPress={() => {
                  setLoggedIn(false)
                  setUserId("")
                }}
              />
            </View>
            <SearchSensor
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Sensors
              sensors={sensors}
              filter={filter}
              searchQuery={searchQuery}
              setSelectedSensor={setSelectedSensor}
              userId={userId}
            />
          </View>
        )}
        {selectedSensor && (
          <SelectedSensor
            currentSensor={currentSensor}
            setCurrentSensor={setCurrentSensor}
            setSelectedSensor={setSelectedSensor}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}
