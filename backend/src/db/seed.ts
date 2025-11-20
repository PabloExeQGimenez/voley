import { prisma } from './prisma.js';

async function main() {
  const teams = ['Mix Eclipse', 'Doble Golpe', 'Universitario', 'The Black'];
  for (const name of teams) {
    await prisma.team.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log('seed ok');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
