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
        style: {
            backgroundColor: '#f00'
        }
    },
    'G': {
        name: '绿',
        originName: 'Green',
        type: 'Zodiac',
        value: 'G',
        nextType: 'Y',
        style: {
            backgroundColor: '#0f0'
        }
    },
    'Y': {
        name: '黄',
        originName: 'Yellow',
        type: 'Zodiac',
        value: 'Y',
        nextType: 'W',
        style: {
            backgroundColor: '#ff0'
        }
    },
    'W': {
        name: '白',
        originName: 'White',
        type: 'Zodiac',
        value: 'W',
        nextType: 'R',
        style: {
            backgroundColor: '#fff'
        }
    }
}

export const stellarRefractorType = {
    '+': {
        name: '十字',
        originName: 'Angular',
        type: 'StellarRefractor',
        value: '+',
        icon: 'add',
        style: {
            backgroundColor: '#aaa'
        }
    },
    'x': {
        name: '交叉',
        originName: 'Jagged',
        type: 'StellarRefractor',
        value: 'x',
        icon: 'clear',
        style: {
            backgroundColor: '#aaa'
        }
    },
    'o': {
        name: '周围',
        originName: 'Round',
        type: 'StellarRefractor',
        value: 'o',
        icon: 'panorama_fish_eye',
        style: {
            backgroundColor: '#aaa'
        }
    }
}

export const otherType = {
    '-': {
        name: '空',
        type: 'Block',
        value: '-',
        style: {
            backgroundColor: '#000'
        }
    }
}

export const chessmanType = {
    ...zodiacType,
    ...stellarRefractorType,
    ...otherType
}
