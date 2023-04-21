import { GuestRegistrationFormProps } from '@/components/GuestRegistration/GuestRegistration.component'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

const initialState: GuestRegistrationFormProps = {
  firstName: '',
  lastName: '',
  email: '',
  tel: '',
  arrival: new Date(),
  departure: new Date(),
  accomodationComment: '',
  presents: false,
  ownsPc: false,
  speechLength: '0-15',
  specialNeeds: ''
}

export const guestFormSlice = createSlice({
  name: 'guestFormState',
  initialState,
  reducers: {}
})

export const {} = guestFormSlice.actions
export default guestFormSlice.reducer

export const guestFormLayout = (state: RootState) => state.guestForm
