import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentItem.module.scss';
import { IComment } from "_entities/Comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ICommentItemProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentItem = ({ className, comment, isLoading }: ICommentItemProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return <div className={ classNames(cls.root, {}, [ className ]) }>
            <div className={ cls['comment-header'] }>
                <Skeleton width="30px" height="30px" border="100%" className={ cls.avatar }/>
                <Skeleton width="100px" height="16px" className={ cls['user-name'] }/>
            </div>
            <Skeleton width="500px" height="100px"/>
        </div>;
    }

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            <AppLink to={ RoutePath.profile + comment?.user.id } className={ cls['comment-header'] }>
                <Avatar size={ 30 } src={ comment?.user.avatar } className={ cls.avatar }/>
                <Text title={ comment?.user.username } titleStyles={ cls['user-name'] }/>
            </AppLink>
            <Text text={ comment?.text }/>
        </div>
    );
};