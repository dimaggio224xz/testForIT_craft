export default {
    getAllUsers: async (jwt) =>{
        const res = await fetch("/get-all-users/" + jwt);
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    signIn: async (login, password) => {
        const res = await fetch("/create-note", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({login, password})
        })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    signUp: async (name, login, password) => {
        const res = await fetch("/create-note", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({name, login, password})
        })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },
};