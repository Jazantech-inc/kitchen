import { instanceAxios } from "./instanceAxios";

// signup user

export const SignupUser= async (payload)=>{

    try {
        const response = await instanceAxios.post("/api/users/signup",payload);
        return response.data;
    } catch (error) {
        console.log(error.message)
        return error.message
    }
}

// login user

export const LoginUser = async (payload) => {
    try {
        const response = await instanceAxios.post("/api/users/login",payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

// get current user


export const FetchCurrentUser=async()=>{
    try {
        const response = await instanceAxios.get("/api/users/fetchCurrentUser")
        return response.data
    } catch (error) {
        return error.message
    }
}