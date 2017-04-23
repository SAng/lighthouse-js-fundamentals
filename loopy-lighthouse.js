var counter = 100
for (counter = 100; counter < 201; counter++) {
  if ((counter % 3) === 0) {
    if ((counter % 4) === 0) {
      console.log("LoopyLighthouse");
    } else console.log("Loopy");
  } else if ((counter % 4) === 0) {
    console.log("Lighthouse");
  } else console.log(counter);
}