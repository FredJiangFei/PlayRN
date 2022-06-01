import { create } from 'apisauce'

const apiClient = create({
    // baseURL: 'https://fred-jiang-test-default-rtdb.firebaseio.com/'
    baseURL: 'https://reqres.in/api/'
    // baseURL: 'http://localhost:3000/'
})

export default apiClient