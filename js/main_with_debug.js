//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

//Adding the size of the city in the column
function addColumns(cityPop){
		//Adding new new column for each row of new city size
    $('tr').each(function(i){
			//This is header row
    	if (i == 0){
				//made change here, making header city size
    		$(this).append('<th>City Size</th>');
    	} else {
				//Making a new row if it is not header
    		var citySize;
				//It is small size city if it is below 100000
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
					//It is medium size city if it is in between 100000 and 500000
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
					//made change above, It is large if it is above 500000
    		} else {
    			citySize = 'Large';
    		};
				//Made change here, adding vecll to the row
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//Adding different colors when mouse hovers over the words
function addEvents(){
	//made change here, when mouse hovers table, it changes the colors of the table
	$('table').mouseover(function(){
		//let a new variable named color
		var color = "rgb(";
		//a for loop looping over between 0 and 255 colors
		for (var i=0; i<3; i++){
			//random generating numbers from in between 0 and 255
			var random = Math.round(Math.random() * 255);
			//made change here, add the valor to the variable color
			color += random;
			//seperate the color for each value
			if (i<2){
				color += ",";
				//ending after the last color with a ')'
			} else {
				color += ")";
		};
	//made change here, changing the color of the text
	};

		$(this).css('color', color);
	});
//Adding a function which users can clic the table and pop up with a message
	function clickme(){
		//pop up with a message when the table is clicked
		alert('Hey, you clicked me!');
	};
	//adding the click element to the table
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
