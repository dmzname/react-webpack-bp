import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { CommentItem } from "_entities/Comment";
import { useSelector } from "react-redux";
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from "features/ArticleCommentList/model/selectors/comments";
import { getComments } from "../../model/slices/articleCommentsSlice";

interface ICommentListProps {
    className?: string;
}

export const CommentList = ({ className }: ICommentListProps) => {
    const { t } = useTranslation();

    const comments = useSelector(getComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const isError = useSelector(getArticleCommentsError);

    if (isError) {
        return (
            <div className={ classNames(cls.root, {}, [ className ]) }>
                ERROR
            </div>
        );
    }

    return comments?.length ? (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            { comments.map((comment, index) => <CommentItem key={ index } isLoading={ isLoading }
                comment={ comment }
                className={ cls.comment }/>) }
        </div>
    ) : <p>{t('Комментариев нет')}</p>;
};