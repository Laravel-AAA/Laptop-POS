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
  img?: string;
  /**barcode numbers */
  barcode?: string;
  price?: number;
  quantity?: number;
}