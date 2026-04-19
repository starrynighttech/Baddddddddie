import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { Accelerometer } from "expo-sensors"

export default function Shake() {

  useEffect(() => {
    Accelerometer.setUpdateInterval(200)

    const sub = Accelerometer.addListener(data => {
      const speed = Math.abs(data.x + data.y + data.z)

      if (speed > 1.3) {
        fetch("http://localhost:3000/api/shake", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: "USER_ID",
            lat: 0,
            lng: 0
          })
        })
      }
    })

    return () => sub.remove()
  }, [])

  return (
    <View>
      <Text>Shake to Earn</Text>
    </View>
  )
}
