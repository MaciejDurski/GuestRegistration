import { FormType } from '@/redux/enums/formType';
import { Status } from '@/redux/enums/status';
import { useAppDispatch } from '@/redux/store';
import { deleteUserAction, editUserAction } from '@/redux/users/actions';
import { IUser, UserFormProps } from '@/redux/users/interfaces';
import { Box, Modal } from '@mui/material';
import { t } from 'i18next';
import { Dispatch, SetStateAction, useState } from 'react';
import UserForm from '../UserForm/UserForm.component';

interface IProps {
  currentRow: IUser | null;
  setCurrentRow: Dispatch<SetStateAction<IUser | null>>;
}

const UserEditModal = ({ currentRow, setCurrentRow }: IProps) => {
  const [formSubmitStatus, setFormSubmitStatus] = useState<Status>(Status.IDLE);
  const dispatch = useAppDispatch();

  const editUser = async (
    values: UserFormProps,
    userId: string | undefined
  ) => {
    const result =
      userId && (await dispatch(editUserAction({ id: userId, ...values })));
    if (!result) {
      setFormSubmitStatus(Status.FAILED);
    } else {
      setFormSubmitStatus(Status.SUCCEEDED);
    }
  };

  const deleteUser = async (userId: string) => {
    if (window.confirm(t<string>('validation.deleteUser'))) {
      const result = await dispatch(deleteUserAction(userId));
      if (!result) {
        setFormSubmitStatus(Status.FAILED);
      } else {
        setFormSubmitStatus(Status.SUCCEEDED);
      }
    }
  };

  return (
    <Modal
      open={!!currentRow}
      onClose={() => {
        setFormSubmitStatus(Status.IDLE);
        setCurrentRow(null);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        position="absolute"
        sx={{
          transform: 'translate(-50%, -50%)',
        }}
        top="50%"
        left="50%"
        p={4}
        width="320px"
        borderRadius={2}
        boxShadow="10"
        bgcolor="background.paper"
      >
        <UserForm
          formType={FormType.EDIT}
          formSubmitStatus={formSubmitStatus}
          editUser={editUser}
          deleteUser={deleteUser}
          currentRow={currentRow}
        />
      </Box>
    </Modal>
  );
};

export default UserEditModal;
