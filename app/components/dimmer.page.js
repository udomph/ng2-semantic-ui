System.register(['@angular/core', "../internal/page-title.component", './../internal/example.component', "../internal/api.component", "./dimmer/dimmer.examples"], function(exports_1, context_1) {
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
    var core_1, page_title_component_1, example_component_1, api_component_1, dimmer_examples_1;
    var DimmerComponentPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (page_title_component_1_1) {
                page_title_component_1 = page_title_component_1_1;
            },
            function (example_component_1_1) {
                example_component_1 = example_component_1_1;
            },
            function (api_component_1_1) {
                api_component_1 = api_component_1_1;
            },
            function (dimmer_examples_1_1) {
                dimmer_examples_1 = dimmer_examples_1_1;
            }],
        execute: function() {
            DimmerComponentPage = (function () {
                function DimmerComponentPage() {
                    this.api = [
                        {
                            selector: "<sui-dimmer>",
                            properties: [
                                {
                                    name: "isDimmed",
                                    description: "Sets whether or not the dimmer is active.",
                                    defaultValue: "false"
                                },
                                {
                                    name: "isClickable",
                                    description: "Sets whether or not clicking the dimmer will dismiss it.",
                                    defaultValue: "true"
                                }
                            ],
                            events: [
                                {
                                    name: "isDimmedChange",
                                    description: "Fires whenever the dimmer is toggled. Use the <code>[(isDimmed)]</code> syntax to update when the user clicks out of the dimmer."
                                }
                            ]
                        }
                    ];
                }
                DimmerComponentPage = __decorate([
                    core_1.Component({
                        selector: 'dimmer-component-page',
                        directives: [page_title_component_1.PageTitle, example_component_1.Example, api_component_1.Api, dimmer_examples_1.DIMMER_EXAMPLES],
                        templateUrl: "app/components/dimmer.page.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DimmerComponentPage);
                return DimmerComponentPage;
            }());
            exports_1("DimmerComponentPage", DimmerComponentPage);
        }
    }
});
//# sourceMappingURL=dimmer.page.js.map