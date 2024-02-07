import { SetStateAction, useCallback, useEffect, useState } from 'react';

//type myCallbackType = { (myArgument: string): void }
type promiseCallbackType = {
  (): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;
  (): Promise<SetStateAction<undefined>>;
};

//export default function useAsync(callback:myCallbackType, dependencies = []) {
export default function useAsync(
  callback: promiseCallbackType,
  dependencies = []
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
