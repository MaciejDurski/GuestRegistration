import {
  arrivalDate,
  departureDate
} from '@/components/GuestRegistration/utils/arrivalAndDepartureDates'
import { createSlice } from '@reduxjs/toolkit'
import { GuestRegistrationFormProps } from './guestInterfaces'

const initialState: GuestRegistrationFormProps = {
  firstName: '',
  lastName: '',
  email: '',
  tel: '',
  arrival: arrivalDate,
  departure: departureDate,
  accomodationComment: '',
  presents: false,
  ownsPc: false,
  speechLength: '0-15',
  specialNeeds: ''
}

export const guestFormSlice = createSlice({
  name: 'guestForm',
  initialState,
  reducers: {}
})

export default guestFormSlice.reducer
