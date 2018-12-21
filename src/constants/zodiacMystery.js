export const chessboard = '' +
'---------Y++WGRoo+xYGW+---------' +
'--------WYGWYYoW+WRRxGoR--------' +
'-------RWWxYo+xWRoWWxGRoW-------' +
'------RWWGWW+WYG+GYYRRWRYW------' +
'-----YRxGRRRWYxxYWGGW+WYGRG-----' +
'----GYWRRWWGYWRGRoGW+WYYoYW+----' +
'---GGGYGWRo+RoGG+RGRWYGRGGWYY---' +
'--WW+GYRGG+YGYWYWWGWWoYYWxxRRR--' +
'-xGGWYRGWYx+RRWoGRRYYRYRYRRoWxR-' +
'G++GRRGWYRoRRYYGRGRRYRGYRYxRoYYR' +
'GxRGYYRGWYYxxRWWGWYW+GGxGGYGoYRY' +
'GYxRW+GW+GGGR------GWYRRYWWRxWRR' +
'+WW+RYGWWoWW--------WGRRGYoWWY+G' +
'GRWYYWRGGWG----------YYWWR+Y+WRW' +
'GWRoGRRGGWR----------RGG+WYGWGxR' +
'oWoW+GG+GGG----------oWGY+GGGWRG' +
'WWWWx+xxWRR----------RWGGRWRYYWR' +
'WRGRRGG+GGG----------RYxGYRY+WG+' +
'GoWoRYRYWRR----------WYGxYGYG+R+' +
'G+RWxYRYoRWR--------YRRGxRGxWGoR' +
'RRxWGG+YWWWWR------RoGGGYGGRYGxG' +
'YxRRYGRYYGGWWWRRRWRGWoxY+WRGxRxG' +
'GooYRYRoYoGRxWRoRRYYRRYxRYYG+RRY' +
'-RWYYRWRYYYWR+RGR+YRYGR+WGWoYYW-' +
'--WRYYGRWW+WxRRYRWRoWRRxRYWoWY--' +
'---G+oRGoYYGRYG+GGYRoGGYxRoGW---' +
'----GRRGWYxRYxYWWYG++RGYGGGR----' +
'-----WRxoW+YYWGGWW+WW+YWWYW-----' +
'------xYW+RRWWWRGRRYo+++Yx------' +
'-------xWR+W+RYxYWGxxYoWY-------' +
'--------GWWoRRxRRxWY+GYG--------' +
'---------GRWGW+GYGGWWGR---------'

export const chessboardSize = {
    x: 32,
    y: 32
}

export const zodiacType = {
    'R': {
        name: '红',
        originName: 'Red',
        type: 'Zodiac',
        value: 'R',
        nextType: 'G',
        className: 'red darken-4',
        highlight: false
    },
    'G': {
        name: '绿',
        originName: 'Green',
        type: 'Zodiac',
        value: 'G',
        nextType: 'Y',
        className: 'green darken-1',
        highlight: false
    },
    'Y': {
        name: '黄',
        originName: 'Yellow',
        type: 'Zodiac',
        value: 'Y',
        nextType: 'W',
        className: 'yellow lighten-1',
        highlight: false
    },
    'W': {
        name: '白',
        originName: 'White',
        type: 'Zodiac',
        value: 'W',
        nextType: 'R',
        className: 'grey lighten-4',
        highlight: false
    }
}

export const stellarRefractorType = {
    '+': {
        name: '十字',
        originName: 'Angular',
        type: 'StellarRefractor',
        value: '+',
        icon: 'add',
        className: 'blue-grey darken-1',
        selected: false
    },
    'x': {
        name: '交叉',
        originName: 'Jagged',
        type: 'StellarRefractor',
        value: 'x',
        icon: 'clear',
        className: 'blue-grey darken-1',
        selected: false
    },
    'o': {
        name: '周围',
        originName: 'Round',
        type: 'StellarRefractor',
        value: 'o',
        icon: 'crop_square',
        className: 'blue-grey darken-1',
        selected: false
    }
}

export const otherType = {
    '-': {
        name: '空',
        type: 'Block',
        value: '-',
        className: 'grey darken-4'
    }
}

export const chessmanType = {
    ...zodiacType,
    ...stellarRefractorType,
    ...otherType
}
