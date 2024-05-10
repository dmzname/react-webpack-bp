import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddNewComment.module.scss';
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { getAddNewCommentError, getAddNewCommentText } from "../model/selectors/addNewCommentSelectors";
import { ChangeEvent, useCallback } from 'react';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { addNewCommentActions, addNewCommentReducer } from "../model/slices/addNewCommentSlice";

interface IAddNewCommentProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer
};

const AddNewComment = ({ className, onSendComment }: IAddNewCommentProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);

    const onCommentTextChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(addNewCommentActions.setText(e.target.value));
    }, [ dispatch ]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        dispatch(addNewCommentActions.setText(''));
    }, [ dispatch, onSendComment, text ]);

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.root, {}, [ className ]) }>
                <textarea
                    placeholder={ t('Введите текст комментария') }
                    value={ text || '' }
                    onChange={ onCommentTextChange }
                />
                <Button theme={ ButtonTheme.OUTLINE } onClick={ onSendHandler } >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddNewComment;