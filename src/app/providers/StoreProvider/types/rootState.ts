import { IUserSchema } from "_entities/User";
import { ILoginSchema } from "features/AuthByUsername/models/types/loginSchema";
import { IProfileSchema } from "_entities/Profile";
import { AxiosInstance } from "axios";
import { IProfileData } from "features/EditProfileData";
import { IArticleDetailsSchema } from "_entities/Article";
import { IArticleCommentsSchema } from "features/ArticleCommentList";
import { IAddNewComment } from "features/AddNewComment";

export interface IRootState {
    user: IUserSchema;
    editProfile: IProfileData;
    articleDetails: IArticleDetailsSchema;

    // Async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleComments?: IArticleCommentsSchema;
    addNewComment?: IAddNewComment;
}

export type RootStateKey = keyof IRootState;

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IRootState;
}