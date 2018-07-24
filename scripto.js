void open_link(){
	window.
}window.alert("working");

window.addEventListener("keyboard",keys);
d = document.getElementById("test");
context=d.getContext("2d");

context.fillStyle="black";
context.fillRect(0,0,d.width,d.height);
	
	
divider=30;
delta_time=1000/divider;
	
	x=1;
	y=1;
	
setInterval(main(),delta_time);	

function main(){
	context.fillStyle="white";
	context.fillRect(0,0,d.width,d.height);
	
	context.fillStyle="black";
	context.fillRect(x,y,x+2,y+2);
	
	window.alert("main");
}


/*
	37 //left arrow
	38 //down arrow
	39 //right arrow
	40 //up arrow
*/
	
	
function keys(evt){
	switch(evt.keyCode){
		case 37:{
			window.alert("left key");
			if(x==0){
				x=499;
			}else{	
				x--;
			}
			break;
		}
		case 38:{
			if(y==0){
				y=499;
			}else{	
				y--;
			}
			break;
		}case 39:{	
			if(x==499){
				x=0;
			}else{	
				x++;
			}
			break;
		}case 40:{
			if(y==499){
				y=0;
			}else{	
				y++;
			}
			break;
		}
	}
}
