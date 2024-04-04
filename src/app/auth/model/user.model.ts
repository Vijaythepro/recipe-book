export class UserModel {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokennExpirationDate: Date){

        }
    
    get token(){
        if(!this._tokennExpirationDate || new Date() > this._tokennExpirationDate){
           // return null;
        }
        return this._token;
    }
}