export function request(request: any) {
  console.log('f(): evaluated');
  return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f(): called');
  };
}
