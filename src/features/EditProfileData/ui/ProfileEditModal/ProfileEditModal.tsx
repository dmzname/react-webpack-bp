import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from "shared/ui/Modal/Modal";
import { ProfileEditForm } from "../ProfileEditForm/ProfileEditForm";

interface IProfileEditModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileEditModal = ({ className, isOpen, onClose }: IProfileEditModalProps) => {
    const { t } = useTranslation();

    return (
        <Modal
            lazy
            isOpen={ isOpen }
            onClose={ onClose }
            className={ classNames('', {}, [ className ]) }
        >
            <ProfileEditForm onClose={ onClose }/>
        </Modal>
    );
};