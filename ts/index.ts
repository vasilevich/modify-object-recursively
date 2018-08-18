/**
 * This simple method applys to the object, and to sub objects ONLY, recursively, ignoring anything that is not an object, avoiding circularity automatically.
 * Allowing you to modify objects and sub objects adding things such as methods or new keys into all the objects and sub objects.
 * @param object originalObject - The original object you wish to deeply modify.
 * @param function executeOnObject - The function to apply to the object, and to sub objects
 * @constructor
 */
export default function ModifyObjectRecursively(originalObject: any = {}, executeOnObject = function (o: any) {
    return o
}) {
    const finalOutputObject = executeOnObject({...originalObject});
    const inspectedObjects = [];
    (function _find(o: any, s: any, outputObject) {
        const keys = Object.keys(o);
        for (const key of keys) {
            const value = o[key];
            if (value !== finalOutputObject) {
                if (inspectedObjects.indexOf(value) >= 0) continue;
                else if (value === Object(value)) {
                    outputObject[key] = executeOnObject({...value});
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