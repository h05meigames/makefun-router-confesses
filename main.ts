// The Router Confesses — make.fun one-liner entry
// Writes exactly one funny confession line from a Wi-Fi router to /output/entry.txt
import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "I confess: I fake the outage every Friday — your 'quick reboot' is the only vacation I ever get.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
