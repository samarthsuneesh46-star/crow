
function show(id){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.getElementById(id).classList.add('active');
}
function check1(){
 let a=document.querySelector('input[name=q1]:checked');
 if(a && a.value==='correct'){
  document.getElementById('m1').innerText='☑ Identify the thief';
  document.getElementById('pm1').innerText='☑ Identify the thief';
  show('mandate2');
 } else {
  document.getElementById('msg1').innerText='Incorrect. Review the evidence and try again.';
 }
}
function check2(){
 let a=document.querySelector('input[name=q2]:checked');
 if(a && a.value==='C'){
  document.getElementById('m2').innerText='☑ Reconstruct the theft';
  document.getElementById('pm2').innerText='☑ Reconstruct the theft';
  show('solved');
 } else {
  document.getElementById('msg2').innerText='Incorrect. Review the evidence and try again.';
 }
}
