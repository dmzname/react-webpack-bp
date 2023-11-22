import { useTranslation } from 'react-i18next';

interface IProfileEditModalProps {
    className?: string;
}

export const ProfileEditForm = ({ className }: IProfileEditModalProps) => {
    const { t } = useTranslation();

    return (
        <div>FORM</div>
    );
};