const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  await prisma.cronProbe.upsert({
    where: { id: "flowdeck-uptime" },
    update: { name: "Flowdeck uptime check" },
    create: { id: "flowdeck-uptime", name: "Flowdeck uptime check" },
  })
}

main()
  .catch((error) => {
    console.error("Could not seed the cron probe", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
