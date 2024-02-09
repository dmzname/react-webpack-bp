import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { CommentItem, IComment } from "_entities/Comment";
import { useSelector } from "react-redux";
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from "features/ArticleCommentList/model/selectors/comments";

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
}

export const CommentList = ({ className, comments }: ICommentListProps) => {
    const { t } = useTranslation();
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const isError = useSelector(getArticleCommentsError);

    if (isError) {
        return (
            <div className={ classNames(cls.root, {}, [ className ]) }>
                ERROR
            </div>
        );
    }

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            {comments?.length ? comments.map((comment, index) => <CommentItem key={ index } isLoading={ isLoading }
                comment={ comment }
                className={ cls.comment }/>) : null}
        </div>
    );
};