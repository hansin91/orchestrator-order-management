import { Injectable } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { User } from '@interfaces'

@Injectable()
export class TokenService {

  generateApiToken(user: User) {
    const payloadData = {
      id: user.id,
      email: user.email ? user.email : '',
      username: user.username ? user.username : ''
    }
    const token = jwt.sign(payloadData, process.env.SECRET_KEY, { expiresIn: '10d' })
    return token
  }
}