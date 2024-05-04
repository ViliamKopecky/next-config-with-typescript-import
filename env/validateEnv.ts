import pkg from "../package.json"
import { validateSemver } from './validateSemver'

const requiredNodeVersion = pkg.engines.node
const currentNodeVersion = process.version

const requiredNpmVersion = pkg.engines.npm
const currentNpmVersion = await import('child_process').then(({ execSync }) => execSync('npm -v').toString().trim())

const validation = {
    publicEnv: await import('./publicEnv').then(() => ({ ok: true }), ({ issues }) => ({ ok: false, issues })),
    serverEnv: await import('./serverEnv').then(() => ({ ok: true }), ({ issues }) => ({ ok: false, issues })),
    node: validateSemver({
        required: requiredNodeVersion,
        current: currentNodeVersion,
    }),
    npm: validateSemver({
        required: pkg.engines.npm,
        current: currentNpmVersion,
    }),

}

const errorsEntries = Object.entries(validation).filter(([_, { ok }]) => !ok)

const ok = errorsEntries.length === 0


if (!ok) {
    console.error(`Validation failed (${errorsEntries.length}):`)

    for (const [key, { ok, ...validation }] of errorsEntries) {
        console.error(`${key}:`)
        console.dir(validation, { depth: 10 })
    }

    process.exit(1)
}