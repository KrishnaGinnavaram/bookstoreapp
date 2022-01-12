import {create} from 'apisauce';

const client = create({
    baseURL: 'http://192.168.0.7:9000/api',
})

// apiClient.get('/listings').then( res => {
//     if(!res.ok) {
//         res.problem
//     }
// }
//     )

export default client;