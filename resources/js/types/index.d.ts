export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user: IUser;
  };
};

export interface IProduct extends ICreateProduct {
  id: number;
}

export interface ICreateProduct {
  name: string;
  imageFile?: File;
  img?:string;
  /**barcode numbers */
  barcode?: string;
  price?: number;
  quantity?: number;
}


export interface ILaravelPaginate<T extends object>{
  current_page:number;
  data:T[];
  first_page_url:string;
  from:number;
  last_page:number;
  last_page_url:string;
  links:{
    active:boolean;
    label:string;
    url:string|null;
  }[];
  next_page_url:string|null;
  path:string;
  per_page:number;
  prev_page_url:string |null
  to:number;
  total:number;
}