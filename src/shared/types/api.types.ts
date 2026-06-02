export interface ApiResponse<T> {
  isSuccessful: boolean;
  result: T;
  exceptionMessage: string;
  statusCode: number;
}
