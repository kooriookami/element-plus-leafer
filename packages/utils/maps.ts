export function defineMap<Map extends Record<string, any>>(map: Map, fallback: string = 'default') {
  return new Proxy(map, {
    get(target, prop) {
      return prop in target ? target[prop as keyof Map] : target[fallback];
    },
  }) as Map & {
    [key: string]: any;
  };
}
