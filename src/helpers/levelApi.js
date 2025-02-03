class Level {
    constructor() {
        this.url = "https://wheres-waldo-backend-1cdf.onrender.com/levels";
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
        const attemptDetails = await fetch(`${this.url}/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, timeStarted }),
        })
            .then(response => response.json())
            .then(data => data);

        return attemptDetails;
    }
}

export default new Level();
