import {  LoginRequest, UserRegistrationData } from 'src/types/user';

import { instance } from '../instance';

export const login = (values: LoginRequest) =>
  instance.post<string>('/login', values);

export const register = (values: UserRegistrationData) =>
  instance.post<string>('/register', values)
