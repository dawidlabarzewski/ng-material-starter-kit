export interface PublicHolidayModel {
  readonly date: string;
  readonly localName: string;
  readonly name: string;
  readonly countryCode: string;
  readonly fixed: boolean;
  readonly global: boolean;
  readonly countries: string[]|null;
  readonly launchYear: number|null;
  readonly type: string;
}
