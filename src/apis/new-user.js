import axios from 'axios';

const newUser = axios.create({
    baseURL: "http://localhost:2000/"
})

export default newUser;