
export class Chapter{
  constructor(private _id: number,
              private _name: string,
              private _comic_id: number,
              private _content: string,
              private _date_created: string) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get comic_id(): number {
    return this._comic_id;
  }

  set comic_id(value: number) {
    this._comic_id = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get date_created(): string {
    return this._date_created;
  }

  set date_created(value: string) {
    this._date_created = value;
  }
}
