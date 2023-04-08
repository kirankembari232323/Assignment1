import axios from "axios";

const API = `https://reqres.in/api/users`

export function getUser(setUsers) {
    axios.get(API).then((response) => {
        setUsers(response?.data?.data)
    })
}


export function createUserdata(userData, event, users, setUsers, resolve, reject) {
    if (event) {
        event.preventDefault();
        const url = API
        const data = { ...userData, id: users.length + 1 }
        const headers = {
            "Content-Type": "application/json"
        }

        if (userData?.first_name && userData?.last_name && userData?.email && userData?.avatar) {
            axios.post(url, data, headers).then((response) => {
                window.alert("User created successfully")
                resolve("Promise resolved successfully");
                setUsers([...users, data]);
            })
        } else {
            window.alert("Please enter data!!!")
            reject(Error("Promise rejected"));
        }
    }
}



export function editUserdata(userData, event, users, setUsers, resolve, reject) {
    if (event) {
        event.preventDefault();
        const url = `${API}/${userData?.id}`
        const data = { ...userData }
        const headers = {
            "Content-Type": "application/json"
        }

        if (userData?.first_name && userData?.last_name && userData?.email && userData?.avatar) {
            axios.put(url, data, headers).then((response) => {
                window.alert("User updated successfully")
                resolve("Promise resolved successfully");
                let new_array = users?.map(element => element.id === userData?.id ? {
                    ...element, first_name: userData?.first_name,
                    last_name: userData?.last_name,
                    email: userData?.email,
                    avatar: userData?.avatar
                } : element);
                setUsers(new_array);
            })
        } else {
            window.alert("Please enter valid data!!!")
            reject(Error("Promise rejected"));
        }
    }
}
