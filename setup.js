import fs from "fs";
import crypto from "crypto";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(question, defaultValue = "") {
    return new Promise((resolve) => {
        rl.question(
            defaultValue
                ? `${question} [${defaultValue}]: `
                : `${question}: `,
            (answer) => {
                resolve(answer || defaultValue);
            }
        );
    });
}

function randomSecret(length = 64) {
    return crypto.randomBytes(length).toString("hex");
}

async function askEnvType() {
    return new Promise((resolve) => {
        rl.question("Select environment (1 = dev, 2 = production): ", (ans) => {
            resolve(ans === "2" ? "production" : "dev");
        });
    });
}

async function main() {
    console.log("===== Project Setup =====");

    const ENV_TYPE = await askEnvType();

    const NEXT_PORT = await ask("Next Port", "3001");
    const DIRECTUS_PORT = await ask("Directus Port", "8055");
    const MYSQL_PORT = await ask("MySQL Port", "3306");

    const DIRECTUS_ADMIN_EMAIL = await ask("Directus Admin Email");
    const DIRECTUS_ADMIN_PASSWORD = await ask("Directus Admin Password");

    // =========================
    // BASE URL (dev/prod logic)
    // =========================
    let DIRECTUS_PUBLIC_URL = "";

    if (ENV_TYPE === "dev") {
        DIRECTUS_PUBLIC_URL = "http://localhost";
    } else {
        DIRECTUS_PUBLIC_URL = await ask(
            "Production Domain (e.g. https://example.com)"
        );
    }

    const MYSQL_DATABASE = await ask("MySQL Database", "directus");
    const MYSQL_USER = await ask("MySQL User", "directus");
    const MYSQL_PASSWORD = await ask("MySQL Password");
    const MYSQL_ROOT_PASSWORD = await ask("MySQL Root Password");

    // =========================
    // INTERNAL (Docker only)
    // =========================
    const DIRECTUS_URL = "http://directus:8055";

    // =========================
    // CLIENT URL
    // =========================
    const NEXT_PUBLIC_URL_HOST_CLIENT = `${DIRECTUS_PUBLIC_URL}/api/`;

    const env = `
NEXT_CONTAINER_NAME=next-app-phunuttakit
NEXT_PORT=${NEXT_PORT}

DIRECTUS_URL=${DIRECTUS_URL}
NEXT_PUBLIC_URL_HOST=${DIRECTUS_URL}
NEXT_PUBLIC_URL_HOST_CLIENT=${NEXT_PUBLIC_URL_HOST_CLIENT}

DIRECTUS_CONTAINER_NAME=directus
DIRECTUS_PORT=${DIRECTUS_PORT}

DIRECTUS_KEY=${randomSecret(32)}
DIRECTUS_SECRET=${randomSecret(32)}

DIRECTUS_ADMIN_EMAIL=${DIRECTUS_ADMIN_EMAIL}
DIRECTUS_ADMIN_PASSWORD=${DIRECTUS_ADMIN_PASSWORD}

DIRECTUS_PUBLIC_URL=${DIRECTUS_PUBLIC_URL}

MYSQL_CONTAINER_NAME=mysql
MYSQL_PORT=${MYSQL_PORT}

MYSQL_DATABASE=${MYSQL_DATABASE}
MYSQL_USER=${MYSQL_USER}
MYSQL_PASSWORD=${MYSQL_PASSWORD}
MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
`.trim();

    fs.writeFileSync(".env", env);

    console.log("\n.env created successfully!\n");
    console.log(`Environment: ${ENV_TYPE}`);
    console.log("Run:");
    console.log("docker compose up -d --build");

    rl.close();
}

main();