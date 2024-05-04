import semver from "semver"

export const validateSemver = (input: {
    required: string
    current: string
}) => {
    const { required, current } = input
    const ok = semver.satisfies(current, required)
    return {
        ok,
        required,
        current,
    }
}
