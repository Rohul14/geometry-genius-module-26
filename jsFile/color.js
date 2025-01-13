//  Triangle card ---->
 const divTri=document.getElementById('triangle-card');
 divTri.addEventListener('mouseover',function () {
    divTri.style.backgroundColor='pink'
    
 }) 
 divTri.addEventListener('mouseout',function () {
    divTri.style.backgroundColor=''
 }) 
 
//  Rectangle-card
 const divRec=document.getElementById('rectangle-card');
 divRec.addEventListener('mouseover',function () {
    divRec.style.backgroundColor='teal'
    
 }) 
 divRec.addEventListener('mouseout',function () {
    divRec.style.backgroundColor=''
 }) 

//  Parallelogram card---->
const divPar=document.getElementById('parallelogram-card');
divPar.addEventListener('mouseover',function () {
    divPar.style.backgroundColor='silver'
})
divPar.addEventListener('mouseout',function () {
    divPar.style.backgroundColor=''
})

// Rhombus card 
const divRho=document.getElementById('rhombus-card')
divRho.addEventListener('mouseover',function(){
    divRho.style.backgroundColor='violet'
})
divRho.addEventListener('mouseout',function(){
    divRho.style.backgroundColor=''
})

// Pentagon card 
const divPen=document.getElementById('pentagon-card')
divPen.addEventListener('mouseover',function(){
    divPen.style.backgroundColor='gray'
})
divPen.addEventListener('mouseout',function(){
    divPen.style.backgroundColor=''
})

// Ellipse card -------->
const divElp=document.getElementById('ellipse-card')
divElp.addEventListener('mouseover',function(){
     divElp.style.backgroundColor='tan'
})
divElp.addEventListener('mouseout',function(){
    divElp.style.backgroundColor=''
})