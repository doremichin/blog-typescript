export const Validate : any = {
  isValidEmail: (value : string) => !!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  isMinLength: (value : string, length : number) => value.length > length,
  isMaxLength: (value : string, length : number) => value.length < length,
};
