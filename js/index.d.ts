/**
 * This simple method applys to the object, and to sub objects ONLY, recursively, ignoring anything that is not an object, avoiding circularity automatically.
 * Allowing you to modify objects and sub objects adding things such as methods or new keys into all the objects and sub objects.
 * @param object originalObject - The original object you wish to deeply modify.
 * @param function executeOnObject - The function to apply to the object, and to sub objects
 * @constructor
 */
export default function ModifyObjectRecursively(originalObject?: any, executeOnObject?: (o: any) => any): any;
