const _ = {
  each(list, callback) {
    if (Array.isArray(list)) {
      for (let index = 0; index < list.length; index++) {
        callback(list[index], index, list);
      }
    } else {
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          callback(list[key], key, list);
        }
      }
    }
  },
  filter(list, callback) {
    const storage = [];
    this.each(list, function(v, i, list) {
      if (callback(v, i, list) === true) {
        storage.push(v);
      }
    });
    return storage;
  }
};

// test filter implementation
// test 1 : numbers
const ages = [20, 14, 18, 21, 23, 19];
const result = _.filter(ages, age => age > 18);
console.log(result);

// test 2 : string
const txt = `MATT FRISBIE has worked in web development for over a decade. During that time, he’s been a startup co-founder, an engineer at a Big Four tech company, and the first engineer at a Y Combinator startup that would eventually become a billion-dollar business. As a Google software engineer, Matt worked on both the AdSense and Accelerated Mobile Pages (AMP) platforms; his code contributions run on most of the planet’s web browsing devices. Prior to this, Matt was the first engineer at DoorDash, where he laid the foundation for their driver scheduling, menu management, and order dispatch infrastructure. Matt has written two books and recorded two video series for O’Reilly and Packt, speaks at frontend meetups and webcasts, and is a Level 1 sommelier. He majored in computer engineering at the University of Illinois at Urbana–Champaign. Matt’s Twitter handle is @mattfriz.`;
const words = txt.split(" ");

const longWords = _.filter(words, word => word.length > 7);
console.log(longWords);

// test build in filter
// const strWords = words.filter(word => word.length > 7);
// console.log(strWords);
