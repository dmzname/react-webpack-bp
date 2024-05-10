import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { useTranslation } from "react-i18next";
import { ArticleView } from "_entities/Article";
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

interface IArticleViewSelectorProps {
    className?: string;
    veiw: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL ,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG ,
        icon: ListIcon
    }
];

export const ArticleViewSelector = (props: IArticleViewSelectorProps) => {
    const { className, onViewClick } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            {viewTypes.map((viewType, i) => {
                return (
                    <Button key={ i } onClick={ onClick(viewType.view) } theme={ ButtonTheme.CLEAR }>
                        <Icon Svg={ viewType.icon } />
                    </Button>
                );
            })}
        </div>
    );
};