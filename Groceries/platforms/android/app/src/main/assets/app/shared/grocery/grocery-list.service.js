"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Headers, Response, Http } from "@angular/http";
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var GroceryListService = /** @class */ (function () {
    function GroceryListService(http) {
        this.http = http;
        this.baseUrl = config_1.Config.apiUrl + "appdata/" + config_1.Config.appKey + "/Groceries";
        this.items = new Array({ id: "1", name: "Banany" }, { id: "2", name: "Pomaracze" }, { id: "3", name: "Cukir" }, { id: "4", name: "Chleb" });
        this.apiKey = "?apiKey=DJPhE_TBTU9RPRsgBLtr7C8tMfOJGkwV";
        this.mongoDb = "https://api.mlab.com/api/1/databases/products/collections/";
    }
    GroceryListService.prototype.load = function () {
        var groceryList = [];
        return this.http.get(this.mongoDb + "Grocery" + this.apiKey);
    };
    GroceryListService.prototype.getCommonHeaders = function () {
        var headers = new http_1.HttpHeaders({
            Authorization: "Kinvey " + config_1.Config.token
        });
        return headers;
    };
    GroceryListService.prototype.add = function (grocery) {
        return this.http.post(this.mongoDb + "Grocery" + this.apiKey, grocery);
    };
    GroceryListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GroceryListService);
    return GroceryListService;
}());
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUMzQywwREFBMEQ7QUFDMUQsNkNBQXdGO0FBR3hGLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLG9DQUFtQztBQU9uQztJQVlFLDRCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBWHBDLFlBQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUU1RCxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3ZCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQzNCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQzlCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQzFCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQzNCLENBQUM7UUFDRixXQUFNLEdBQUcsMENBQTBDLENBQUM7UUFDcEQsWUFBTyxHQUFHLDREQUE0RCxDQUFDO0lBRWhDLENBQUM7SUFHeEMsaUNBQUksR0FBSjtRQUVDLElBQUksV0FBVyxHQUFtQixFQUFFLENBQUM7UUFFckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUU3RCxDQUFDO0lBRUQsNkNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzVCLGFBQWEsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUs7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBR0QsZ0NBQUcsR0FBSCxVQUFJLE9BQWdCO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3hFLENBQUM7SUFqQ1Usa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7eUNBYWUsaUJBQVU7T0FaekIsa0JBQWtCLENBdUM5QjtJQUFELHlCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vL2ltcG9ydCB7IEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5XCI7XHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xyXG4gIGJhc2VVcmwgPSBDb25maWcuYXBpVXJsICsgXCJhcHBkYXRhL1wiICsgQ29uZmlnLmFwcEtleSArIFwiL0dyb2Nlcmllc1wiO1xyXG5cclxuICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEdyb2Nlcnk+KFxyXG4gICAgeyBpZDogXCIxXCIsIG5hbWU6IFwiQmFuYW55XCIgfSxcclxuICAgIHsgaWQ6IFwiMlwiLCBuYW1lOiBcIlBvbWFyYWN6ZVwiIH0sXHJcbiAgICB7IGlkOiBcIjNcIiwgbmFtZTogXCJDdWtpclwiIH0sXHJcbiAgICB7IGlkOiBcIjRcIiwgbmFtZTogXCJDaGxlYlwiIH1cclxuICApO1xyXG4gIGFwaUtleSA9IFwiP2FwaUtleT1ESlBoRV9UQlRVOVJQUnNnQkx0cjdDOHRNZk9KR2t3VlwiO1xyXG4gIG1vbmdvRGIgPSBcImh0dHBzOi8vYXBpLm1sYWIuY29tL2FwaS8xL2RhdGFiYXNlcy9wcm9kdWN0cy9jb2xsZWN0aW9ucy9cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuXHJcbiAgbG9hZCgpIHtcclxuXHJcbiAgIHZhciBncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcclxuXHJcbiAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMubW9uZ29EYiArIFwiR3JvY2VyeVwiICsgdGhpcy5hcGlLZXkpXHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0Q29tbW9uSGVhZGVycyAoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IFwiS2ludmV5IFwiICsgQ29uZmlnLnRva2VuXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuXHJcblxyXG4gIGFkZChncm9jZXJ5OiBHcm9jZXJ5KXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLm1vbmdvRGIgKyBcIkdyb2NlcnlcIiArIHRoaXMuYXBpS2V5LCBncm9jZXJ5KVxyXG4gIH1cclxuXHJcbiAgLy8gaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgLy8gICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==