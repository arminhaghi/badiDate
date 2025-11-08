import { DateTime } from 'luxon';

export interface YearMonthDay {
    year: number;
    month: number;
    day: number;
}

export interface YearHolyDayNumber {
    year: number;
    holyDayNumber: number;
}

export type InputDate = DateTime | Date | YearMonthDay | YearHolyDayNumber;

export type UnderlineFormat = 'css' | 'u' | 'diacritic' | 'none';

export interface BadiDateSettings {
    defaultLanguage?: string;
    underlineFormat?: UnderlineFormat;
    useClockLocations?: boolean;
}

export class BadiDate {
    constructor(date: InputDate);
    ayyamiHaLength: number;
    day: number;
    gregorianDate: DateTime;
    holyDayNumber: number | undefined;
    invalidReason: string | undefined;
    isValid: boolean;
    kullIShay: number;
    month: number;
    nextDay: BadiDate;
    nextMonth: BadiDate;
    previousDay: BadiDate;
    previousMonth: BadiDate;
    vahid: number;
    weekday: number;
    workSuspended: boolean | undefined;
    year: number;
    yearInVahid: number;
    format(formatString?: string, language?: string): string;
    holyDay(language?: string): string;
    equals(other: BadiDate): boolean;
    valueOf(): number;
    toJSON(): YearMonthDay;
    static parse(input: string | YearMonthDay): BadiDate
}

export class LocalBadiDate {
    constructor(
        date: InputDate,
        latitude: number,
        longitude: number,
        timezoneId: string,
        options?: LocalBadiDateOptions
    );

    badiDate: BadiDate;
    clockLocation: string | undefined;
    end: DateTime;
    holyDayCommemoration: DateTime | undefined;
    latitude: number;
    longitude: number;
    nextDay: LocalBadiDate;
    nextMonth: LocalBadiDate;
    previousDay: LocalBadiDate;
    previousMonth: LocalBadiDate;
    solarNoon: DateTime;
    start: DateTime;
    sunrise: DateTime;
    timezoneId: string;
    toJSON(): { date: YearMonthDay, latitude: number, longitude: number, timezoneId: string };
    static parse(input: string | { date: YearMonthDay, latitude: number, longitude: number, timezoneId: string }): LocalBadiDate;
}

export function badiDateSettings(settings: BadiDateSettings): void;

export interface LocalBadiDateOptions {
    useClockLocations?: boolean;
}

export { DateTime };