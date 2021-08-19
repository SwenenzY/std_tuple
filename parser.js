// EFT MARKET ITEM PARSER BY SWENENZY.
var fs = require('fs');
String.prototype.replaceAll = function (find, replace) { var str = this; return str.replace(new RegExp(find, 'g'), replace); };
var map = new Map();
fs.readFile('flea-data.json','utf8',function(err,data){
    var dat = JSON.parse(data);
    for (var prop in dat) {
        map.set(dat[prop].bsgId,dat[prop].avg24hPrice)
    }
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
                        let strr = dat[prop]._props.ShortName.replaceAll("\"","");

                        if(dat[prop]._props.CreditsPrice > 1000) {
                            var bsg_id = dat[prop]._id;
                            let jhonKeys = [...map.entries()]
                            .filter(({ 0: v }) => v === bsg_id)
                            console.log("{_(\""+newStr+"\"),{_(\""+ strr +"\"), " +jhonKeys[0][1]+ "}},");
                        }
                    }
                }
            } catch (error) {}
        }
    });
});

