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
    var NanobarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NanobarService = (function () {
                function NanobarService() {
                    this.bar = null;
                    this.progress = 0;
                    this.finished = true;
                    this.bar = new Nanobar({ id: 'nanobar' });
                }
                NanobarService.prototype.go = function (percent) { this.bar.go(percent); };
                NanobarService.prototype.start = function () {
                    this.finished = false;
                    this.progress = 15;
                    increase(this);
                    function increase(self) {
                        if (!self.finished) {
                            var speed_rate = 5;
                            var max_value = 95;
                            var x = self.progress;
                            self.progress += speed_rate * (max_value - x) / max_value;
                            self.go(self.progress);
                            setTimeout(increase, 500, self);
                        }
                    }
                };
                NanobarService.prototype.finish = function () {
                    this.finished = true;
                    this.go(100);
                };
                NanobarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], NanobarService);
                return NanobarService;
            }());
            exports_1("NanobarService", NanobarService);
        }
    }
});
//# sourceMappingURL=nanobar.service.js.map