//�Ҳ��� �����Ѵ�!!
var Flame=function(a,w,h,posX,posY){
	/*
	������ ��� �繰�� ��ü���� ���� Ŭ������ ǥ���ǰ�,
	�ش� �繰�� ������ ���´� ������ �Ӽ����� ǥ���ϸ�,
	�ش� �繰�� ������ ������ �Լ��� �޼���� ǥ���Ѵ�.

	������, ������ �Լ��� ��ü�� ������ �ɶ��� ��Ī�� �ٲ��.
	����: ��ü�� ������ ���¸� ǥ���Ѵٰ� �ؼ� �Ӽ�(property)
	�Լ�:��ü�� ������ ���۹���� ǥ���Ѵٰ� �ؼ� �޼���(method)
	*/
	/*����, ����, ũ��, ��ġ*/
	this.width=w;
	this.height=h;
	this.x=posX;//left
	this.y=posY;//top
	this.img;
	this.arr=new Array(4);
	this.area=a;
	this.count=0;//�̹����� ��ü�ϸ鼭 ������ index

	//�� ��ü�� �¾��(�޸𸮿� �ö�ö�)�ϰ���� �ʱ��۾�
	//�� ���� �޼��� ����
	this.init=function(){
		this.img=document.createElement("img");
		this.arr[0]="../images/flame/flame1.png";
		this.arr[1]="../images/flame/flame2.png";
		this.arr[2]="../images/flame/flame3.png";
		this.arr[3]="../images/flame/flame4.png";

		this.img.src=this.arr[this.count];
		
		//�̹����� ����,���� ũ��
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//ȣ���ڰ� �����ϴ� ������ ���ϰ���!!
		this.area.appendChild(this.img);
	}	
	//���۹�� ǥ��
	this.move=function(){
		var me=this;
		//�̹����� ��� ��ü�ؼ� �����ٰ���..
		//src���� ����..
		this.count++;
		if(this.count<=this.arr.length){
			this.count=0;
		}

		this.img.src=this.arr[this.count];

		setTimeout(function(){
			me.move();
		} ,100);
	}
}
