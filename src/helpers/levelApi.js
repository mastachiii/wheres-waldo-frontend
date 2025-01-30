class Level {
    constructor() {
        this.url = "http:localhost:8080";
    }

    async getRequestOptions({ method = "GET", headers, body }) {
        return {
            method,
            headers,
            body: JSON.stringify(body),
        };
    }

    async getAllLevels() {
        const level = fetch(this.url, this.getRequestOptions())
            .then(response => response.json())
            .then(data => data);

        return level;
    }
}

export default new Level();