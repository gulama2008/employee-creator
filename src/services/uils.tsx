export class Utils { 
    public static dateParser(dateStr:string) { 
        const [day, month, year] = dateStr.split('/');
        const date = new Date(+year, +month, +day);
        return date;
    }
}