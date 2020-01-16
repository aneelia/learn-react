export const logging = store => next => action => {
    console.log(`Done: ${action.type}`)
    return next(action)
}