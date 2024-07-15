export function defineMap<Map extends Record<string, any>>(map: Map, defaultKey: string = 'default') {
  return new Proxy(map, {
    get(target, prop) {
      return prop in target ? target[prop as keyof Map] : target[defaultKey];
    },
  }) as Map & {
    [key: string]: any;
  };
}
