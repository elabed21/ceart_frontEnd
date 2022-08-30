import {ApiResourceInterface} from './api-resource.interface';

export class ProductProfileModel implements ApiResourceInterface {
  constructor(
    public id: number,
    public email: string,
    public status: string,
    public fullname: string,
    public shop_name: string,
    public adress: string,
    public phone: string,
    public products: any,
    public pictures: any,
    public shopname: string,
    public subResourceUri: string) {

  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getCollectionUri(): string {
    return 'seller';
  }

  getItemUri(): string {
    return 'seller/' + this.id;
  }

  getSubResourceUri(): string {
    return this.subResourceUri;
  }

  setSubResourceUri(subResourceUri: string): void {
    this.subResourceUri = subResourceUri;
  }
}
