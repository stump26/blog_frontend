import { ApolloQueryResult } from 'apollo-client';
import { ApolloContextValue, QueryResult } from '@apollo/react-common';
import { QueryOptions, QueryTuple } from '../types';
import { OperationData } from './OperationData';
export declare class QueryData<TData, TVariables> extends OperationData {
    private previousData;
    private currentObservable;
    private forceUpdate;
    private runLazy;
    private lazyOptions?;
    constructor({ options, context, forceUpdate }: {
        options: QueryOptions<TData, TVariables>;
        context: ApolloContextValue;
        forceUpdate: any;
    });
    execute(): QueryResult<TData, TVariables>;
    executeLazy(): QueryTuple<TData, TVariables>;
    fetchData(): Promise<ApolloQueryResult<any>> | boolean;
    afterExecute({ lazy }?: {
        lazy?: boolean;
    }): () => void;
    cleanup(): void;
    getOptions(): any;
    private runLazyQuery;
    private getExecuteResult;
    private getExecuteSsrResult;
    private prepareObservableQueryOptions;
    private initializeObservableQuery;
    private updateObservableQuery;
    private startQuerySubscription;
    private resubscribeToQuery;
    private getQueryResult;
    private handleErrorOrCompleted;
    private removeQuerySubscription;
    private obsRefetch;
    private obsFetchMore;
    private obsUpdateQuery;
    private obsStartPolling;
    private obsStopPolling;
    private obsSubscribeToMore;
    private observableQueryFields;
}