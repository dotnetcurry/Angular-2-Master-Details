"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var category_model_1 = require('./category.model');
var CategoryComponent = (function () {
    function CategoryComponent() {
        this.categories = category_model_1.Categories;
        this.categotyName = "";
        console.log('Category');
    }
    CategoryComponent.prototype.selectCategory = function (c) {
        this.categotyName = c.categoryName;
    };
    CategoryComponent.prototype.ngOnInit = function () { };
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'category-data',
            templateUrl: './category.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
