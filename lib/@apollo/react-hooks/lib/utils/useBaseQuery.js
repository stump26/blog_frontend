import { __assign } from "tslib";
import { useContext, useEffect, useReducer, useRef } from 'react';
import { getApolloContext } from '@apollo/react-common';
import { QueryData } from '../data/QueryData';
import { useDeepMemo } from './useDeepMemo';
export function useBaseQuery(query, options, lazy) {
  if (lazy === void 0) {
    lazy = false;
  }

  var context = useContext(getApolloContext());

  var _a = useReducer(function (x) {
    return x + 1;
  }, 0),
      tick = _a[0],
      forceUpdate = _a[1];

  var updatedOptions = options ? __assign(__assign({}, options), {
    query: query
  }) : {
    query: query
  };
  var queryDataRef = useRef();

  if (!queryDataRef.current) {
    queryDataRef.current = new QueryData({
      options: updatedOptions,
      context: context,
      forceUpdate: forceUpdate
    });
  }

  var queryData = queryDataRef.current;
  queryData.setOptions(updatedOptions);
  queryData.context = context;
  var memo = {
    options: __assign(__assign({}, updatedOptions), {
      onError: undefined,
      onCompleted: undefined
    }),
    context: context,
    tick: tick
  };
  var result = useDeepMemo(function () {
    return lazy ? queryData.executeLazy() : queryData.execute();
  }, memo);
  var queryResult = lazy ? result[1] : result;
  useEffect(function () {
    return queryData.afterExecute({
      lazy: lazy
    });
  }, [queryResult.loading, queryResult.networkStatus, queryResult.error, queryResult.data]);
  useEffect(function () {
    return function () {
      return queryData.cleanup();
    };
  }, []);
  return result;
}