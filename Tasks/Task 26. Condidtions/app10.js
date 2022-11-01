var mushrooms=13;
if (mushrooms % 10 == 1 && mushrooms % 100 != 11) {
 console.log(mushrooms, "гриб")
} else if ((mushrooms % 10 == 2) || (mushrooms % 10 == 3) || (mushrooms % 10 == 4) || (mushrooms % 100 != 12) || (mushrooms % 100 != 13) || (mushrooms % 100 != 14)) {
    console.log(mushrooms, "гриба")
} else {
    console.log(mushrooms, "грибов")
}