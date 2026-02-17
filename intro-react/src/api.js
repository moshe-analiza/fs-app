const API_URL = "http://localhost:3003";
export async function login(username, pass) {
    try {
        const res = await fetch(API_URL + "/auth/login", {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ username, pass })
        })
        const json = await res.json();
        return json;
    } catch (err) {

    }

}
export async function getData(token) {
    try {
        const res = await fetch(API_URL + "/data", {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ token })
        })
        const json = await res.json();
        return json;
    } catch (err) {

    }

}