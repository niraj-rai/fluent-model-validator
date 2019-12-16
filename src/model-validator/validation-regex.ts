export const ZipCodeRegex = {
    'AUSTRIA': /^\d{4}$/,        
    'BELGIUM': /^\d{4}$/,
    'BULGARIA': /^\d{4}$/,
    'CROATIA': /^\d{5}$/,
    'CYPRUS': /^\d{4}$/,
    'CZECH': /^\d{5}\s(\d{3}\s\d{2})$/,
    'DENMARK': /^(?:[1-24-9]\d{3}|3[0-8]\d{2})$/,
    'ESTONIA': /^\d{5}$/,
    'FRANCE': /^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/,
    'GERMANY': /^[0-9]{5}$/,
    'GREECE': /^\d{3}\s{0,1}\d{2}$/,
    'HUNGARY': /^\d{4}$/,
    'ITALY': /^[0-9]{5}$/,
    'IRELAND': /(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/,
    'LATVIA': /^[Ll][Vv][-]{0,1}\d{4}$/,
    'LITHUANIA': /^[Ll][Tt][-]{0,1}\d{5}$/,
    'LUXEMBURG': /^L\s*-\s*?[\d]{4}$/,
    'MALTA': /^[A-Za-z]{3}\s?\d{4}$/,
    'NETHERLANDS': /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/,
    'PORTUGAL': /^\d{2}[-]?\d{3}$/,
    'POLAND': /^\d{2}[-]{0,1}\d{3}$/,
    'ROMANIA': /^\d{6}$/,
    'SLOVAKIA': /^\d{3}\s?\d{2}$/,
    'SLOVENIA': /^([Ss][Ii][- ]?)?\d{4}$/,
    'SPAIN': /^((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}$/,
    'SWEDEN': /^\d{3}\s*\d{2}$/,
    'SWITZERLAND': /^[1-9]\d{3}$/,
    'UK': /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/,
    'USA': /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    "DEFAULT": /^[0-9]/
}

export const PassportRegex = {
    'AUSTRIA': /^[a-zA-Z]\s?\d{7}$/,
    'BELGIUM': /^[a-zA-Z]{2}\d{6}$/,
    'BULGARIA': /^\d{9}$/,
    'CROATIA': /^\d{9}$/,
    'CYPRUS': /^[a-zA-z]\d{6,8}$/,
    'CZECH': /^\d{8}$/,
    'DENMARK': /^\d{9}$/,
    'ESTONIA': /^[a-zA-z]\d{7}$/,
    'FRANCE': /^\d{2}[a-zA_Z]{2}\d{5}$/,
    'GERMANY': /^(C|F|G|H|J|K|\d)\d{3}(C|-H|J-N|P|R|T|V-Z|\d){5}\d$/,
    'GREECE': /^[a-zA-Z]{2}[0-9]{7}$/,
    'HUNGARY': /^[a-zA-Z]{2}\d{6,7}$/,
    'ITALY': /^[a-zA-Z0-9]{2}\d{7}$/,
    'IRELAND': /^[a-zA-Z0-9]{2}\d{7}$/,
    'LATVIA': /^[a-zA-Z0-9]{2}\d{7}$/,
    'LITHUANIA': /^\w{8}$/,
    'LUXEMBURG': /^[a-zA-Z0-9]{8}$/,
    'MALTA': /^\d{7}$/,
    'NETHERLANDS': /^[a-zA-Z0-9]{9}$/,
    'PORTUGAL': /^[a-zA-z]\d{6}$/,
    'POLAND': /^[a-zA-Z]{2}[0-9]{7}$/,
    'ROMANIA': /^\d{8,9}$/,
    'SLOVAKIA': /^[a-zA-Z0-9]\d{7}$/,
    'SLOVENIA': /^P[A-Z]\d{7}$/,
    'SPAIN': /^[a-zA-z\d]{2}[a-zA-Z\d]?\d{6}$/,
    'SWEDEN': /^(\d)\1{7}$/,
    // 'SWITZERLAND': /^$/,
    'UK': /^(\d)\1{8}$/,
    'USA': /^(\d)\1{8}$/,
    "DEFAULT": /^[a-zA-Z0-9]/
}