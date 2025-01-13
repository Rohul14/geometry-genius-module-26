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