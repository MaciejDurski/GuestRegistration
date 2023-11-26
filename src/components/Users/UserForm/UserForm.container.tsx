import { FormType } from '@/redux/enums/formType';
import { Status } from '@/redux/enums/status';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { createUserAction } from '@/redux/users/actions';
import { ResetUserForm, UserRegisterFormProps } from '@/redux/users/interfaces';
import UserForm from './UserForm.component';

const UserFormContainer = () => {
  const errorMessage = useAppSelector((state) => state.users.error);
  const formSubmitStatus = useAppSelector((state) => state.users.status);
  const dispatch = useAppDispatch();

  const createUser = async (
    values: UserRegisterFormProps,
    resetForm: ResetUserForm
  ) => {
    await dispatch(createUserAction(values));

    if (formSubmitStatus === Status.SUCCEEDED) resetForm();
  };

  return (
    <UserForm
      formType={FormType.CREATE}
      createUser={createUser}
      formSubmitStatus={formSubmitStatus}
      errorMessage={errorMessage}
    />
  );
};

export default UserFormContainer;
