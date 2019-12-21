import { __assign, __extends } from "tslib";
import { ApolloError, NetworkStatus } from 'apollo-client';
import { equal as isEqual } from '@wry/equality';
import { DocumentType } from '@apollo/react-common';
import { OperationData } from './OperationData';

var QueryData = function (_super) {
  __extends(QueryData, _super);

  function QueryData(_a) {
    var options = _a.options,
        context = _a.context,
        forceUpdate = _a.forceUpdate;

    var _this = _super.call(this, options, context) || this;

    _this.previousData = {};
    _this.currentObservable = {};
    _this.runLazy = false;

    _this.runLazyQuery = function (options) {
      _this.cleanup();

      _this.runLazy = true;
      _this.lazyOptions = options;

      _this.forceUpdate();
    };

    _this.getExecuteResult = function () {
      var result = _this.getQueryResult();

      _this.startQuerySubscription();

      return result;
    };

    _this.obsRefetch = function (variables) {
      return _this.currentObservable.query.refetch(variables);
    };

    _this.obsFetchMore = function (fetchMoreOptions) {
      return _this.currentObservable.query.fetchMore(fetchMoreOptions);
    };

    _this.obsUpdateQuery = function (mapFn) {
      return _this.currentObservable.query.updateQuery(mapFn);
    };

    _this.obsStartPolling = function (pollInterval) {
      _this.currentObservable && _this.currentObservable.query && _this.currentObservable.query.startPolling(pollInterval);
    };

    _this.obsStopPolling = function () {
      _this.currentObservable && _this.currentObservable.query && _this.currentObservable.query.stopPolling();
    };

    _this.obsSubscribeToMore = function (options) {
      return _this.currentObservable.query.subscribeToMore(options);
    };

    _this.forceUpdate = forceUpdate;
    return _this;
  }

  QueryData.prototype.execute = function () {
    this.refreshClient();

    var _a = this.getOptions(),
        skip = _a.skip,
        query = _a.query;

    if (skip || query !== this.previousData.query) {
      this.removeQuerySubscription();
      this.previousData.query = query;
    }

    this.updateObservableQuery();
    if (this.isMounted) this.startQuerySubscription();
    return this.getExecuteSsrResult() || this.getExecuteResult();
  };

  QueryData.prototype.executeLazy = function () {
    return !this.runLazy ? [this.runLazyQuery, {
      loading: false,
      networkStatus: NetworkStatus.ready,
      called: false,
      data: undefined
    }] : [this.runLazyQuery, this.execute()];
  };

  QueryData.prototype.fetchData = function () {
    var options = this.getOptions();
    if (options.skip || options.ssr === false) return false;
    var obs = this.currentObservable.query;
    var currentResult = obs.getCurrentResult();
    return currentResult.loading ? obs.result() : false;
  };

  QueryData.prototype.afterExecute = function (_a) {
    var _this = this;

    var _b = (_a === void 0 ? {} : _a).lazy,
        lazy = _b === void 0 ? false : _b;
    this.isMounted = true;

    if (!lazy || this.runLazy) {
      this.handleErrorOrCompleted();
      setTimeout(function () {
        _this.currentObservable.query && _this.currentObservable.query.resetQueryStoreErrors();
      });
    }

    this.previousOptions = this.getOptions();
    return this.unmount.bind(this);
  };

  QueryData.prototype.cleanup = function () {
    this.removeQuerySubscription();
    delete this.currentObservable.query;
    delete this.previousData.result;
  };

  QueryData.prototype.getOptions = function () {
    var options = _super.prototype.getOptions.call(this);

    if (this.lazyOptions) {
      options.variables = __assign(__assign({}, options.variables), this.lazyOptions.variables);
      options.context = __assign(__assign({}, options.context), this.lazyOptions.context);
    }

    if (this.runLazy) {
      delete options.skip;
    }

    return options;
  };

  QueryData.prototype.getExecuteSsrResult = function () {
    var treeRenderingInitiated = this.context && this.context.renderPromises;
    var ssrDisabled = this.getOptions().ssr === false;
    var fetchDisabled = this.refreshClient().client.disableNetworkFetches;
    var ssrLoading = {
      loading: true,
      networkStatus: NetworkStatus.loading,
      called: true,
      data: undefined
    };

    if (ssrDisabled && (treeRenderingInitiated || fetchDisabled)) {
      return ssrLoading;
    }

    var result;

    if (treeRenderingInitiated) {
      result = this.context.renderPromises.addQueryPromise(this, this.getExecuteResult) || ssrLoading;
    }

    return result;
  };

  QueryData.prototype.prepareObservableQueryOptions = function () {
    var options = this.getOptions();
    this.verifyDocumentType(options.query, DocumentType.Query);
    var displayName = options.displayName || 'Query';

    if (this.context && this.context.renderPromises && (options.fetchPolicy === 'network-only' || options.fetchPolicy === 'cache-and-network')) {
      options.fetchPolicy = 'cache-first';
    }

    return __assign(__assign({}, options), {
      displayName: displayName,
      context: options.context,
      metadata: {
        reactComponent: {
          displayName: displayName
        }
      }
    });
  };

  QueryData.prototype.initializeObservableQuery = function () {
    if (this.context && this.context.renderPromises) {
      this.currentObservable.query = this.context.renderPromises.getSSRObservable(this.getOptions());
    }

    if (!this.currentObservable.query) {
      var observableQueryOptions = this.prepareObservableQueryOptions();
      this.previousData.observableQueryOptions = __assign(__assign({}, observableQueryOptions), {
        children: null
      });
      this.currentObservable.query = this.refreshClient().client.watchQuery(__assign({}, observableQueryOptions));

      if (this.context && this.context.renderPromises) {
        this.context.renderPromises.registerSSRObservable(this.currentObservable.query, observableQueryOptions);
      }
    }
  };

  QueryData.prototype.updateObservableQuery = function () {
    if (!this.currentObservable.query) {
      this.initializeObservableQuery();
      return;
    }

    var newObservableQueryOptions = __assign(__assign({}, this.prepareObservableQueryOptions()), {
      children: null
    });

    if (!isEqual(newObservableQueryOptions, this.previousData.observableQueryOptions)) {
      this.previousData.observableQueryOptions = newObservableQueryOptions;
      this.currentObservable.query.setOptions(newObservableQueryOptions).catch(function () {});
    }
  };

  QueryData.prototype.startQuerySubscription = function () {
    var _this = this;

    if (this.currentObservable.subscription || this.getOptions().skip) return;
    var obsQuery = this.currentObservable.query;
    this.currentObservable.subscription = obsQuery.subscribe({
      next: function (_a) {
        var loading = _a.loading,
            networkStatus = _a.networkStatus,
            data = _a.data;
        var previousResult = _this.previousData.result;

        if (previousResult && previousResult.loading === loading && previousResult.networkStatus === networkStatus && isEqual(previousResult.data, data)) {
          return;
        }

        _this.forceUpdate();
      },
      error: function (error) {
        _this.resubscribeToQuery();

        if (!error.hasOwnProperty('graphQLErrors')) throw error;
        var previousResult = _this.previousData.result;

        if (previousResult && previousResult.loading || !isEqual(error, _this.previousData.error)) {
          _this.previousData.error = error;

          _this.forceUpdate();
        }
      }
    });
  };

  QueryData.prototype.resubscribeToQuery = function () {
    this.removeQuerySubscription();
    var lastError = this.currentObservable.query.getLastError();
    var lastResult = this.currentObservable.query.getLastResult();
    this.currentObservable.query.resetLastResults();
    this.startQuerySubscription();
    Object.assign(this.currentObservable.query, {
      lastError: lastError,
      lastResult: lastResult
    });
  };

  QueryData.prototype.getQueryResult = function () {
    var result = this.observableQueryFields();
    var options = this.getOptions();

    if (options.skip) {
      result = __assign(__assign({}, result), {
        data: undefined,
        error: undefined,
        loading: false,
        called: true
      });
    } else {
      var currentResult = this.currentObservable.query.getCurrentResult();
      var loading = currentResult.loading,
          partial = currentResult.partial,
          networkStatus = currentResult.networkStatus,
          errors = currentResult.errors;
      var error = currentResult.error,
          data = currentResult.data;

      if (errors && errors.length > 0) {
        error = new ApolloError({
          graphQLErrors: errors
        });
      }

      result = __assign(__assign({}, result), {
        loading: loading,
        networkStatus: networkStatus,
        error: error,
        called: true
      });

      if (loading) {
        var previousData = this.previousData.result && this.previousData.result.data;
        result.data = previousData && data ? __assign(__assign({}, previousData), data) : previousData || data;
      } else if (error) {
        Object.assign(result, {
          data: (this.currentObservable.query.getLastResult() || {}).data
        });
      } else {
        var fetchPolicy = this.currentObservable.query.options.fetchPolicy;
        var partialRefetch = options.partialRefetch;

        if (partialRefetch && !data && partial && fetchPolicy !== 'cache-only') {
          Object.assign(result, {
            loading: true,
            networkStatus: NetworkStatus.loading
          });
          result.refetch();
          return result;
        }

        result.data = data;
      }
    }

    result.client = this.client;
    this.previousData.loading = this.previousData.result && this.previousData.result.loading || false;
    this.previousData.result = result;
    return result;
  };

  QueryData.prototype.handleErrorOrCompleted = function () {
    var obsQuery = this.currentObservable.query;
    if (!obsQuery) return;

    var _a = obsQuery.getCurrentResult(),
        data = _a.data,
        loading = _a.loading,
        error = _a.error;

    if (!loading) {
      var _b = this.getOptions(),
          query = _b.query,
          variables = _b.variables,
          onCompleted = _b.onCompleted,
          onError = _b.onError;

      if (this.previousOptions && !this.previousData.loading && isEqual(this.previousOptions.query, query) && isEqual(this.previousOptions.variables, variables)) {
        return;
      }

      if (onCompleted && !error) {
        onCompleted(data);
      } else if (onError && error) {
        onError(error);
      }
    }
  };

  QueryData.prototype.removeQuerySubscription = function () {
    if (this.currentObservable.subscription) {
      this.currentObservable.subscription.unsubscribe();
      delete this.currentObservable.subscription;
    }
  };

  QueryData.prototype.observableQueryFields = function () {
    var observable = this.currentObservable.query;
    return {
      variables: observable.variables,
      refetch: this.obsRefetch,
      fetchMore: this.obsFetchMore,
      updateQuery: this.obsUpdateQuery,
      startPolling: this.obsStartPolling,
      stopPolling: this.obsStopPolling,
      subscribeToMore: this.obsSubscribeToMore
    };
  };

  return QueryData;
}(OperationData);

export { QueryData };