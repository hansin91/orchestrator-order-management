import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class CategoryService {
  constructor(@Inject('CATEGORY_SERVICE') private readonly clientService: ClientProxy) {}

  addCategory(payload: IPayload) {
    const pattern = { cmd: 'add-category'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  saveCategory(payload: IPayload) {
    const pattern = { cmd: 'save-category'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadCategories(payload: IPayload) {
    const pattern = {cmd: 'load-categories'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadShopeeCategories(payload: IPayload) {
    const pattern = {cmd: 'load-shopee-categories'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadCategory(payload: IPayload) {
    const pattern = { cmd: 'load-category'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  deleteCategory(payload: IPayload) {
    const pattern = { cmd: 'delete-category'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadCategoryAttributes(payload: IPayload) {
    const pattern = { cmd: 'load-category-attributes'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadShopeeCategoryAttributes(payload: IPayload) {
    const pattern = { cmd: 'load-shopee-category-attributes'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}