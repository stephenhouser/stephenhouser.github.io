// Biorhythm

var today = new Date();
var birth_date;
var board_div = 'jxgbox';
var theBoard;

function days_since(year, month, day) {
    var today = new Date();
    var then = new Date(year, (month - 1), day);
    return days_between(then, today);
}

// calculate integral number of days between two dates
function days_between(day1, day2) {
    // javascript dates getTime() in milliseconds
    var ms_in_day = 1000 * 60 * 60 * 24;

    // ensure day1 > day2 to result in positive calculation result later
    if (day1 < day2) {
        var temp = day2;
        day2 = day1;
        day1 = temp;
    }

    // approximation of date difference based on day calculations
    //var days = Math.floor((day1.getTime() - day2.getTime()) / (ms_in_day));
    // more exact, but requires times of two dates to be accurately set
    var days = (day1.getTime() - day2.getTime()) / (ms_in_day);
    return days;
}

// calculate biorhythm value for the_date based on birth date and period.
// period is determined by the biorhythm being calculated, e.g. physical is
// a 23 day period.
function basic_biorhythm(birth_date, the_date, period) {
    var days = days_between(birth_date, the_date);
    var biorhythm_value = Math.sin((2.0 * Math.PI * days) / period);
    //return biorhythm_value;
    return Math.round(biorhythm_value * 100) / 100;  // round off to nearest 0.1%
}

// The primary rhythms

function physical_biorhythm(birth_date, the_date) {
    return basic_biorhythm(birth_date, the_date, 23);
}

function emotional_biorhythm(birth_date, the_date) {
    return basic_biorhythm(birth_date, the_date, 28);
}

function intellectual_biorhythm(birth_date, the_date) {
    return basic_biorhythm(birth_date, the_date, 33);
}

// The secondary rhythms

function intuitive_biorhythm(birth_date, the_date) {
    return basic_biorhythm(birth_date, the_date, 38);
}

function aesthetic_biorhythm(birth_date, the_date) {
    return basic_biorhythm(birth_date, the_date, 43);
}

function awareness_biorhythm(birth_date, the_date) {
    return basic_biorhythm(birth_date, the_date, 48);
}

function spiritual_biorhythm(birth_date, the_date) {
    return basic_biorhythm(birth_date, the_date, 53);
}

// Plot Biorhythm curve and current value.
// Uses 'func' as the underlying Biorhythm generator function to
//	get the values to plot.
function plot_rhythm(theBoard, func, name, curve_attributes, point_attributes) {
	var todays_value = func(birth_date, today);

	// function used by JSXGraph curve plotting function.
	// Uses 'func' as underlying biorhythm generator
	// Takes 'x' as offset from origin of graph and
	// 	converts it to a time offset to be passed to biorhythm generator
	var plot_function = function(x) { 
		var ms_in_day = 1000 * 60 * 60 * 24;
		var relative_date = new Date(today.getTime() + (x * ms_in_day));
		return func(birth_date, relative_date); 
	};

    // x is # of days so to get days at origin
    curve_attributes['curveType'] = 'plot';
    curve_attributes['highlightStrokeColor'] = curve_attributes['strokeColor'];
    theBoard.createElement('curve', ['x', plot_function, 'x'], curve_attributes);

	point_attributes['fillColor'] = curve_attributes['strokeColor'];
	point_attributes['highlightStrokeColor'] = point_attributes['fillColor'];
	point_attributes['name'] = name + " " + (todays_value * 100) + "%";
	point_attributes['fixed'] = true;
 	p = theBoard.createElement('point',[0, todays_value], point_attributes);
 	p.label.distanceY = 0;
}

function clear_board() {
	JXG.JSXGraph.freeBoard(theBoard);
	theBoard = JXG.JSXGraph.initBoard(board_div, {originX: 200, originY: 125, unitX: 10, unitY: 100});  
	var xaxis = theBoard.createElement('axis', [[0,0], [1,0]], {highlightStrokeColor: 'blue'});
	var yaxis = theBoard.createElement('axis', [[0,0], [0,1]], {highlightStrokeColor: 'blue'});
}

function create_board(div) {
	board_div = div;
	theBoard = JXG.JSXGraph.initBoard(board_div, {originX: 200, originY: 125, unitX: 10, unitY: 100});  
	clear_board();
}

function zoomIn() {
	theBoard.zoomX *= theBoard.options.zoom.factor; 
	theBoard.applyZoom();
}

function zoomOut() {
	theBoard.zoomX /= theBoard.options.zoom.factor; 
	theBoard.applyZoom();
}

function zoomReset() {
	theBoard.zoom100();
}

// Calculate the Biorhythm values and plot them based on the
//	input form values.
function bio_calc(theForm) {
	with (theForm) {
		if (year.value == null || year.value == 0) {
			return;
		}
		
		if (month.value == null || month.value == 0) {
			return;
		}
		
		if (day.value == null || day.value == 0) {
			return;
		}
		
    	birth_date = new Date(year.value, (month.value - 1), day.value);
    	
	    days.value = Math.round(days_between(birth_date, today));        
        physical.value = Math.round(physical_biorhythm(birth_date, today) * 100);
    	emotional.value = Math.round(emotional_biorhythm(birth_date, today) * 100);
    	intellectual.value = Math.round(intellectual_biorhythm(birth_date, today) * 100);
     
	    intuitive.value = Math.round(intuitive_biorhythm(birth_date, today) * 100);
        aesthetic.value = Math.round(aesthetic_biorhythm(birth_date, today) * 100);
    	awareness.value = Math.round(awareness_biorhythm(birth_date, today) * 100);
    	spiritual.value = Math.round(spiritual_biorhythm(birth_date, today) * 100);

        clear_board();
        
     	p = theBoard.createElement('point',[0, -1.1], {style: 0, fixed: true, name: today.toString().substring(0, 15)});
     	p.label.distanceY = 0;

    	plot_rhythm(theBoard, physical_biorhythm, "Physical", {strokeColor: 'red'}, {});
    	plot_rhythm(theBoard, emotional_biorhythm, "Emotional", {strokeColor: 'blue'}, {});
    	plot_rhythm(theBoard, intellectual_biorhythm, "Intellectual", {strokeColor: 'black'}, {});
    	//plot_rhythm(theBoard, intuitive_biorhythm, "Intuitive", {strokeColor: 'green'}, {});
    }
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function clear_bio_cookie(theForm) {
	 with (theForm) {
		 eraseCookie('biorhythm_date');
	 }
}
function save_bio_cookie(theForm) {
	 with (theForm) {
	    	createCookie('biorhythm_date', year.value + "/" + month.value + "/" + day.value, 120);
	 }
}

function load_bio_cookie(theForm) {
	cooked = readCookie('biorhythm_date');
	if (cooked != null) {
		 with (theForm) {
			 	var splitted = cooked.split("/");
		    	year.value = splitted[0];
		    	month.value = splitted[1];
		    	day.value = splitted[2];
		 }		
	}
}
