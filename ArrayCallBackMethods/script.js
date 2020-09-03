const words = ["dog", "dig", "log", "wog", "baug", "wag"];
//Every
const lads = words.every((words) => {
    return words.length === 3;
});

const allelts = words.every((word) => {
    const last = word.length - 1;
    return word[last] === "g";
});

//Some
const start = words.some((word) => {
    return words[0] === "d";
});

const end = words.some((word) => {
    const lasting = word.length - 1;
    return word[lasting] === "g";
});

// Reduce

const nums = [2, 34, 92, 242];
const result = nums.reduce((total, numbers) => {
    return total + numbers;
});

const grades = [81, 67, 97, 65, 98, 91, 73, 90, 79, 101];
const maxgrade = grades.reduce((max, currvalue) => {
    // if (currvalue > max) {
    //     return currvalue;

    // }

    // return max;

    return Math.max(max, currvalue);
});

const vote = ["y", "y", "n", "y", "n", "y", "y", "y", "n", "y", "n", "n"];

const Results = vote.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++;
    } else {
        tally[val] = 1;
    }

    return tally;
}, {});

// The shorter version:
// const results = votes.reduce((tally, val) => {
//     tally[val] = (tally[val] || 0) + 1;
//     return tally;
// }, {});

const books = [{
        title: "Good Omens",
        authors: ["Terry Pratchett", "Neil Gaiman"],
        rating: 4.25,
        genres: ["fiction", "fantasy"],
    },
    {
        title: "Changing My Mind",
        authors: ["Zadie Smith"],
        rating: 3.83,
        genres: ["nonfiction", "essays"],
    },
    {
        title: "Bone: The Complete Edition",
        authors: ["Jeff Smith"],
        rating: 4.42,
        genres: ["fiction", "graphic novel", "fantasy"],
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        rating: 4.11,
        genres: ["fiction", "fantasy"],
    },
    {
        title: "A Gentleman in Moscow",
        authors: ["Amor Towles"],
        rating: 4.36,
        genres: ["fiction", "historical fiction"],
    },
    {
        title: "The Name of the Wind",
        authors: ["Patrick Rothfuss"],
        rating: 4.54,
        genres: ["fiction", "fantasy"],
    },
    {
        title: "The Overstory",
        authors: ["Richard Powers"],
        rating: 4.19,
        genres: ["fiction", "short stories"],
    },
    {
        title: "A Truly Horrible Book",
        authors: ["Xavier Time"],
        rating: 2.18,
        genres: ["fiction", "garbage"],
    },
    {
        title: "The Way of Kings",
        authors: ["Brandon Sanderson"],
        rating: 4.65,
        genres: ["fantasy", "epic"],
    },
    {
        title: "Lord of the flies",
        authors: ["William Golding"],
        rating: 3.67,
        genres: ["fiction"],
    },
];

const Bookrating = books.reduce((groupedbook, book) => {
    const key = Math.floor(book.rating);
    if (!groupedbook[key]) groupedbook[key] = [];
    groupedbook[key].push(book);
    return groupedbook;
}, {});

Bookrating;