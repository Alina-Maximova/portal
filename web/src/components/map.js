import React, { Component , useState} from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import { getAllPr } from '../../../api1/controller/AdminsController';


const Maps =()=> {
//     const [data,setData] = useState([])

//     useEffect(async()=>{
//         setData( await getAllPr())
//     },[data.length])

//     console.log(data)
        return (
           
            <>
                <YMaps >
                    <Map style={{ display: 'block', width: '500px', height: '400px'}} defaultState={{ center: [56.12, 40.40], zoom: 10, }} >
                    {/* <Placemark geometry={data} /> */}
                        </Map>
                    
                </YMaps>
            </>
        )
    
}
export default Maps