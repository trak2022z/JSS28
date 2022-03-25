'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {
        let section = qs('section');
        let menu = section.children[0]; 
        let pizza = section.children[1]; 
        let bill = section.children[2]; 

             let orderPizza = new Promise(orderExecutor);
        orderPizza
          .then(eat)
          .then(pay)
          .catch(() => {
            console.log("an error occurred!");
          });

        function orderExecutor(resolve, reject) {
          menu.addEventListener('click', function() {
            console.log("making pizza");
            setTimeout(function() {
              console.log("pizza made");
              resolve(pizza);
            }, 5000);
          });
        }

        function eat(elem) {
          elem.classList.remove("inactive"); //this doesn't need to be done here, we're just showing how values can be passed from the resolve() call
          return new Promise(eatExecutor);
        }

        function eatExecutor(resolve, reject) {
          pizza.addEventListener('click', function() {
            console.log("eating pizza");
            setTimeout(function() {
              console.log("pizza eaten");
              resolve(bill);
            }, 2000);
          });
        }

        function pay(elem) {
          elem.classList.remove("inactive"); //this doesn't need to be done here, we're just showing how values can be passed from the resolve() call
          return new Promise(payExecutor);
        }

        function payExecutor(resolve, reject) {
          bill.addEventListener('click', function() {
            console.log("paying bill");
            setTimeout(function() {
              console.log("all done");
              resolve();
            }, 3000);
          });
        }
    }

    /** ---- Helper Functions  ---- */

    function gen(tagName) {
      return document.createElement(tagName);
    }

    function id(idName) {
      return document.getElementById(idName);
    }

    function qs(selector) {
      return document.querySelector(selector);
    }

    function qsa(selector) {
      return document.querySelectorAll(selector);
    }
})();