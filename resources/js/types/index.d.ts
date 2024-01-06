// Laravel will give you `null` value for nullable fields in the database;
// So, optional fields should never treated as `undefined`.
// ❌ `name?:string`
// ✅ `name:string|null`
// This way we can easily use triple equal `===`/`!==` with null values
// and be confident we don't treat falsy values (e.g., "false", 0, "",...etc) as `null`.

interface CreatedUpdated {
  created_at: string; updated_at: string;
}

interface BasicModel extends CreatedUpdated {
  id: string;
}

interface SoftDelete {
  deleted_at: string | null;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: 'Owner' | 'Maintainer' | 'Cashier';
}

export interface IUser extends ICreateUser, BasicModel, SoftDelete {
  email_verified_at: string;
  business_id: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>,> = T & {
  flash: {
    success: string | null;
    error: string | null;
    warning: string | null;
    message: string | null;
  };
  auth: { user: IUser | null; business: IBusiness | null };
}

export type AuthPageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = PageProps<T> & {
  override auth: { user: IUser; business: IBusiness };
};

export interface IProduct extends ICreateProduct, BasicModel {
  business_id: string;
  createdBy_id: string;
  created_by?: IUser;
}

export interface ICreateProduct {
  name: string;
  imageFile: File | null;
  img: string | null;
  /**barcode numbers */
  barcode: string | null;
  price: number | null;
  stock: number | null;
  description: string | null;
}

export interface ICreateBill {
  cashReceived: number | null;
  bill_details: ICreateBillDetail[];
}

export interface IBill extends ICreateBill, BasicModel {
  business_id: string;
  business?: IBusiness;
  createdBy_id: string;
  created_by?: IUser;
  override bill_details: IBillDetail[];

}

export interface ICreateBillDetail {
  quantity: number;
  product_id: string;
  product: IProduct;
}

export interface IBillDetail extends ICreateBillDetail, BasicModel {
  bill_id: string;
}

export interface ICreateBusiness {
  name: string;
  logo: string | null;
  logoFile: File | null;
  country: string;
  city: string;
  address: string;
  currency: string;
  taxPercent: number;
  phone: string;
  countryCallingCode: string;
  taxIdentificationNumber: string | null;
}

export interface IBusiness extends ICreateBusiness, BasicModel {
}

export interface ILaravelPaginate<T extends object> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    active: boolean;
    label: string;
    url: string | null;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

/**if the state of the modal is `create` then no data needed but when updating or showing there will be a data (data is Product, User...etc)
 */
export type IModalAction<T extends object> = {
  open: boolean;
} & (
    | {
      state: "create";
      data: null;
    }
    | {
      state: "edit" | "show";
      data: T;
    }
  );

//shared filter between resources
type IFilter<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  search: string;
};

type PagePropsWithFilter<T extends IFilter>
  = PageProps & {
    filter: T
  }


export interface IFilterProduct extends IFilter {
  stock: number | 'out';
  orderBy: "name" |
  "name-desc" |
  "created_at" |
  "created_at-desc" |
  "updated_at" |
  "updated_at-desc" |
  "stock-highest" |
  "stock-lowest";
}

export interface IFilterBill extends IFilter { }

export interface IFilterCheckout extends IFilter {
  barcode: string;
}


export interface IDashboard {
  cards: {
    sales: { value: number; increase: number }; //Total amount of bills' total-price (tax included) (last 24 hours)
    bills: { value: number; increase: number }; //number of bills (last 7 days)
    productsCount: number; //number of products (all time).
    cashPaymentPercentage: number; //percentage of using cash payment method (last 7 days)
  };
  charts: {
    billsDailyCount: [number, number, number, number, number, number, number];
    monthlySales: [number, number, number, number, number, number, number, number, number, number, number, number];
    accountsBillsDailyCount: { account: string; bills: number }[];
  },
  productsOutOfStock: ILaravelPaginate<IProduct>;
}

interface ICustomer extends CreatedUpdated {
  id: number;
  billable_type: string;//"App\Models\Business"
  paddle_id: string;
  name: string;
  email: string;
  trial_ends_at: string;
  billable_id: string;
}

// type CheckoutRes = {
//   items: { priceId: string, quantity: number }[];
//   customer: ICustomer;
//   custom: object[];
//   returnUrl: string;
// }

export type CheckoutOptions = {
  settings: {
    displayMode: string;
    frameStyle: string;
    successUrl: string;
    theme: 'light' | 'dark';
    frameTarget: string;
    frameInitialHeight: string;
  },
  items: { priceId: string, quantity: number }[];
  customer: { id: string; },
}

export type Plan = 'Advanced' | 'Enhanced' | 'Basic';
export type PlansMaxResources = {
  basic: {
    accounts: number,
    products: number,
    bills: number,
  },
  enhanced: {
    accounts: number,
    products: number,
    bills: number,
  },
  advanced: {
    accounts: number,
    products: number,
    bills: number,
  },
};

export type ISubscriptionLinks = {
  basic: { monthly: CheckoutOptions, annually: CheckoutOptions } | null;
  enhanced: { monthly: CheckoutOptions, annually: CheckoutOptions } | null;
  advanced: { monthly: CheckoutOptions, annually: CheckoutOptions } | null;
  /**
   * Business's progress reached.
   */
  progress: {
    accounts: { reached: number; max: number };
    products: { reached: number; max: number };
    bills: { reached: number; max: number };
  } | null;
  subscribedTo: Plan | 'Trial' | null;//Trail is not Plan. null means not subscribed
  onTrial: string | null;//trial ends date if on trial otherwise null
  /**
   * Recurring: Active sub and not trail nor grace period.
   * Canceled: Was active sub but has canceled now.
   * Grace Period: Canceled but still active until expires.
   * Past Due: payment failed, customer should update payment method.
   */
  state: 'Recurring' | 'Canceled' | 'Grace Period' | 'Past Due' | 'Paused' | null;
  lastPayment: {
    amount: number;
    currency: string;
    date: string;
  } | null;
  nextPayment: {
    amount: number;
    currency: string;
    date: string;
  } | null;
  gracePeriodExpiresAt: string | null;//date
} & ({
  subscribedTo: 'Advanced';
  basic: { monthly: CheckoutOptions, annually: CheckoutOptions };
  enhanced: { monthly: CheckoutOptions, annually: CheckoutOptions };
  advanced: null;
} | {
  subscribedTo: 'Enhanced';
  basic: { monthly: CheckoutOptions, annually: CheckoutOptions };
  enhanced: null;
  advanced: { monthly: CheckoutOptions, annually: CheckoutOptions };
} | {
  subscribedTo: 'Basic';
  basic: null;
  enhanced: { monthly: CheckoutOptions, annually: CheckoutOptions };
  advanced: { monthly: CheckoutOptions, annually: CheckoutOptions };
} | {
  subscribedTo: 'Trial' | null;
  basic: { monthly: CheckoutOptions, annually: CheckoutOptions };
  enhanced: { monthly: CheckoutOptions, annually: CheckoutOptions };
  advanced: { monthly: CheckoutOptions, annually: CheckoutOptions };
})