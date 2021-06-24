// EFT MARKET ITEM PARSER BY SWENENZY.
var fs = require('fs');

String.prototype.replaceAll = function (find, replace) { var str = this; return str.replace(new RegExp(find, 'g'), replace); };

fs.readFile('all.json','utf8',function(err,data){
    var dat = JSON.parse(data);
    for (var prop in dat) {
        try {
            let Prefab = dat[prop]._props.Prefab.path;
            var parts = Prefab.split('/');
            for (let index = 0; index < parts.length; index++) {
                const element = parts[index];
                const string = element;
                const substring = ".bundle";
                if(string.includes(substring)) {
                    let newStr = element.replace(".bundle","");
                        console.log("{\""+newStr+"\",\""+dat[prop]._props.Name.replaceAll("\"","")+"\", " +dat[prop]._props.CreditsPrice+ "},");
                }
            }
        } catch (error) {}
    }
});
