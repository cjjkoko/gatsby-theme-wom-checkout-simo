export let API_ENDPOINTS = 'http://local.wow/graphql';
class HttpUrl {
    constructor() {
        this.init = (name) => {
            this.initStatus(0);
        };
        this.initStatus = (status) => {
            HttpUrl.initBase(status);
        };
        this.initStatus(0);
    }
    static initBase(type) {
        switch (type) {
            case 0: //local
                API_ENDPOINTS = true ? 'https://3.209.27.177/graphql' : '/api3';
                break;
        }
    }
}
export default new HttpUrl();
//# sourceMappingURL=httpUrl.js.map