(()=>{"use strict";class s{constructor(){this.types={INFO:"^3INFO^7",WARNING:"^6WARNING^7",ERROR:"^1ERROR^7",DEBUG:"^2DEBUG^7"}}send(s,e,...t){const i=IsDuplicityVersion()?"^2SERVER^7":"^2CLIENT^7";"string"==typeof e?console.log(`[${i}] [${this.types[s]}] `+e,...t):(console.log(`[${i}] [${this.types[s]}] `,...t),console.log(e))}info(s,...e){this.send("INFO",s,...e)}warning(s,...e){this.send("WARNING",s,...e)}error(s,...e){this.send("ERROR",s,...e)}debug(s,...e){this.send("DEBUG",s,...e)}}class e{constructor(){this._Version="1.0.0",this._Name="typescript-fivem-template",this._Author="Kipstz",this._ResourceName=GetCurrentResourceName(),this._side=IsDuplicityVersion()?"server":"client",this._logs=new s,this.logs.info(`Loaded ^2${this.ResourceName}^7 from ^2${this.Author}^7 ^7[^2v${this.Version}^7]`)}get Version(){return this._Version}get Name(){return this._Name}get Author(){return this._Author}get ResourceName(){return this._ResourceName}get side(){return this._side}get logs(){return this._logs}}class t{}new class extends e{constructor(){super(),this.command=new t}}})();