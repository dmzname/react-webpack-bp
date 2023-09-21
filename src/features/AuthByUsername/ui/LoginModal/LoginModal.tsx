import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface ILoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = (props: ILoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            lazy
            isOpen={ isOpen }
            onClose={ onClose }
            className={ classNames('', {}, [ className ]) }
        >
            { //Понять почему не размонтируется форма
                isOpen && <LoginFormAsync/>
            }
        </Modal>
    );
};
