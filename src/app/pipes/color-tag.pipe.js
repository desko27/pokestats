System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ColorTag;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ColorTag = (function () {
                function ColorTag() {
                }
                ColorTag.prototype.transform = function (value, leveled_max_stat) {
                    // adapt to a 0-100 relation
                    value = 100 * value / leveled_max_stat;
                    // return the right color tag
                    if (value < 25)
                        return 'danger';
                    else if (value < 50)
                        return 'warning';
                    else if (value < 75)
                        return 'success';
                    else
                        return 'info';
                };
                ColorTag = __decorate([
                    core_1.Pipe({ name: 'colorTag' }), 
                    __metadata('design:paramtypes', [])
                ], ColorTag);
                return ColorTag;
            }());
            exports_1("ColorTag", ColorTag);
        }
    }
});
//# sourceMappingURL=color-tag.pipe.js.map