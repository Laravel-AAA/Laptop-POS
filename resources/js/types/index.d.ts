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

export interface IProduct {
  id: number;
  name: string;
  img: string;
  /**barcode numbers */
  gs1: string;
  price: number;
  quantity: number;
}