// --- Exemplo em SOLID letra (S) Single Responsibility Principle ---

class UserViolation {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    saveToDatabase() {

        console.log(`Salvando ${this.name} no banco de dados...`);
    }
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }
}

class UserRepository {
    save(user) {

        console.log(`Salvando ${user.getName()} no banco de dados...`);
    }
}

const user = new User("Alice", "alice@example.com");
const repository = new UserRepository();
repository.save(user);