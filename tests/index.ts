import { BasicTest, HelloTest } from "./basic.test";

type PossibleTests = {
  test: Array<Record<string, () => void>>;
};

// Loop through and run out tests
const runAllTests = async (tests: PossibleTests) => {
  const testCount = tests.test.length.toString();

  let failed = 0;
  let passed = 0;

  for (const test of tests.test) {
    console.log(`Running: ${Object.keys(test)[0]}`);

    try {
      Object.values(test)[0]();
    } catch (e) {
      failed++;
      console.log("\x1b[31m" + e + "\x1b[0m");
      continue;
    }

    passed++;
    console.log("\x1b[32m ^ PASSED \x1b[0m");
  }

  console.log(`\nTotal Tests: ${testCount}`);
  console.log(`\x1b[32m Passed: ${passed} \x1b[0m`);
  console.log(`\x1b[31m Failed: ${failed} \x1b[0m`);
};

runAllTests({
  test: [{ "Basic Test": BasicTest }, { "Hello Test": HelloTest }],
});
