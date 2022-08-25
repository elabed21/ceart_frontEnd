import {ApiResourceInterface} from './api-resource.interface';

export class ProductModel implements ApiResourceInterface {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public price: number,
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
    return 'products';
  }

  getItemUri(): string {
    return 'products/' + this.id;
  }

  getSubResourceUri(): string {
    return this.subResourceUri;
  }

  setSubResourceUri(subResourceUri: string): void {
    this.subResourceUri = subResourceUri;
  }
}
