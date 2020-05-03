import { InternalEntity } from "./internal";
export class PublicEntity {
    constructor() {
        this.internal = new InternalEntity();
    }
    execute() {
        this.internal.execute();
    }
}
