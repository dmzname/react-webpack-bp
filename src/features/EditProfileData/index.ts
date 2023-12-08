export { ProfileEditModal } from './ui/ProfileEditModal/ProfileEditModal';

export {
    editProfileReducer,
    editProfileActions
} from './model/slice/editProfileSlice';

export type { IProfileData } from './model/types/profileData';

export { getProfileFormData } from './model/selectors/getProfileFormData/getProfileFormData';

export { updateProfileData } from '_entities/Profile/model/services/updateProfileData/updateProfileData';