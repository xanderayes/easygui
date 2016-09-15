

















var globalSettings = {
	semaphoresColors:["white","#0f0","#f22"],
	backgrounds: [
		"url( '/images/bgpatterns/pattern1.png' )","#bbb","url( '/images/bgpatterns/q.png' )","url( '/images/bgpatterns/pattern2.jpg' )","url( '/images/bgpatterns/pattern3.jpg' )","url( '/images/bgpatterns/pattern4.jpg' )","url( '/images/bgpatterns/pattern5.jpg' )","url( '/images/bgpatterns/pattern6.jpg' )","url( '/images/bgpatterns/pattern7.jpg' )",
	],
	saveSettingsUrl: 'http://www.griddlers.net/pt_PT/nonogram/-/g/i01?p_p_lifecycle=2&p_p_resource_id=griddlerPuzzle&p_p_cacheability=cacheLevelPage&_gpuzzles_WAR_puzzles_name=touchScreen&_gpuzzles_WAR_puzzles_value=off',
	colorSet1:["ffffff", "000000", "ff0000", "00ff00", "0000ff", "00ffff", "ff00ff", "808080"],
	colorSet2:["ffffff", "000000", "ff0000", "ff00ff", "880088", "0000ff", "880000", "000088"]
	
}

var settings = {
	subscriber: false, 
	hideOneOnT: true,
	lineWidth:1,
	line5Width:3,
	line5Color:'black',
	lineColor:'gray',
	background: 0,	
	guidesColor:'rgba(0,80,240,0.3)',
	guides1Color:'rgba(0,240,80,0.5)',
	guidesWidth:5,
	mcr:'on',
	counters:'on',
	guides:3,
	font:0,
	largeButtons: 'off',
	touchScreen: 'off'
}

var puzzle = {
	width: 20,	
	height:15,
	hw:6,hh:5,
	palette: [
	  { s:0 , c:-1 }
	  ,{s:0,c:0,co:'0'},{s:0,c:1,co:'9'}
	],
	colors:[  
	"ffffff","000000","c98c00","ff0000","00d700","0000ff","00ffff","ff00ff",          
	],
	originalColors:[  
	"ffffff","000000","c98c00","ff0000","00d700","0000ff","00ffff","ff00ff",          
	],	
	usedColors:[  
	0,1          
	],
	topHeader: [
	[[2,3]],[[2,3],[2,1],[2,1]],[[2,1],[2,1],[2,1]],[[2,7]],[[2,4],[2,1],[2,1]],[[2,2],[2,1],[2,1]],[[2,2],[2,4],[2,1],[2,1]],[[2,1],[2,1],[2,1],[2,1],[2,1]],[[2,1],[2,1],[2,1],[2,3]],[[2,1],[2,1],[2,1],[2,4]],[[2,1],[2,1],[2,1],[2,2],[2,1]],[[2,1],[2,4],[2,3],[2,1]],[[2,1],[2,2],[2,1]],[[2,1],[2,10]],[[2,1],[2,1],[2,1],[2,2]],[[2,1],[2,1],[2,2]],[[2,1],[2,9]],[[2,2],[2,3]],[[2,10],[2,1]],[[2,3]]            
	],
	leftHeader: [
       	[[2,12]],[[2,2],[2,2]],[[2,1],[2,1]],[[2,1],[2,1]],[[2,1],[2,6],[2,4],[2,1]],[[2,1],[2,1],[2,1],[2,1],[2,1],[2,1]],[[2,4],[2,1],[2,1],[2,1],[2,1],[2,1]],[[2,1],[2,1],[2,6],[2,2],[2,1],[2,1]],[[2,1],[2,1],[2,1],[2,1],[2,1]],[[2,2],[2,1],[2,1],[2,1]],[[2,2],[2,11],[2,4]],[[2,1],[2,2],[2,10],[2,1]],[[2,2],[2,7],[2,1],[2,7]],[[2,1],[2,1]],[[2,3]]            
     ]
} 

var solution = {
	tStart:0,
	timeOffset:84005,
	solved: false,	
	colors: puzzle.colors,
	colorContrasts: [ "ffffff","ffffff" ,"ffffff","ffffff","ffffff","ffffff","ffffff","ffffff" ],
	body:[[2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
	bodyMarkers:[[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}]],
	topMarkers:[
[{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false}],[{x:false,o:false}]	
	],
	leftMarkers:[
[{x:false,o:false}],[{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false},{x:false,o:false},{x:false,o:false}],[{x:false,o:false},{x:false,o:false}],[{x:false,o:false}]	
	],
	topSemaphores:[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	leftSemaphores:[
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	undoStack: [],
	redoStack: []
} 




