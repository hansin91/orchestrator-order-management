import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { IPayload } from '@interfaces'

@Injectable()
export class ProductService {
  constructor(@Inject('PRODUCT_SERVICE') private readonly clientService: ClientProxy) {}

  loadShopeeV2Products(payload: IPayload) {
    const pattern = {cmd: 'load-shopee-v2-products'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  loadProductSummary(payload: IPayload) {
    const pattern = { cmd: 'load-product-summary'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  loadUnmappedProducts(payload: IPayload) {
    const pattern = {cmd: 'load-unmapped-products'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  loadProductStores(payload: IPayload) {
    const pattern = { cmd: 'load-product-stores'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  loadProducts(payload: IPayload) {
    const pattern = { cmd: 'load-products' }
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  loadProduct(payload: IPayload) {
    const pattern = { cmd: 'load-product-detail' }
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  setProductGroup(payload: IPayload) {
    const pattern = { cmd: 'set-product-group' }
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  editProductStore(payload: IPayload) {
    const pattern = { cmd: 'edit-product-store' }
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  createProductStore(payload: IPayload) {
    const pattern = { cmd: 'create-product-store' }
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  mappingProducts(payload: IPayload) {
    const pattern = { cmd: 'mapping-products'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }
}