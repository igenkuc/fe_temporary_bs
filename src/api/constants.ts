export const baseURL = 'https://backend.book-sharing.app.mddinternship.com/api';

export enum StatusCodes {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Endpoints {
  LOGIN = '/login',
  PROFILE = '/profile',
  BOOKS = '/books',
  
}