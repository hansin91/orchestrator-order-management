import { Request } from 'express'

export const parseToken = (request: Request) => {
  const {headers: {authorization}} = request
  const [,token] = authorization.split(' ')
  return token
}