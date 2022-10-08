/**
 * Add type annotations to function parameters and replace all type stubs 'any'.
 *
 * Note: All functions in this lab are pure functions (https://en.wikipedia.org/wiki/Pure_function)
 * You should NOT introduce a "dataStore" or use any global variables in this file.
 */

export interface Madrigal {
  name: string;
  age: number;
  gift?: string;
}

export interface Song {
  name: string;
  singers: string | string[];
}

export function createMadrigal(name: string, age: number, gift? : string): Madrigal {
  const madrigal: Madrigal = {
    name: name,
    age: age,
  };

  if (gift != undefined) {
    madrigal.gift = gift;
  }

  return madrigal;
}

export function createSong(name: string, singers: string | string[]): Song {
  const song: Song = {
    name: name,
    singers: singers,
  }
  return song;
}

export function extractNamesMixed(array: (Madrigal | Song)[]): string[] {
  const names: string[] = [];
  for (const object of array) {
    names.push(object.name);
  }

  return names;
}

export function extractNamesPure(array: Madrigal[] | Song[]): string[] {
  const names: string[] = [];
  for (const object of array) {
    names.push(object.name);
  }

  return names;
}

export function madrigalIsSinger(madrigal: Madrigal, song: Song): boolean {
  return song.singers.includes(madrigal.name) ? true: false;
}

export function sortedMadrigals(madrigals: Madrigal[]): Madrigal[] {
  const sortedArr: Madrigal[] = madrigals.slice();

  sortedArr.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });

  sortedArr.sort((a, b) => a.age - b.age);
  return sortedArr;
}

export function filterSongsWithMadrigals(madrigals: Madrigal[], songs: Song[]): Song[] {
  const arr: Song[] = [];
  for (const song of songs) {
    for (const madrigal of madrigals) {
      if (madrigalIsSinger(madrigal, song)) {
        arr.push(song);
        break;
      }
    }
  }
  return arr;
}

export function getMostSpecialMadrigal(madrigals: Madrigal[], songs: Song[]): Madrigal {
  let specialMadrigal: Madrigal = madrigals[0];
  let maxNumSongs: number = 0;

  for (const madrigal of madrigals) {
    let numSongs: number = 0;
    for (const song of songs) {
      if (madrigalIsSinger(madrigal, song)) {
        numSongs++;
      }
    }
    if (numSongs > maxNumSongs) {
      maxNumSongs = numSongs;
      specialMadrigal = madrigal;
    }
  }
  return specialMadrigal;
}
