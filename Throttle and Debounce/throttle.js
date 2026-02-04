function throttle(fn, delay, condition = true){
    if(condition){
        let isThrottled = false;
        // true means leading throttle, default

        return function (...args) {
          if (isThrottled) return;

          fn.apply(this, args);
          isThrottled = true;

          setTimeout(() => {
            isThrottled = false;
          }, delay);
        }; 
    } else {
        // false means trailing throttle
        let isThrottled = false ;

        return function(...args){
            if (isThrottled) return;

            isThrottled = true;

            setTimeout(() => {
                fn.apply(this, args);
                isThrottled = false;
            }, delay);
        }
    }
}

window.addEventListener("click" , throttle(()=>{console.log("Scroll")},6000,false))