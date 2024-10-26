export interface IDish {
  id: string;
  name: string;
  description: string;
}

export interface IForm {
  name:string,
  description:string,
  platform:string,
  price:string,
}

export interface IPost {
  id:string,
  name:string,
  description:string,
  platform:string,
  price:string,
}

export interface IPostAPI {
  [id: string]: IPost;
}