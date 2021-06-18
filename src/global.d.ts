declare interface FCProps {
  className?: string;
  children?: React.ReactNode;
}

declare type MaybeNull<T> = T | null;
declare type MaybeUndefined<T> = T | undefined;
declare type Maybe<T> = T | MaybeNull<T> | MaybeUndefined<T>;
