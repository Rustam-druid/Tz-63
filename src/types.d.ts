export interface IForm {
  category: string;
  description: string,
  author: string,
}

export interface IPost {
  id: string,
  name: string,
  description: string,
  platform: string,
  price: string,
}

export interface IPostAPI {
  [id: string]: IPost;
}