async function sleep(ms: number) {
  return new Promise((res) => setTimeout(() => res(null), ms));
}

async function main() {
  while (true) {
    console.log("wait 10 sec");
    await sleep(1000 * 10);
  }
}

//if (require.main === module) {
main();
//}
