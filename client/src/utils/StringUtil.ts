export class StringUtil {
  public static makeid(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public static isUrl = (str: string) =>
    /^https?:\/\/.*?\..*?\/[a-z/-].+(?:\.(?:png|jpg|jpeg|svg))?$/gim.test(str);

  public static isDate = (str: string | number) => {
    try {
      let date = new Date(str);
      let timestamp = date.getTime();

      if (timestamp < 0) return false;

      if (isNaN(timestamp)) {
        date = new Date(+str);
        timestamp = date.getTime();

        if (isNaN(timestamp)) return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  };
}
