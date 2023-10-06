/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

export interface Product {
  id: number;
  name: string;
  img: string | null;
  barcode: string | null;
  price: number | null;
  stock: number | null;
  created_at: string | null;
  updated_at: string | null;
  user_id: number;
  user?: User | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  password: string;
  remember_token: string | null;
  created_at: string | null;
  updated_at: string | null;
  products?: Array<Product> | null;
  products_count?: number | null;
}


