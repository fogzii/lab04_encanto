/**
 * Add type annotations to function parameters and replace all type stubs 'any'.
 *
 * Note: All functions in this lab are pure functions (https://en.wikipedia.org/wiki/Pure_function)
 * You should NOT introduce a "dataStore" or use any global variables in this file.
 */

export interface Madrigal {
  // TODO: add type annotations
  name: any;
  age: any;
  gift?: any;
}

export interface Song {
  // TODO: add type annotations
  name: any;
  singers: any;
}

// TODO: remove 'any' and add type annotations
export function createMadrigal(name: any, age: any, gift? : any): any {
  // TODO: implementation
  return null;
}

// TODO: remove 'any' and add type annotations
export function createSong(name: any, singers: any): any {
  // TODO: implementation
  return null;
}

// TODO: add type annotations
export function extractNamesMixed(array) {
  // TODO: implementation
  return ['string', 'array'];
}

// TODO: add type annotations
export function extractNamesPure(array) {
  // TODO: implementation
  return ['string', 'array'];
}

// TODO: add type annotations
export function madrigalIsSinger(madrigal, song) {
  // TODO: implementation
  return false;
}

// TODO: add type annotations
export function sortedMadrigals(madrigals) {
  // TODO: implementation
  return [];
}

// TODO: add type annotations
export function filterSongsWithMadrigals(madrigals, songs) {
  // TODO: implementation
  return [];
}

// TODO: add type annotations
export function getMostSpecialMadrigal(madrigals, songs) {
  // TODO: implementation
  return { name: 'stub code', age: 999, gift: 'potates' };
}
