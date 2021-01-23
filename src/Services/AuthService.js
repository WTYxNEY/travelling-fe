import axios from 'axios'

const url = "https://travelling-be.herokuapp.com"
export default {
    login: user => {
        return fetch(`${url}/user/login`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: { _id: "", username: "", role: "" } };
        })
    },
    register: user => {
        return fetch(`${url}/user/register`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },
    logout: () => {
        return fetch(`${url}/user/logout`)
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated: () => {
        return fetch(`${url}/user/authenticated`)
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data);
                else
                    return { isAuthenticated: false, user: { _id: "",username: "", role: "" } };
            });
    }

}