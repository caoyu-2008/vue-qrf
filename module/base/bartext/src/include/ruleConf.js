let ruleConf = {
    "rules": {
        "addItemScene":{
            "method":"unpass",
            "yOrN":true,
            "variables":[/*"例如：userId","show"*/],
            "constraint":[
                /*例如：{"condition":["userId == '-1'"],"result":["show('请选择用户')"]}*/
            ],
            "use": {
                /*例如："trans0":[0]*/
            }
        }
    }
}
module.exports = ruleConf;