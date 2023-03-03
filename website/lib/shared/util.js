function supportsWorkerType() {
    let supports = false

    const tester = {
        get type() { supports = true } // it's been called, it's supported
    }

    try {
        new Worker('blob://', tester).terminate()
    }
    finally {
        return supports
    }
}

export {
    supportsWorkerType
}