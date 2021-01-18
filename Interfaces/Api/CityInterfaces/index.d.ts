import { ICityModel } from "@Models/index";
export interface IGetCitiesResponse {
	cities: ICityModel[];
}
export interface IGetCityResponse {
	city: ICityModel;
}
export interface IPostCityRequest {
	name: string;
}
export interface IPostCityResponse {
	city: ICityModel;
}
