// commune calculation function------------>
function getInputElementById(inputIdFiled) {
    const inputId=document.getElementById(inputIdFiled);
    const inputValue=inputId.value ;
    return inputValue;
}
function setInnerTextId(inputId,areaValue) {
    const inputElement=document.getElementById(inputId);
    const display=inputElement.innerText=areaValue;
    return display;
}

// function in Triangle Area ------->
function calculateTriangleArea() {
    const base=getInputElementById('triangle-base');

    const hight=getInputElementById('triangle-hight');

    const triangleArea=0.5*base*hight;
    setInnerTextId('area-triangle',triangleArea);
}

// function in Rectangle Area ------->
function calculateRectangleArea() {
    const width=getInputElementById('rectangle-width');

    const length=getInputElementById('rectangle-length');

    const rectangleArea=width*length;
    setInnerTextId('area-rectangle',rectangleArea);
}
// calculate Parallelogram Area --->

function calculateParallelogramArea() {
    const base=getInputElementById('parallelogram-base')

    const hight=getInputElementById('parallelogram-hight')

    const parallelogramArea=base*hight;
    setInnerTextId('area-parallelogram',parallelogramArea)
}

// rhombus calculation-->
function rhombusCalculateArea() {
    const base=getInputElementById('rhombus-base')

    const hight=getInputElementById('rhombus-hight')

    const rhombusArea=0.5*base*hight;

    setInnerTextId('area-rhombus',rhombusArea)

}

// pentagon calculation----->
function pentagonCalculateArea() {
    const p= getInputElementById('pentagon-p');

    const base=getInputElementById('pentagon-base');

    const pentagonArea=0.58*p*base;

    setInnerTextId('area-pentagon',pentagonArea);

}

// Ellipse-calculation ----->
function ellipseCalculateArea() {
    const a=getInputElementById('ellipse-a');

    const b=getInputElementById('ellipse-b');

    const ellipseArea=Math.PI*a*b;

    setInnerTextId('area-ellipse',ellipseArea)
}
