import { InternalEntity } from './internal'

export class PublicEntity {

    private internal = new InternalEntity();

    public execute(): void {
        this.internal.execute();
    }
}
