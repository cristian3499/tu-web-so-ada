import { GoogleMap, LoadScript } from "@react-google-maps/api";

export const MapContainer = () => {
    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 19.282606,
        lng: -99.655634
    }
    return(
        <>
        <LoadScript
            googleMapsApiKey="{process.env.REACT_APP_GOOGLE_MAPS_API_KEY}">
                <GoogleMap 
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                />
        </LoadScript>
        
        </>
    )
}