import { IOwnerModel } from "@Models/index";
export interface IGetOwnersResponse {
	owners: IOwnerModel[];
}
export interface IGetOwnerResponse {
	owner: IOwnerModel;
}
export interface IPostOwnerRequest {
	name: string;
	mail: string;
}
export interface IPostOwnerResponse {
	owner: IOwnerModel;
}
