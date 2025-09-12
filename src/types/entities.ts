export interface CartItem {
  id: number;
  product: {
    id: number;
    name: string;
  };
  quantity: number;
  total_price: number;
}

export interface User {
  user_id: number;
  user_role: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthToken {
  refresh: string;
  access: string;
}

export interface TwoFA {
  user_id: number;
  otp_code: string;
}
