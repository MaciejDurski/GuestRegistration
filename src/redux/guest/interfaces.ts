export enum SpeechLength {
  min0_15 = '0-15',
  min15_30 = '15-30',
  min30_45 = '30-45',
  min45_60 = '45-60',
  min60_75 = '60-75',
  min75_90 = '75-90',
  none = '',
}

export interface IGuest {
  id: string;
  firstName: string;
  lastName: string;
  checkIn?: boolean;
  type?: string;
  organizer?: number;
  email: string;
  tel: string;
  arrival: Date;
  departure: Date;
  accommodation?: string;
  accomodationComment?: string;
  presents: boolean;
  ownsPc?: boolean;
  speechLength?: SpeechLength;
  specialNeeds?: string;
}

// export type GuestRegistrationFormProps = Omit<
//   IGuest,
//   'id' | 'checkIn' | 'type' | 'organizer' | 'accommodation'
// >;
export interface GuestRegistrationFormProps {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  arrival: { $d: Date } | undefined;
  departure: { $d: Date } | undefined;
  accomodationComment?: string;
  presents: boolean;
  ownsPc?: boolean;
  speechLength?: SpeechLength;
  specialNeeds?: string;
}
