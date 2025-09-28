// import { FullUser } from "./authModel";

//Response Models

export interface LoginResponse {
  success: true;
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface EnrollResponse {
  success: true;
  data: null;
  message: string;
}

//Request Models

export interface LoginRequest {
  email: string;
  password: string;
}
