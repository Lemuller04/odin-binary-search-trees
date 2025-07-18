if (process.argv.length != 2) {
  throw new Error("Wrong usage. Use: 'node tests.js'");
}

const run = async () => {
  const { HashMap } = await import("./hashmap.js");

  // Write tests below:

  console.log("Hello :3");
};

run();
