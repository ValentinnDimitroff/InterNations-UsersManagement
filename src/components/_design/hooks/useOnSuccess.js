import { useNotify, useRedirect, useRefresh } from "ra-core"
import { useCallback } from "react"

export const useOnSuccess = (message, redirectTo) => {
    const notify = useNotify()
    const redirect = useRedirect()
    const refresh = useRefresh()

    const callback = useCallback(
        () => {
            notify(message)
            redirect(redirectTo)
            refresh()
        }, [message, notify, redirect, redirectTo, refresh])

    return callback
}