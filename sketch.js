let points1 = [[0,-10], [-2,-5], [-4,-7],[-3,-2],[-5,-3],[-5,-2],[-8,-3],[-7,0],[-9,1],[-4,5],[-5,6],[-0.5,5],[-1,9],
						  [1,9],[0.5,5], [5,6], [4,5],[9,1],[7,0],[8,-3],[5,-2],[5,-3],[3,-2],[4,-7],[2,-5],[0,-10]]; //list1資料														
let points2 = [[0,-10], [-2,-5], [-4,-7],[-3,-2],[-5,-3],[-5,-2],[-8,-3],[-7,0],[-9,1],[-4,5],[-5,6],[-0.5,5],[-1,9],
						  [1,9],[0.5,5], [5,6], [4,5],[9,1],[7,0],[8,-3],[5,-2],[5,-3],[3,-2],[4,-7],[2,-5],[0,-10]]; //list2資料
let points3= [[0,-10], [-2,-5], [-4,-7],[-3,-2],[-5,-3],[-5,-2],[-8,-3],[-7,0],[-9,1],[-4,5],[-5,6],[-0.5,5],[-1,9],
						  [1,9],[0.5,5], [5,6], [4,5],[9,1],[7,0],[8,-3],[5,-2],[5,-3],[3,-2],[4,-7],[2,-5],[0,-10]]; //list3資料
let points4 = [[0,-10], [-2,-5], [-4,-7],[-3,-2],[-5,-3],[-5,-2],[-8,-3],[-7,0],[-9,1],[-4,5],[-5,6],[-0.5,5],[-1,9],
						  [1,9],[0.5,5], [5,6], [4,5],[9,1],[7,0],[8,-3],[5,-2],[5,-3],[3,-2],[4,-7],[2,-5],[0,-10]]; //list4資料
let points5 = [[0,-10], [-2,-5], [-4,-7],[-3,-2],[-5,-3],[-5,-2],[-8,-3],[-7,0],[-9,1],[-4,5],[-5,6],[-0.5,5],[-1,9],
						  [1,9],[0.5,5], [5,6], [4,5],[9,1],[7,0],[8,-3],[5,-2],[5,-3],[3,-2],[4,-7],[2,-5],[0,-10]]; //list5資料
let ctx;
function setup() {//只會執行一次的函數
	createCanvas(windowWidth, windowHeight)//設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
	translate(width/2, height/2)//把原點放到視窗的中心
	//scale(1, -1);  //上下翻轉
	ctx = canvas.getContext('2d');
	ctx.lineWidth = 10;
	ctx.lineCap = 'round'
	//產生由小到大五層的圖
	zoom=5;//設定一個固定數值
    for (let i = 0; i<points1.length; i++) {
    for (let j = 0; j<points1[i].length; j++) {
      points1[i][j] = points1[i][j]*zoom*1;//第1層圖
      points2[i][j] = points2[i][j]*zoom*2;//2
	  points3[i][j] = points3[i][j]*zoom*3;//3
	  points4[i][j] = points4[i][j]*zoom*4;//4
	  points5[i][j] = points5[i][j]*zoom*5;//5
 }
textSize(30)  //文字大小
fill(0, 102, 153);  //設定顏色
text("教育科技系",250,0)  //顯示文字
 }
	
//漸層線條
const num = 25
for (let i = 0; i < num; i++) {
gradientLine(ctx,points1[i][0], points1[i][1], points1[i+1][0], points1[i+1][1], color(random(200, 255),random(0,255),random(0,255)), color(random(200,255),random(0,255),random(0,255)))//第1層圖
gradientLine(ctx,points2[i][0], points2[i][1], points2[i+1][0], points2[i+1][1], color(random(200, 255),random(0,255),random(0,255)), color(random(200,255),random(0,255),random(0,255)))//2
gradientLine(ctx,points3[i][0], points3[i][1], points3[i+1][0], points3[i+1][1], color(random(200, 255),random(0,255),random(0,255)), color(random(200,255),random(0,255),random(0,255)))//3
gradientLine(ctx,points4[i][0], points4[i][1], points4[i+1][0], points4[i+1][1], color(random(200, 255),random(0,255),random(0,255)), color(random(200,255),random(0,255),random(0,255)))//4
gradientLine(ctx,points5[i][0], points5[i][1], points5[i+1][0], points5[i+1][1], color(random(200, 255),random(0,255),random(0,255)), color(random(200,255),random(0,255),random(0,255)))//5
}
}
// 以下函數主要畫從(x1,y1)~(x2,y2)間，顏色為c1到c2的變化
function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
