
var Maze = function(stage, width,height,x,y){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.flag=false;
	
	this.init=function(){
		var me=this;
		this.div=document.createElement("div");
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid red";

		this.stage.appendChild(this.div);
		
			this.div.addEventListener("click", function(){
			if(this.flag=!this.flag){
				me.div.style.background="yellow";		
			}else{
				me.div.style.background="";		
			}
		});

	}

}