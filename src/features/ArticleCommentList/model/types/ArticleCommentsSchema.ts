import { EntityState } from "@reduxjs/toolkit";
import { IComment } from "_entities/Comment";

export interface IArticleCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}