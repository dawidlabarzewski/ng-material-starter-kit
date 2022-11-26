import {UserNameModel} from "./user-name.model";
import {UserAddressModel} from "./user-address.model";

export interface UserModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: UserNameModel;
  readonly address: UserAddressModel;
  readonly phone: string;
}
