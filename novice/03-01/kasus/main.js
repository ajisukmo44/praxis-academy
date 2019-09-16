class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log("The multiplication failed");
            } else throw e;
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64




//The locked box


// const box = {
//     locked: true,
//     unlock() {
//         this.locked = false;
//     },
//     lock() {
//         this.locked = true;
//     },
//     _content: [1, 2, 3],
//     get content() {
//         if (this.locked) throw new Error("Locked!");
//         return this._content;
//     }
// };

// function withBoxUnlocked(body) {
//     let wasLocked = box.locked;
//     box.unlock();
//     try {
//         body();
//     } finally {
//         if (wasLocked) {
//             box.lock();
//         }
//     }
// }

// withBoxUnlocked(function () {
//     box.content.push("gold piece");
// });

// try {
//     withBoxUnlocked(function () {
//         throw new Error("Pirates on the horizon! Abort!");
//     });
// } catch (e) {
//     console.log("Error raised: " + e);
// }
// console.log(box.locked);
// // → true