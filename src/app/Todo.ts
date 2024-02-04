

export class Todo {
    sno: number = 0;
    title: string = ''
    desc: string = ''
    active: boolean = false

    constructor(sno: number,title: string, desc: string, active: boolean) {
        
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.active = active;
      }
}