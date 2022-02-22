import runSeed from "$lib/services/db/seed/runseed"

export async function post() {
  
  await runSeed();

  return {
    status: 204
  }
}