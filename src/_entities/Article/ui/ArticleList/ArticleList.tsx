import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface IArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = (props: IArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL } = props;

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem key={ article.id } article={ article }  veiw={ view }/>
        );
    };

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
        </div>
    );
};