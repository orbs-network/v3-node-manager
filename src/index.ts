import * as fs from "fs";

async function sleep(ms: number) {
    return new Promise((res) => setTimeout(() => res(null), ms));
}

let status = {
    Status: "This is the new manager",
    Payload: {
        TickCount: 0,
    },
};
async function main() {
    const statusDir = "./manager/";
    if (!fs.existsSync(statusDir)) {
        fs.mkdirSync(statusDir, { recursive: true });
    }
    while (true) {
        status.Payload.TickCount++;
        console.log("wait 10 sec, tick:", status.Payload.TickCount);

        // write status
        fs.writeFileSync(statusDir + "status.json", JSON.stringify(status));

        await sleep(1000 * 10);
    }
}

//if (require.main === module) {
main();
//}
