function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState ===4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  var data =JSON.parse(text);
  console.log(data);
  career(data.career);
}
)var child2=document.queryselector(".childTwo")
function career(career_info){
  var ch=document.createElement("p");
  ch.textContent=careerInfo.info;
  child2.appendChild(ch);
  
}
