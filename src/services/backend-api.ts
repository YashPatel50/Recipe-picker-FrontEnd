
import axios from "axios";

// Service 1 instance
const userService = axios.create({
    baseURL: "http://127.0.0.1:8000/users/",
    headers: { 'Content-Type': 'application/json' },
});


export {userService}