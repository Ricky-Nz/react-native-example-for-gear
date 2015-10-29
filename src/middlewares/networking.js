import _ from 'underscore';

export const CALL_API = 'Call Backend API';

export default store => next => action => {
    if (!action[CALL_API]) return next(action);

    let user = store.getState().user;
    let apiCall = action[CALL_API];
    const parmIndex = apiCall.url.indexOf(':userId');
    if (parmIndex > 0) {
        apiCall.url = apiCall.url.slice(0, parmIndex) + user.userId + apiCall.url.slice(parmIndex + 7);
    }

    let fetchConfig = {
        method: apiCall.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    if (apiCall.body) fetchConfig.body = JSON.stringify(apiCall.body);

    let qs = '';
    if (apiCall.token) {
        qs = `?access_token=${user.accessToken}`;
    }
    if (apiCall.query) {
        qs ? qs += '&' : '?';
        _.keys(apiCall.query).forEach(key => {
            qs += `${key}=${apiCall.query[key]}&`;
        });
    }

    next({ type: apiCall.action, finished: false, args: apiCall.args });
    fetch(`http://www.granny.io/api${apiCall.url}${qs}`, fetchConfig)
        .then(response => {
            return response.json();
        })
        .then(body => {
            next({
                type: apiCall.action,
                finished: true,
                result: body,
                args: apiCall.args
            });
        })
        .catch(error => {
            next({
                type: apiCall.action,
                finished: true,
                error: error,
                args: apiCall.args
            });
        });
}