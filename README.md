[![npm version](https://badge.fury.io/js/modify-object-recursively.svg)](https://www.npmjs.com/package/modify-object-recursively)
# modify-object-recursively

A npm module which allows you to perform a single function on an object, and any sub objects recursively, it works ONLY on objects, and does not do anything with any other type of values.
this is useful when you wish to append methods, or new keys to objects, or sub objects.
## Usage and examples

* Install.   
```bash
yarn add modify-object-recursively
```
```bash
npm install modify-object-recursively
```

*   Import/RequireUsage
```js
import ModifyObjectRecursively from 'modify-object-recursively';
```

* Actual use examples
    ```js
    // Declare the object
      var obj = {
          a: 1,
          b: {a: 1, b: {}},
      };
    // Apply some method to object and sub objects
      var result=ModifyObjectRecursively(obj, (subObj) => { 
                                 subObj.test1=2;
                                 subObj.test2=3;
                                 return subObj;
                             });
    ```   
    * result will be:
    ```js
        {
            a: 1,
            b: {
                a: 1, b: {
                    2,
                    test2: 3
                }, test1: 2,
                test2: 3
            },
            test1: 2,
            test2: 3
        };
    ```   
## License
The license chosen for this project can be found inside package.json: MIT

Hopefully this module will save you a little bit of time, have fun and best of luck!