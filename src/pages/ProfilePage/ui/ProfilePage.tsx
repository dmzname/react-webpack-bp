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
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useParams } from "react-router";
import { Page } from "shared/ui/Page";

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const profileData = useSelector(getProfileData);
    const profileError = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);

    useInitialEffect(() => {
        if(id) {
            dispatch(fetchProfileData(id || ''));
        }
    });

    useEffect(() => {
        if (profileData)
            dispatch(editProfileActions.initProfile(profileData));
    }, [ dispatch, profileData ]);

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <Page className={ classNames('', {}, [ className ]) }>
                <ProfileCard
                    profileData={ profileData }
                    profileError={ profileError }
                    profileIsLoading={ profileIsLoading }
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
