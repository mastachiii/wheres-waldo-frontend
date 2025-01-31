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
            .then(data => data.level);

        return level;
    }
}

export default new Level();
