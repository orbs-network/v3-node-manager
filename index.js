function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    while (true) {
        console.log(process.versions);
        await sleep(1000 * 10);
    }
}

if (require.main === module) {
    main();
}