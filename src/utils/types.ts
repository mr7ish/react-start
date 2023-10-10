/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Void function
 */
export type Fn = () => void

/**
 * Any Function
 */
export type AnyFn = (...args: any[]) => any

export type WindowEventName = keyof WindowEventMap
export type DocumentEventName = keyof DocumentEventMap