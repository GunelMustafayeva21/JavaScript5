let fileInput=document.querySelector(".forUpload");
let Src;
let submitButton=document.querySelector(".submit");
let nonVisibleDiv=document.querySelector(".second");
let personalInformation=document.querySelector(".information");
let form=document.querySelector(".myForm");
let Photo=document.querySelector(".picture");
let inputs=document.querySelectorAll(".form-control");

fileInput.addEventListener("change",function(e){
    let uploadedFiles=e.target.files;
     for (const file of uploadedFiles) {
         let reader =new FileReader();
         reader.onloadend=(readEvent) =>{
             Src=readEvent.target.result;
         }
         reader.readAsDataURL(file);
     }})
     
submitButton.addEventListener("click",function(e){
    form.classList.add("d-none")
    nonVisibleDiv.classList.remove("d-none");
    let addedImage=document.createElement("img");
    addedImage.setAttribute("src",Src);
    Photo.append(addedImage);
    let Array=["Name:","Surname:","Father Name:","Date of birthday:"];
    for(let i=0;i<inputs.length-1;i++){
    let newDiv=document.createElement("div");
    personalInformation.append(newDiv);
    newDiv.innerText=Array[i]+"    "+inputs[i].value;
    }})