class DateHelper {

    constructor() {
        throw new Error('DateHelper class cannot be instantiated');
    }

    static stringToDate(string) {

        // Checking if the informed string is in the correct format for date
        if (!/\d{4}-\d{2}-\d{2}/.test(string))
            throw new Error('Date must be in the format YYYY-MM-DD');

        // Getting the in string format and creanting a new date object
        // Date month is stored from 0 - 11. Therefore, the value needs to be 
        // decreased in one to store the proper month
        return new Date(...string.split('-').map((item, index) => item - index % 2) 
        );

    }

    static dateToString(date) {

        // Getting the date and converting to string
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    }

}