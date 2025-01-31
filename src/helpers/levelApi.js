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

    async getLevel() {
        const level = await fetch(this.url)
            .then(response => response.json())
            .then(data => data.levels);

        console.log(level);
        return level;
    }
}

export default new Level();
