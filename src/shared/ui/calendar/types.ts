type TRange<T> = [T, T]

type TLooseValuePiece = string | Date | null

export type TLooseValue = TLooseValuePiece | TRange<TLooseValuePiece>
