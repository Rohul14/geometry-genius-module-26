// function in Triangle Area ------->
function calculateTriangleArea() {
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseValue=triangleBaseInput.value ;
    const base=parseFloat(triangleBaseValue)
    console.log(base);
    
    const triangleHightInput=document.getElementById('triangle-hight');
    const triangleHightValue=triangleHightInput.value ;
    const hight=parseFloat(triangleHightValue)
    console.log(hight);
    
    // area---  
    const area=0.5*base*hight
    console.log('area value',area);

    // area value ------>
    const areaTriangle=document.getElementById('area-triangle');
    areaTriangle.innerText=area;
    
}

// function in Rectangle Area ------->
function calculateRectangleArea() {
    const rectangleWidthInput=document.getElementById('rectangle-width');
    const rectangleWidthValue=rectangleWidthInput.value ;
    const width=parseFloat(rectangleWidthValue);
    console.log(width);

    const rectangleHightInput=document.getElementById('rectangle-hight');
    const rectangleHightValue=rectangleHightInput.value;
    const hight=parseFloat(rectangleHightValue);
    console.log(hight);

    // area
    const area=width*hight
    // Area Value----->
    const areaRectangle=document.getElementById('area-rectangle ');
    areaRectangle.innerText=area;
    
}



function calculateParallelogramArea() {
    const baseInput=document.getElementById('parallelogram-base');
    const baseValue=baseInput.value ;
    const base=parseFloat(baseValue)
    console.log(base);

    const hightInput=document.getElementById('parallelogram-hight');
    const hightValue=hightInput.value ;
    const hight=parseFloat(hightValue)
    console.log(hight);
    

    // Parallelogram Area
    const area=base*hight
    console.log(area);

    // area-parallelogram
    const paraGramArea=document.getElementById('area-parallelogram');
    paraGramArea.innerText=area;
}