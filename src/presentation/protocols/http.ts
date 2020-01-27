export interface HttpResponse {
  statusCode: number
  body: any
}
// ? indica que é opcional como no caso de rotas get
export interface HttpRequest {
  body?: any
}
