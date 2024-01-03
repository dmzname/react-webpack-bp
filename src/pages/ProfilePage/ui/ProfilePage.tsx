import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    ProfileCard,
    profileReducer
} from '_entities/Profile';
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { memo, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { editProfileActions } from "features/EditProfileData";

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileData);
    const profileError = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [ dispatch ]);

    useEffect(() => {
        if (profileData)
            dispatch(editProfileActions.initProfile(profileData));
    }, [ dispatch, profileData ]);

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames('', {}, [ className ]) }>
                <ProfileCard
                    profileData={ profileData }
                    profileError={ profileError }
                    profileIsLoading={ profileIsLoading }
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
