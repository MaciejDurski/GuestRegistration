export interface IGuest{
  id:number
  firstName: string
  lastName: string
  checkIn?:boolean
  type?:string
  organizer?:number
  email: string
  tel: string
  arrival: Date
  departure: Date
  accommodation?:string
  accomodationComment?: string
  presents: boolean
  ownsPc?: boolean
  speechLength?: string
  specialNeeds?: string
}

export interface GuestRegistrationFormProps extends Omit<IGuest,'id'|'checkIn'|'type'|'organizer'|'accommodation'>{}
