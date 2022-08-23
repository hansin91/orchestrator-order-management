import { Routes } from 'nest-router'
import { CheckerModule } from './mobile/order-checker/checker.module'

export const routes: Routes = [
  {
    path: '/checker',
    module: CheckerModule,
  }
]
