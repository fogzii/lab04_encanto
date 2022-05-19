export interface Madrigal {
  name: string;
  age: number;
  gift?: string;
}

export interface Song {
  name: string;
  singers: string | string[];
}

export function createMadrigal(name: string, age: number, gift?: string): Madrigal {
  return {
    name,
    age,
    ...(gift !== undefined && { gift })
  };
}

export function createSong(name: string, singers: string | string[]): Song {
  return {
    name,
    singers,
  };
}

export function extractNamesMixed(array: (Madrigal | Song)[]) {
  return array.map((i: Madrigal | Song) => i.name);
}

export function extractNamesPure(array: Madrigal[] | Song[]) {
  return extractNamesMixed(array);
}

export function madrigalIsSinger(madrigal: Madrigal, song: Song) {
  /**
   * This only works because of the Madrigal Property of no substring
   */
  return song.singers.includes(madrigal.name);
}

export function sortedMadrigals(madrigals: Madrigal[]) {
  return [...madrigals].sort((m1, m2) => {
    if (m1.age !== m2.age) {
      return m1.age - m2.age;
    }
    return m1.name.localeCompare(m2.name);
  });
}

export function filterSongsWithMadrigals(madrigals: Madrigal[], songs: Song[]) {
  return songs.filter(s => madrigals.some(m => madrigalIsSinger(m, s)));
}

export function getMostSpecialMadrigal(madrigals: Madrigal[], songs: Song[]) {
  return madrigals.reduce((m1, m2) => {
    const m1Songs = songs.filter(s => madrigalIsSinger(m1, s)).length;
    const m2Songs = songs.filter(s => madrigalIsSinger(m2, s)).length;
    return m1Songs >= m2Songs ? m1 : m2;
  });
}

/*
// Alternative solution for "getMostSpecialMadrigal"

export function getMostSpecialMadrigal(madrigals: Madrigal[], songs: Song[]) {
  // Guaranteed that list will have at least 1 element
  let mostSpecialMadrigal: Madrigal = madrigals[0];
  let maxSongs = -1;
  for (const m of madrigals) {
    let songCount = 0;
    for (const s of songs) {
      if (madrigalIsSinger(m, s)) {
        songCount++;
      }
    }
    if (maxSongs < songCount) {
      maxSongs = songCount;
      mostSpecialMadrigal = m;
    }
  }
  return mostSpecialMadrigal;
}
*/
