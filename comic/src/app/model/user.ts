import {Like} from "./like";

export class User{
  id: number | undefined;
  password: string | undefined;
  name: string | undefined;
  avatar: string | undefined;
  date_created: string | undefined;
  role_id: number | undefined;
  listComment:Comment[] | undefined;
  listLikes: Like[] | undefined ;
  email: string | undefined;
}
