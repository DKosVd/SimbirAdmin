export interface IResponseLogin {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  user_id: string;
}

export interface IResponseAuth {
  username: string;
  type: string;
  id: string;
}
