"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This simple method applys to the object, and to sub objects ONLY, recursively, ignoring anything that is not an object, avoiding circularity automatically.
 * Allowing you to modify objects and sub objects adding things such as methods or new keys into all the objects and sub objects.
 * @param object originalObject - The original object you wish to deeply modify.
 * @param function executeOnObject - The function to apply to the object, and to sub objects
 * @constructor
 */
function ModifyObjectRecursively(originalObject, executeOnObject) {
    if (originalObject === void 0) { originalObject = {}; }
    if (executeOnObject === void 0) { executeOnObject = function (o) {
        return o;
    }; }
    var finalOutputObject = executeOnObject(__assign({}, originalObject));
    var inspectedObjects = [];
    (function _find(o, s, outputObject) {
        var keys = Object.keys(o);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var value = o[key];
            if (value !== finalOutputObject) {
                if (inspectedObjects.indexOf(value) >= 0)
                    continue;
                else if (value === Object(value)) {
                    outputObject[key] = executeOnObject(__assign({}, value));
                    inspectedObjects.push(value);
                    s.push(key);
                    _find(outputObject[key], s, outputObject[key]);
                    s.pop(key);
                }
                else {
                    outputObject[key] = value;
                }
            }
        }
    }(finalOutputObject, [], finalOutputObject));
    return finalOutputObject;
}
exports.default = ModifyObjectRecursively;
//# sourceMappingURL=index.js.map