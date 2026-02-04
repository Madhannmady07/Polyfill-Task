Function.prototype.myBind = function(context, ...bindArgs){
    const originalFn = this;

    return function(...callArgs){
        const allArgs = [...bindArgs, ...callArgs];

        // implement call or apply
        if(context == null || context == undefined){
            context = globalThis;
        } else {
            context = Object(context);
        }

        let sym = Symbol();
        context[sym] = originalFn;

        let result = context[sym](...allArgs);

        delete context[sym];

        return result;
    }
}

