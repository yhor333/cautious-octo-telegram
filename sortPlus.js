"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = __importDefault(require("./sort"));
class SorterPlus extends sort_1.default {
    constructor() {
        super();
    }
    addAction(name, funck) {
        this.activity[name] = funck;
    }
}
const SortPlus = new SorterPlus();
SortPlus.addAction('exclude', function (obj, key, antecedent, res) {
    if (obj[key] !== antecedent[key]) {
        res.push(obj);
    }
});
const coroco = JSON.stringify({ "data": [{ "user": "mike@mail.com", "rating": 20, "disabled": false },
        { "user": "greg@mail.com", "rating": 14, "disabled": false },
        { "user": "john@mail.com", "rating": 25, "disabled": true }] });
const crocoCondition = JSON.stringify({ "condition": { "exclude": [{ "disabled": true }], "sort_by": ["rating"] } });
console.log(SortPlus.sort(coroco, crocoCondition));
