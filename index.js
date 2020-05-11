class InternalEntity {
    execute() {
        // code
    }
}

class PublicEntity {
    constructor() {
        this.internal = new InternalEntity();
    }
    execute() {
        this.internal.execute();
    }
}

export { PublicEntity };
