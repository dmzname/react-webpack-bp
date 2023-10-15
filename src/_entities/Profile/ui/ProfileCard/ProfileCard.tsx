import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    const profileErorr = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            TEST
        </div>
    );
};