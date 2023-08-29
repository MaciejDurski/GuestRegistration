export const translationsPL = {
  common: {
    actions: 'Akcje',
    address: 'Adres',
    admin: 'Admin',
    accommodation: 'Nocleg',
    accommodations: 'Noclegi',
    delete: 'Usuń',
    email: 'Email',
    firstName: 'Imię',
    guardian: 'Opiekun',
    guestRegistration: 'Rejestracja Gościa',
    guest: 'Gość',
    guests: 'Goście',
    hello: 'Cześć',
    lastName: 'Nazwisko',
    login: 'Zaloguj',
    logout: 'Wyloguj',
    no: 'Nie',
    none: 'Brak',
    name: 'Nazwa',
    nameAndSurrname: 'Imię i nazwisko',
    organizer: 'Organizator',
    organizers: 'Organizatorzy',
    password: 'Hasło',
    save: 'Zapisz',
    type: 'Typ',
    tel: 'Telefon',
    userPanel: 'Panel Organizatora',
    userForm: 'Rejestracja Organizatora',
    yes: 'Tak',
  },
  guest: {
    checkIn: 'Odprawa',
    accommodationNote: 'Notatka do noclegu',
    accommodation: 'Nocleg',
    presents: 'Prezentacja',
    ownComputer: 'Własny komputer',
    speechLength: 'Długość prezentacji (minuty)',
    specialRequirements: 'Specjalne wymagania',
  },
  validation: {
    deleteGuest: 'Czy jesteś pewny, że chcesz usunąć tego gościa?',
    deleteUser: 'Czy jesteś pewny, że chcesz usunąć tego organizatora?',
    deleteAccommodation: 'Czy jesteś pewny, że chcesz usunąć ten nocleg?',
  },
  formValidation: {
    addressTooShort: 'Adres musi się składać z ponad 2 liter',
    addressTooLong: 'Adres musi się składać z mniej niż 50 liter',
    addressRequired: 'Podaj Adres',
    firstNameTooShort: 'Imię musi się składać z ponad 2 liter',
    firstNameTooLong: 'Imię musi się składać z mniej niż 50 liter',
    firstNameRequired: 'Podaj imię',
    lastNameTooShort: 'Nazwisko musi się składać z ponad 2 liter',
    lastNameTooLong: 'Nazwisko musi się składać z mniej niż 50 liter',
    lastNameRequired: 'Podaj nazwisko',
    telRequired: 'Podaj numer telefonu',
    telTooShort: 'Numer telefonu musi się składać z więcej niż 8 znaków',
    telTooLong: 'Numer telefonu musi się składać z mniej niż 15 znaków',
    telLength: 'Numer telefonu musi się składać z 9 znaków',
    emailInvalid: 'Niepoprawny email',
    emailRequired: 'Podaj Email',
    passwordRequired: 'Podaj hasło',
    formSubmitMessageError: 'Coś poszło nie tak.',
    formSubmitMessageSuccess: 'Twój formularz został wysłany',
    formEditMessageSuccess: 'Dane pomyślnie edytowane',
    formMessageErrorUsedTel:
      'Organizator z podanym numerem telefonu już istnieje',
    formMessageErrorUsedEmail:
      'Organizator z podanym adresem email już istnieje',
  },
  guestForm: {
    guestForm: 'Formularz Gościa',
    arrivalDate: 'Data Przyjazdu',
    departureDate: 'Data Wyjazdu',
    accomodationComment: 'Komentarz odnośnie zakwaterowania',
    presents: 'Czy będziesz prezentować?',
    ownsPc: 'Czy będziesz miał własny komputer?',
    speechLengthHelperText: 'Mniej więcej jak długo będziesz prezentować?',
    min0_15: 'od 0 do 15',
    min15_30: 'od 15 do 30',
    min30_45: 'od 30 do 45',
    min45_60: 'od 45 do 60',
    min60_75: 'od 60 do 75',
    min75_90: 'od 75 do 90',
    specialNeeds: 'Twoje dodatkowe potrzeby',
    submit: 'Wyślij',
  },
  guestFormValidation: {
    arrivalRequired: 'Podaj datę przyjazdu',
    departureRequired: 'Podaj datę wyjazdu',
    dateTypeError: 'Data ma nieprawidłowy format',
    departureMin: 'Data wyjazdu musi być późniejsza od daty przyjazdu',
    commentTooLong: 'Komentarz musi się składać z mniej niż 500 liter',
  },
  userForm: {
    addUser: 'Dodaj Organizatora',
    editUser: 'Edytuj Dane Organizatora',
    isAdmin: 'Status Admina',
  },
  userFormValidation: {
    isAdminRequired: 'Podaj status organizatora',
  },
  accommodationForm: {
    addAccommodation: 'Dodaj Nocleg',
    editAccommodation: 'Edytuj Dane Noclegu',
  },
};
