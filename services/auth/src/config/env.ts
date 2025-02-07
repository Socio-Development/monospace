const requiredVariables = [
  'SURREAL_URL'
]

export function validateEnv() {
  const missingEnv: string[] = requiredVariables.filter((variable) => !(variable in process.env))

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(', ')}`)
  }
}
