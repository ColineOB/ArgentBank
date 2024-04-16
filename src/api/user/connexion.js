import * as url from "../addressApi"

async function connexion(data) {
    try {
        const response = await fetch(url.URL+url.POST_LOGIN, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        return response.json()
    } catch(error) {
        console.log('error :', error);
    }
}

export default connexion