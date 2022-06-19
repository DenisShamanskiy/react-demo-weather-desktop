import { Coordinates } from "redux/types"

// var options = {
//   enableHighAccuracy: true,
//   timeout: 10000,
//   maximumAge: 0
// };

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => 
      resolve(position),
      error => reject(error))
    }
  )
}

export default async function getCurrentCoordinates(): Promise<Coordinates> {
    const position: any = await getCurrentPosition()
    const latitude: number = position.coords.latitude
    const longitude: number = position.coords.longitude
    return {latitude, longitude}
}