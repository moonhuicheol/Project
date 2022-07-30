
let isvalid=false;

let eamil = document.querySelector("#email");
let password = document.querySelector("#password")
let passwordCheck = document.querySelector("#passwordCheck");
let nickName = document.querySelector("#nickName")
let userName = document.querySelector("#userName")
let yy = document.querySelector("#yy")
let mm = document.querySelector("#mm")
let dd = document.querySelector("#dd")
let gender = document.querySelector("#gender") 
let phone = document.querySelector("#phone")
let school = document.querySelector("#school")
let grade = document.querySelector("#grade")
let tutorFile = document.querySelector("#tutor_signFile")


eamil.addEventListener("input",function(){
  let emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  let inputData = this.value;
  isvalid = inputData.length >= 5 && inputData.length <=10;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////email 

password.addEventListener("input",function(){
  let inputData = this.value;
  isvalid = inputData.length >= 5 && inputData.length <=10;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////password 

passwordCheck.addEventListener("input",function(){

  let inputData = this.value;

  if(password.value!==passwordCheck.value){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////passwordCheck 

nickName.addEventListener("input",function(){

  let inputData = this.value;
  isvalid = inputData.length >= 5 && inputData.length <=10;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////nickName 

userName.addEventListener("input",function(){

  let inputData = this.value;
  isvalid = inputData.length >= 5 && inputData.length <=10;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////userName 


yy.addEventListener("input",function(){
  let inputData = this.value;
  isvalid = inputData.length===4;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////yy 

mm.addEventListener("input",function(){
  let inputData = this.value;
  isvalid = inputData.length > 0;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////mm 

dd.addEventListener("input",function(){
  let inputData = this.value;
  isvalid = inputData.length >=1;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////dd 

gender.addEventListener("input",function(){
  let inputData = this.value;
  isvalid = inputData.length > 0;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////school 

school.addEventListener("input",function(){
  let inputData = this.value;
  isvalid = inputData.length > 0;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////school 

grade.addEventListener("input",function(){
  let inputData = this.value;
  isvalid = inputData.length > 0;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////grade 

tutorFile.addEventListener("input",function(){
  let inputData = this.value;
  isvalid = inputData.length = 1;

  if(!isvalid){
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }//if-else
})////grade 

//---------------------------- sweetAlert
function login() {
  Swal.fire({
    title: '회원가입완료!', 
    text: '5분과외 회원가입이 완료되었습니다.', 
    icon: 'success',      
    confirmButtonColor: '#3085d6',
  }).then(function(){
    document.location.href="1-02_login.html"
  });
};//login

function loginTutor() {
  Swal.fire({
    title: '회원가입 신청완료!', 
    html: 
    '<strong>email@gmail.com로 </strong><br>'+
    '인증메일이 발송되었습니다.',
    icon: 'success',   
    confirmButtonColor: '#3085d6',
  }).then(function(){
    document.location.href="1-02_login.html"
  });
};//login

function checkNickName() {
  Swal.fire({
    title: '중복확인완료!', 
    text: '해당 닉네임을 사용할 수 있습니다.', 
    icon: 'success',      
    confirmButtonColor: '#3085d6',
  })
};//checkNickName