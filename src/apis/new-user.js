import axios from 'axios';

const newUser = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASEURL
})

export default newUser;