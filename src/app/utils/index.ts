function seededRand(seed, max = 1, min = 0) {
    if (!seed)
        seed = Math.floor(Math.random() * 10)

    seed = (seed * 9301 + 49297) % 233280;
    let rnd = seed / 233280

    return min + rnd * (max - min)
}

export {
    seededRand
}
