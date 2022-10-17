var mushrooms=20;
if (mushrooms % 10 == 1) {
 console.log(mushrooms, "гриб")
} else if ((mushrooms % 10 == 2) || (mushrooms % 10 == 3) || (mushrooms % 10 == 4)) {
    console.log(mushrooms, "гриба")
} else {
    console.log(mushrooms, "грибов")
}