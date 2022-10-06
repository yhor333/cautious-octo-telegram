class Sorter {
    activity: any;
    constructor() {
        this.activity = {
            include: function(obj: any,  key:string, antecedent: any, res: object[] ): void {
                if (obj[key] === antecedent[key]) {
                    res.push(obj)
                }
            }
        }
    }

    sort(jsonSorted: string, jsonConditon: string) {
        let res: object[] | string = [];
        const { data } = JSON.parse(jsonSorted);
        const { condition } = JSON.parse(jsonConditon);
        const sort_by = condition.sort_by[0];
        const action = Object.keys(condition)[0];
        const antecedent = condition[action][0];
        const key = Object.keys(antecedent)[0];
        for (let item of data) {
            this.activity[action](item, key, antecedent, res)
        }
        res.sort((a: any, b: any) => a[sort_by] > b[sort_by] ? 1 : -1);
        return res = JSON.stringify(res);
    }
}

const crocoCodition = JSON.stringify({"condition": {"include": [{"name": "John"}], "sort_by": ["email"]}});
const croco = JSON.stringify({"data": [{"name": "John", "email": "john2@mail.com"},
{"name": "John", "email": "john1@mail.com"},
{"name": "Jane", "email": "jane@mail.com"}]});

const IN = new Sorter();

IN.sort(croco, crocoCodition);

export default Sorter;
