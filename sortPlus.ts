import Sorter from "./sort";

class SorterPlus extends Sorter {
    constructor() {
        super()
    }
    addAction(name: string, funck: Function): void {
        this.activity[name] = funck;
    }
}

const SortPlus = new SorterPlus();

SortPlus.addAction('exclude', function(obj: any, key: any, antecedent: any, res: any) {
    if (obj[key] !== antecedent[key]) {
        res.push(obj)
    }
})

const coroco = JSON.stringify({"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "john@mail.com", "rating": 25, "disabled": true}]});

const crocoCondition = JSON.stringify({"condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}})

console.log(SortPlus.sort(coroco, crocoCondition))
