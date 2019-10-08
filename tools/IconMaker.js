function IconMaker(window, document) {


// Autogenerated with DRAKON Editor 1.30


function addIcon(div, item) {
    var canvas, def, size, unit, unit2
    // item 46
    size = 80
    unit = Math.round(size / 7)
    unit2 = Math.round(size / 14)
    // item 47
    def = Theme.build(item)
    // item 45
    canvas = make(div, "canvas")
    canvas.width = size
    canvas.height = size
    canvas.style.width = size
    canvas.style.height = size
    canvas.style.margin = "10px"
    // item 99
    fillCanvas(
        canvas,
        size,
        def.background
    )
    // item 70
    drawLine(
    	canvas,
    	unit2 * 4,
    	unit * 1.5,
    	unit2 * 4,
    	unit * 5.5,
    	def.line
    )
    // item 71
    drawLine(
    	canvas,
    	unit * 2,
    	unit * 3.5 + 0.5,
    	unit2 * 10,
    	unit * 3.5 + 0.5,
    	def.line
    )
    // item 72
    drawLine(
    	canvas,
    	unit2 * 10,
    	unit * 3.5 + 0.5,
    	unit2 * 10,
    	unit * 5.5 + 0.5,
    	def.line
    )
    // item 67
    drawRect(
    	canvas,
    	unit2,
    	unit2,
    	unit2 * 6,
    	unit2 * 3,
    	def.iconBack,
    	def.iconBorder
    )
    // item 69
    drawRect(
    	canvas,
    	unit2,
    	unit2 * 9,
    	unit2 * 6,
    	unit2 * 3,
    	def.iconBack,
    	def.iconBorder
    )
    // item 87
    drawRect(
    	canvas,
    	unit2 * 8,
    	unit2 * 9,
    	unit2 * 4,
    	unit2 * 3,
    	getBack(def, "loopbegin"),
    	getLine(def, "loopbegin")
    )
    // item 90
    drawRect(
    	canvas,
    	unit2,
    	unit2 * 5,
    	unit2 * 6,
    	unit2 * 3,
    	getBack(def, "question"),
    	getLine(def, "question")
    )
}

function buildThemeDefinitions() {
    // item 103
    var row1 = [
    	["theme11.png", "#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#c0d0ff", "#b0b0b0", [
    		["insertion", "#ffffff", "#000000", "none", "#ffffff"],
    		["loopbegin", "#FFFFE0", "#000000", "#000000"],
    		["callout", "#FFFC96", "#000000", "#000000"]
    	]],
    	["theme12.png", "#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#ffffff", [
    	["insertion", "#ffffff", "#000000", "none", "#ffffff"]
            ]],
    	["theme13.png", "#FFFFFF", "#000000", "#827D7D", "#5E5757", "#000000", "#DADEFF", "#b0b0b0", [
    		["insertion", "#ffffff", "#000000", "none", "#ffffff"],
    		["callout", "#FFFC96", "#000000", "#000000"]
    	]],
    	["theme14.png", "#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#c0d0ff", "#b0b0b0", [
    		["insertion", "#ffffff", "#000000", "none", "#ffffff"],
    		["question", "#ffffd3", "#000000", "#000000"],
    		["select", "#ffdbdb", "#000000", "#000000"],
    		["loopbegin", "#deffde", "#000000", "#000000"],
    		["callout", "#FFFC96", "#000000", "#000000"]
    	]]
     ]
    // item 104
    var row2 = [
    
    	["theme21.png", "#568FFF", "#ffffff", "none", "#626262", "#626262", "#ffffff", "#B1CAFF", [
    		["question", "#436AB9", "#ffffff", "none"],
    		["insertion", "#568FFF", "#ffffff", "none", "#436AB9"],
    		["loopbegin", "#5A72A2", "#ffffff", "none"],
    		["callout", "#FFFC96", "#000000", "#626262"],
    		["comment", "#568FFF", "#ffffff", "none"]
    	]],
    
    	["theme22.png", "#568FFF", "#ffffff", "none", "#626262", "#626262", "#ffffff", "#B1CAFF", [
    		["question", "#2A9E4B", "#ffffff", "none"],
    		["insertion", "#568FFF", "#ffffff", "none", "#436AB9"],
    		["loopbegin", "#3EBD62", "#ffffff", "none"],
    		["callout", "#FFFC96", "#000000", "#626262"],
    		["comment", "#568FFF", "#ffffff", "none"]
    	]],	
    
    	["theme23.png", "#568FFF", "#ffffff", "none", "#626262", "#626262", "#ffffff", "#B1CAFF", [
    		["question", "#ffffff", "#000000", "#00137F"],
    		["insertion", "#568FFF", "#ffffff", "none", "#436AB9"],
    		["loopbegin", "#5A72A2", "#ffffff", "none"],
    		["callout", "#FFFC96", "#000000", "#626262"],
    		["comment", "#568FFF", "#ffffff", "none"]
    	]],
    
    	["theme24.png", "#FFE26C", "#000000", "none", "#626262", "#626262", "#ffffff", "#FFA849", [
    		["question", "#FFA849", "#000000", "none"],
    		["insertion", "#FFE26C", "#000000", "none", "#CBB145"],
    		["loopbegin", "#F2C371", "#000000", "none"],
    		["callout", "#FCFCFC", "#000000", "#626262"],
    		["comment", "#FFE26C", "#000000", "none"]
    	]]
     ]
    // item 108
    var row3 = [
    	["theme31.png", "#EDEEF0", "#000000", "#A0A0A0", "#626262", "#626262", "#ffffff", "#C2C0C0", [
    		["question", "#DE3E26", "#ffffff", "none"],
    		["insertion", "#EDEEF0", "#000000", "none", "#C2C0C0"],
    		["loopbegin", "#FF5454", "#000000", "none"],
    		["callout", "#FFFFF0", "#000000", "#626262"],
    		["comment", "#EDEEF0", "#000000", "none"]
    	]],	
    
    	["theme32.png", "#EDEEF0", "#000000", "#A0A0A0", "#626262", "#626262", "#ffffff", "#C2C0C0", [
    		["question", "#EDEEF0", "#000000", "#A0A0A0"],
    		["insertion", "#EDEEF0", "#000000", "none", "#C2C0C0"],
    		["loopbegin", "#EDEEF0", "#000000", "#A0A0A0"],
    		["callout", "#FFFFF0", "#000000", "#626262"],
    		["comment", "#EDEEF0", "#000000", "none"]
    	]],	
    	
    	["theme33.png", "#EDEEF0", "#000000", "#A0A0A0", "#626262", "#626262", "#ffffff", "#C2C0C0", [
    		["question", "#C2C0C0", "#000000", "#A0A0A0"],
    		["insertion", "#EDEEF0", "#000000", "none", "#C2C0C0"],
    		["loopbegin", "#A0A0A0", "#000000", "#A0A0A0"],
    		["callout", "#FFFFF0", "#000000", "#626262"],
    		["comment", "#EDEEF0", "#000000", "none"]
    	]],	
    	
    	["theme34.png", "#ffffff", "#000000", "none", "#000000", "#000000", "#3BAD4D", "#9EC85C", [
    		["question", "#215B2A", "#ffffff", "none"],
    		["insertion", "#EDEEF0", "#000000", "none", "#9EC85C"],
    		["loopbegin", "#9EC85C", "#000000", "none"],
    		["callout", "#FFFFF0", "#000000", "#626262"],
    		["comment", "#EDEEF0", "#000000", "none"]
    	]]
    ]
    // item 105
    var row4 = [
    	["theme41.png", "#EDEEF0", "#000000", "#A0A0A0", "#626262", "#626262", "#ffffff", "#C2C0C0", [
    		["question", "#436AB9", "#ffffff", "none"],
    		["insertion", "#EDEEF0", "#000000", "none", "#C2C0C0"],
    		["loopbegin", "#5A72A2", "#ffffff", "none"],
    		["callout", "#FFFFF0", "#000000", "#626262"],
    		["comment", "#EDEEF0", "#000000", "none"]
    	]],
    	
    	["theme42.png", "#F5EBE4", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#b0b0b0", [
    		["insertion", "#F5EBE4", "#000000", "#000000", "#F5EBE4"],
    		["question", "#e5e6e4", "#000000", "#000000"],
    		["select", "#cfd2cd", "#000000", "#000000"],
    		["loopbegin", "#CAC8C8", "#000000", "#000000"],
    		["callout", "#FFFC96", "#000000", "#000000"]
    	]],
    	["theme43.png", "#bfd8bd", "#000000", "#597A62", "#000000", "#000000", "#FFFFFF", "#70b070", [
    		["insertion", "#bfd8bd", "#000000", "#597A62", "#bfd8bd"],
    		["question", "#edeec9", "#000000", "#597A62"],
    		["select", "#98c9a3", "#000000", "#597A62"],
    		["loopbegin", "#98c9a3", "#000000", "#597A62"],
    		["callout", "#FFFC96", "#000000", "#000000"]
    	]],
    	["theme44.png", "#ffffff", "#000000", "none", "#000000", "#000000", "#0094FF", "#7FC9FF", [
    		["question", "#12279F", "#ffffff", "none"],
    		["insertion", "#ffffff", "#000000", "none", "#7FC9FF"],
    		["loopbegin", "#7FC9FF", "#000000", "none"],
    		["callout", "#FFFFF0", "#000000", "#626262"],
    		["comment", "#ffffff", "#000000", "none"]
    	]]
     ]
    // item 106
    var row5 = [
    	["theme51.png", "#000000", "#ffffff", "#B2B2B2", "#a8a8a8", "#e3e3e3", "#000000", "#000000", [
    		["insertion", "#000000", "#ffffff", "none", "#000000"],
    		["callout", "#000000", "#ffffff", "#B2B2B2"]
    	]],
    	["theme52.png", "#000000", "#ace4ff", "#6B6DFF", "#6B6DFF", "#ace4ff", "#000540", "#000080", [
    		["insertion", "#000000", "#ace4ff", "#6B6DFF", "#000000"],
    		["callout", "#000590", "#ace4ff", "#6B6DFF"]
    	]],
    	["theme53.png", "#000000", "#fff1c8", "#797954", "#797954", "#fff1c8", "#000020", "#000080", [
    		["insertion", "#000000", "#fff1c8", "#797954", "#000000"],
    		["question", "#1f1f00", "#fff1c8", "#999974"],
    		["select", "#250100", "#fff1c8", "#999974"],
    		["loopbegin", "#042d00", "#fff1c8", "#999974"],
    		["callout", "#000590", "#fff1c8", "#999974"]
    	]],
    	["theme54.png", "#000000", "#4aff4d", "#008000", "#008000", "#4aff4d", "#000000", "#007000", [
    		["insertion", "#000000", "#4aff4d", "#008000", "#000000"],
    		["question", "#002400", "#4aff4d", "#008000"],
    		["select", "#000000", "#4aff4d", "#008000"],
    		["loopbegin", "#005100", "#4aff4d", "#008000"],
    		["callout", "#002400", "#4aff4d", "#008000"]
    	]]
     ]
    // item 109
    var row6 = [
    	["theme12.png", "#FFFFFF", "#000000", "#b0b0b0", "#626262", "#626262", "#FFFFFF", "#d0d0d0", [
    	["insertion", "#ffffff", "#000000", "#b0b0b0", "#ffffff"],
    	["callout", "#FFFFF0", "#000000", "#b0b0b0"]
            ], 2],	
    
    	["theme32.png", "#AFF0DD", "#000000", "#00987E", "#626262", "#626262", "#ffffff", "#92DAC5", [
    		["question", "#92DAC5", "#000000", "#00987E"],
    		["insertion", "#AFF0DD", "#000000", "none", "#92DAC5"],
    		["loopbegin", "#85C2C5", "#000000", "#00987E"],
    		["callout", "#FFFFF0", "#000000", "#00987E"],
    		["comment", "#AFF0DD", "#000000", "#00987E"]
    	], 2],	
    	
    	["theme34.png", "#C4E2F8", "#000000", "#5C9CCB", "#000000", "#000000", "#ffffff", "#80BFEF", [
    		["question", "#96CBF3", "#000000", "#5C9CCB"],
    		["insertion", "#C4E2F8", "#000000", "#5C9CCB", "#80BFEF"],
    		["loopbegin", "#80BFEF", "#000000", "#5C9CCB"],
    		["callout", "#FFFFF0", "#000000", "#5C9CCB"],
    		["comment", "#C4E2F8", "#000000", "#5C9CCB"]
    	], 2],
    
    	["theme12.png", "#fff68f", "#000000", "#b0b0b0", "#626262", "#626262", "#FFFFFF", "#FFE26C", [
    	["question", "#FFE26C", "#000000", "#b0b0b0"],
    	["insertion", "#fff68f", "#000000", "#b0b0b0", "#FFE26C"],
    	["callout", "#fff64f", "#000000", "#b0b0b0"]
            ], 2]
    ]
    // item 110
    var row7 = [
    	["theme12.png", "#FFFFFF", "#000000", "#b0b0b0", "#626262", "#626262", "#FFFFFF", "#d0d0d0", [
    	["insertion", "#ffffff", "#000000", "#b0b0b0", "#ffffff"],
    	["callout", "#FFFFF0", "#000000", "#b0b0b0"]
            ], 3],	
    
    	["theme32.png", "#AFF0DD", "#000000", "#00987E", "#626262", "#626262", "#ffffff", "#92DAC5", [
    		["question", "#92DAC5", "#000000", "#00987E"],
    		["insertion", "#AFF0DD", "#000000", "none", "#92DAC5"],
    		["loopbegin", "#85C2C5", "#000000", "#00987E"],
    		["callout", "#FFFFF0", "#000000", "#00987E"],
    		["comment", "#AFF0DD", "#000000", "#00987E"]
    	], 3],	
    	
    	["theme34.png", "#C4E2F8", "#000000", "#5C9CCB", "#000000", "#000000", "#ffffff", "#80BFEF", [
    		["question", "#96CBF3", "#000000", "#5C9CCB"],
    		["insertion", "#C4E2F8", "#000000", "#5C9CCB", "#80BFEF"],
    		["loopbegin", "#80BFEF", "#000000", "#5C9CCB"],
    		["callout", "#FFFFF0", "#000000", "#5C9CCB"],
    		["comment", "#C4E2F8", "#000000", "#5C9CCB"]
    	], 3],
    
    	["theme12.png", "#fff68f", "#000000", "#b0b0b0", "#626262", "#626262", "#FFFFFF", "#FFE26C", [
    	["question", "#FFE26C", "#000000", "#b0b0b0"],
    	["insertion", "#fff68f", "#000000", "#b0b0b0", "#FFE26C"],
    	["callout", "#fff64f", "#000000", "#b0b0b0"]
            ], 3]	
    ]
    // item 107
    return [row1, row2, row3, row4, row5, row6, row7]
}

function drawLine(canvas, x, y, x2, y2, line) {
    var ctx
    // item 62
    ctx = canvas.getContext("2d")
    // item 65
    ctx.strokeStyle = line
    ctx.lineWidth = 2
    // item 66
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function drawRect(canvas, x, y, w, h, back, line) {
    var ctx
    // item 53
    ctx = canvas.getContext("2d")
    // item 55
    ctx.fillStyle = back
    // item 54
    ctx.fillRect(x, y, w, h)
    // item 56
    ctx.strokeStyle = line
    ctx.lineWidth = 2
    // item 68
    ctx.strokeRect(x, y, w, h)
}

function fillCanvas(canvas, size, color) {
    var ctx
    // item 96
    ctx = canvas.getContext("2d")
    // item 98
    ctx.fillStyle = color
    // item 97
    ctx.fillRect(0, 0, size, size)
}

function get(id) {
    // item 22
    var element = document.getElementById(id)
    // item 19
    if (element) {
        // item 23
        return element
    } else {
        // item 24
        throw Error("Element '" + id + "' not found")
    }
}

function getBack(def, type) {
    // item 78
    Theme.current = def
    // item 79
    return Theme.getIconBack(type)
}

function getLine(def, type) {
    // item 88
    Theme.current = def
    // item 86
    return Theme.getIconBorder(type)
}

function init() {
    var definitions, root, rowDiv
    // item 13
    definitions = buildThemeDefinitions()
    // item 33
    root = get("icons")
    // item 340001
    var _ind34 = 0;
    var _col34 = definitions;
    var _len34 = _col34.length;
    while (true) {
        // item 340002
        if (_ind34 < _len34) {
            
        } else {
            break;
        }
        // item 340004
        var row = _col34[_ind34];
        // item 36
        rowDiv = make(root, "div")
        // item 370001
        var _ind37 = 0;
        var _col37 = row;
        var _len37 = _col37.length;
        while (true) {
            // item 370002
            if (_ind37 < _len37) {
                
            } else {
                break;
            }
            // item 370004
            var item = _col37[_ind37];
            // item 39
            addIcon(rowDiv, item)
            // item 370003
            _ind37++;
        }
        // item 340003
        _ind34++;
    }
}

function make(parent, tag) {
    // item 30
    var element = document.createElement(tag)
    parent.appendChild(element)
    // item 32
    //element.ontouchstart = prevent
    //element.ontouchmove = prevent
    //element.ontouchend = prevent
    // item 31
    return element
}


this.init = init

}
