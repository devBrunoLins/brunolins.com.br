export class ActivityHistory implements IActivityHistory {
    constructor(
        public date: string = '',
        public actor: string = '',
        public action: string = ''
    ){}
}

export interface IActivityHistory {
    date: string;
    actor: string;
    action: string;
}