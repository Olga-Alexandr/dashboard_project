import { Advert } from "./advert"

export interface DataUser {
  id: string;
  name: string;
  role: string;
  adverts: Advert[];
  registeredTime: Date;
}
