function debounce(fn, delay, flag = false){
    let timerId;

    if(flag){
        // flag true, perform leading debounce
        return function(...args){
            if(!timerId){
                fn.apply(this, args);
            }

            clearTimeout(timerId);
            setTimeout(()=>{
                timerId = null;
            }, delay)
        }

    } else {
        // flag false, perform trailing debounce - default
        return function (...args) {
          clearTimeout(timerId);

          timerId = setTimeout(() => {
            fn.apply(this, args);
          }, delay);
        };
    }
}