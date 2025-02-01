class Level {
    constructor() {
        this.url = "http://localhost:8080/levels";
    }

    async getAllLevels() {
        const levels = await fetch(this.url)
            .then(response => response.json())
            .then(data => data);

        return levels;
    }

    async getLevel(id) {
        const level = await fetch(`${this.url}/${id}`)
            .then(response => response.json())
            .then(data => data);

        return level;
    }

    async submitLevelAttempt({ id, name, timeStarted }) {
        await fetch(`${this.url}/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, timeStarted }),
        });
    }
}

export default new Level();
