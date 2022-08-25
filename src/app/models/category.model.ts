import {ApiResourceInterface} from './api-resource.interface';

export class CategoryModel implements ApiResourceInterface {
  constructor(
    public id: number,
    public name: string,
    public products: any,
    public subResourceUri: string) {

  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getCollectionUri(): string {
    return 'category';
  }

  getItemUri(): string {
    return 'category/' + this.id;
  }

  getSubResourceUri(): string {
    return this.subResourceUri;
  }

  setSubResourceUri(subResourceUri: string): void {
    this.subResourceUri = subResourceUri;
  }
}
