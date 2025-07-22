export function defineMap<Map extends Record<string, any>>(mapFn: (() => Map), fallback: string = 'default') {
  return new Proxy({}, {
    get(target, prop) {
      const map = mapFn();
      return prop in map ? map[prop as keyof Map] : map[fallback];
    },
  }) as Map & {
    [key: string]: any;
  };
}
