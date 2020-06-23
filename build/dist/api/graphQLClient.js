var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_ENDPOINTS } from "./httpUrl";
import { GraphQLClient } from "graphql-request";
import { isOrNotEmpty } from "@@/utils/StringUtils";
const client = () => {
    const headers = {
    // Authorization: `Bearer ${global.token}`
    };
    // console.log(global.token)
    return new GraphQLClient(API_ENDPOINTS, { headers });
};
const graphQL = (requestPromise, timeout = 30000) => __awaiter(void 0, void 0, void 0, function* () {
    let timeoutAction = null;
    const timerPromise = new Promise((resolve, reject) => {
        timeoutAction = (err) => {
            resolve({ error: 500, msg: !!err ? err : "timeout" }); //为了让model抓到异常
        };
    });
    setTimeout(() => {
        timeoutAction();
    }, timeout);
    return Promise.race([requestPromise, timerPromise]);
});
export function query(queryStr, value) {
    return __awaiter(this, void 0, void 0, function* () {
        return graphQL(new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const response = yield client().rawRequest(queryStr, value).catch(error => {
                try {
                    resolve({ error, data: error.response.data }); //为了让model抓到异常
                    // reject({ error: err.code, msg: error })
                }
                catch (e) {
                    resolve(Object.assign({ error: 500 }, error.response)); //为了让model抓到异常
                    // reject({ error: 500, msg: error })
                }
            });
            if (isOrNotEmpty(response)) {
                resolve(Object.assign({ error: 500 }, response));
            }
            resolve(response);
        })));
    });
}
export function mutate(muateStr, value) {
    return __awaiter(this, void 0, void 0, function* () {
        return graphQL(new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const response = yield client().rawRequest(`mutation ${muateStr}`, value).catch(error => {
                console.log(error);
                try {
                    resolve({ error, data: error.response.data }); //为了让model抓到异常
                    // reject({ error: err.code, msg: error })
                }
                catch (e) {
                    resolve(Object.assign({ error: 500 }, error.response)); //为了让model抓到异常
                    // reject({ error: 500, msg: error })
                }
            });
            console.log('mutate', response);
            if (isOrNotEmpty(response)) {
                resolve(Object.assign({ error: 500 }, response));
            }
            resolve(response);
        })));
    });
}
//# sourceMappingURL=graphQLClient.js.map