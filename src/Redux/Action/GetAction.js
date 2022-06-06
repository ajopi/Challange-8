import { GET_DATA, GET_DATA_ORDERED } from "./Types";


var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://rent-cars-api.herokuapp.com/admin/car/',
    headers: {}
};




function getNewData() {
    return (dispatch) => {
        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                const car = response.data
                car.forEach(data => {
                    data.passenger = "4 Orang";
                    data.transmission = "Manual";
                    data.year = "Tahun 2020"
                });
                dispatch({
                    type: GET_DATA,
                    payload: car
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


const getDataByID=(id)=>{
    return(dispatch)=>{
        axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`).then(response =>{
            const carById = response.data;
            
            carById.passenger = "4 Orang"
            carById.transmission = "Manual"
            carById.year = "Tahun 2020"

            dispatch({
                type: GET_DATA_ORDERED,
                payload: carById
            })
        })
    }
}

export { getNewData, getDataByID };