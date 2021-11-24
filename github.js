class Github {
    constructor() {
        this.client_id = '05ab4f81eeaf8506cfb9';
        this.client_secret = '43c8025f8028a6d6f01a584c8a9b94f44aac4111';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        console.log(profileData);
        return {
            profileData
        }

    }
}