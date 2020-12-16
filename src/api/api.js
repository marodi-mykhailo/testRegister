const baseURL = "someURL";

export const API = {
    async registration(data, endpoint) {
        try {
            const res = await fetch(`${baseURL}/register/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                const message = `An error has occurred: ${res.status}`
                throw new Error(message);
            }
            return await res.json()
        } catch (e) {
            return Promise.reject(e)
        }
    },
}
