class UserService {
    constructor({ userRepository }) {
        this.userRepository = userRepository
    }
    async find(query) {
        const users = await this.userRepository.find(query)
        return users
                .map(item => ({ ...item, name: item.name.toUpperCase() }))

    }
}
module.exports = UserService