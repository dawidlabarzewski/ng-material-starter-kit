import {RegisterNameModel} from "./register-name.model";
import {RegisterAddressModel} from "./register-address.model";

export interface RegisterModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: RegisterNameModel;
  readonly address: RegisterAddressModel;
  readonly phone: string;
}
