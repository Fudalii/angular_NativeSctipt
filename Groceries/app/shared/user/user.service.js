"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Headers, Response, Http } from "@angular/http";
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
    }
    UserService.prototype.register = function (user) {
        var userObj = {
            username: user.email,
            email: user.email,
            password: user.password
        };
        return this.http.post(config_1.Config.apiUrl + "user/" + config_1.Config.appKey, userObj, {
            headers: this.createRequestOptions()
        });
    };
    UserService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            Authorization: config_1.Config.authHeader
        });
        return headers;
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var userObj = {
            username: user.email,
            password: user.password
        };
        return this.http
            .post(config_1.Config.apiUrl + "user/" + config_1.Config.appKey + "/login", userObj, {
            headers: this.createRequestOptions()
        })
            .subscribe(function (res) {
            console.dir(res);
            _this.router.navigate(["/list"]);
            var xyz = JSON.parse(JSON.stringify(res));
            config_1.Config.token = xyz._kmd.authtoken;
        }, function (error) { return alert(error); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBEQUEwRDtBQUMxRCw2Q0FBeUY7QUFDekYsMENBQXlDO0FBRXpDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRy9CLG9DQUFtQztBQUduQztJQUNFLHFCQUFvQixJQUFnQixFQUFVLE1BQWM7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRWhFLDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLElBQUksT0FBTyxHQUFFO1lBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQTtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRTtZQUN0RSxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywwQ0FBb0IsR0FBNUI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDNUIsYUFBYSxFQUFFLGVBQU0sQ0FBQyxVQUFVO1NBQ2pDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQWhCLGlCQWtCQztRQWpCQyxJQUFJLE9BQU8sR0FBRTtZQUNULFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQTtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRSxPQUFPLEVBQUU7WUFDakUsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtTQUNyQyxDQUFDO2FBQ0QsU0FBUyxDQUFFLFVBQUEsR0FBRztZQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ3pDLGVBQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEMsQ0FBQyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUF2Q1UsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVlLGlCQUFVLEVBQWtCLGVBQU07T0FEakQsV0FBVyxDQXdDdkI7SUFBRCxrQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vaW1wb3J0IHsgSGVhZGVycywgUmVzcG9uc2UsIEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICB2YXIgdXNlck9iaiA9e1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIENvbmZpZy5hcHBLZXksIHVzZXJPYmosIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IENvbmZpZy5hdXRoSGVhZGVyXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgdmFyIHVzZXJPYmogPXtcclxuICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoQ29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIENvbmZpZy5hcHBLZXkgKyBcIi9sb2dpblwiLCB1c2VyT2JqLCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoIHJlcyA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmRpcihyZXMpO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xyXG4gICAgICAgICAgdmFyIHh5eiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICAgIENvbmZpZy50b2tlbiA9IHh5ei5fa21kLmF1dGh0b2tlbjsgIFxyXG4gICAgICAgIH0sIGVycm9yID0+IGFsZXJ0KGVycm9yKSk7XHJcbiAgIFxyXG4gIH1cclxufVxyXG4iXX0=