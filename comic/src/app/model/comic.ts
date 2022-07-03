import {Chapter} from "./chapter";
import {Like} from "./like";

export class Comic {
  private _id: number | undefined;
  private _name: string | undefined;
  private _author: string | undefined;
  private _nation: string | undefined;
  private _category: string | undefined;
  private _date_created: string | undefined;
  private _cover_image: string | undefined;
  private _description: string | undefined;
  private _listChapter: Chapter[] | undefined;
  private _listComment: Comment[] | undefined;
  private _listLikes: Like[] | undefined;
  private _chapter_number: number | undefined;
  private _full: string | undefined;
  private _display: string | undefined;
  private _watch_number: number | undefined;
  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get name(): string | undefined {
    return this._name;
  }

  set name(value: string | undefined) {
    this._name = value;
  }

  get author(): string | undefined {
    return this._author;
  }

  set author(value: string | undefined) {
    this._author = value;
  }

  get nation(): string | undefined {
    return this._nation;
  }

  set nation(value: string | undefined) {
    this._nation = value;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(value: string | undefined) {
    this._category = value;
  }

  get date_created(): string | undefined {
    return this._date_created;
  }

  set date_created(value: string | undefined) {
    this._date_created = value;
  }

  get cover_image(): string | undefined {
    return this._cover_image;
  }

  set cover_image(value: string | undefined) {
    this._cover_image = value;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(value: string | undefined) {
    this._description = value;
  }

  get listChapter(): Chapter[] | undefined {
    return this._listChapter;
  }

  set listChapter(value: Chapter[] | undefined) {
    this._listChapter = value;
  }

  get listComment(): Comment[] | undefined {
    return this._listComment;
  }

  set listComment(value: Comment[] | undefined) {
    this._listComment = value;
  }

  get listLikes(): Like[] | undefined {
    return this._listLikes;
  }

  set listLikes(value: Like[] | undefined) {
    this._listLikes = value;
  }

  get chapter_number(): number | undefined {
    return this._chapter_number;
  }

  set chapter_number(value: number | undefined) {
    this._chapter_number = value;
  }

  get full(): string | undefined {
    return this._full;
  }

  set full(value: string | undefined) {
    this._full = value;
  }

  get display(): string | undefined {
    return this._display;
  }

  set display(value: string | undefined) {
    this._display = value;
  }

  get watch_number(): number | undefined {
    return this._watch_number;
  }

  set watch_number(value: number | undefined) {
    this._watch_number = value;
  }
}
