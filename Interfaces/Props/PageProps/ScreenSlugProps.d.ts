import { IGetSeatsResponse } from "@Interfaces/Api/SeatInterfaces";
import { IScreenModel, ISeatModel } from "@Interfaces/Models";

export interface IScreenSlugProps {
	screen: IScreenModel;
	bookedSeats: ISeatModel[];
}
