function verifyAttendance() {
   var attended= 0;
   var absent =0;
   var v=document.getElementById("student1").checked;
   if(v==true)
     attended++;
   else
     absent++;
   var u=document.getElementById("student2").checked;
   if(u==true)
      attended++;
   else
     absent++;
   var z=document.getElementById("student3").checked;
   if(z==true)
       attended++;
   else
      absent++;
   var a=document.getElementById("student4").checked;
    if(a==true)
       attended++;
    else
       absent++;
   var b=document.getElementById("student5").checked;
    if(b==true)
      attended++;
    else
      absent++;
    alert(
    "Total #of students in class "+eval(attended+absent)+"\n"+
    "Total #of students presented "+attended+"\n"+
    "Total #of students absent "+absent);
}

var fileExtn="";
var fileName="";

function myUpload() {
   var x = document.getElementById("myFile");
   if (x.files.length == 0)  {
         alert("Please select an image file to upload");
   } else
   {
       for (var i = 0; i < x.files.length; i++)
       {
             var file = x.files[i];
             fileName =file.name;
             console.log("The fileName  "+fileName);
             fileExtn = checkFileExtension();
             if((fileExtn =='png') || (fileExtn =='jpg') || (fileExtn =='jif')){
               console.log("extension "+fileExtn);
               alert ("Uploaded successfully");
             }
             else{
                console.log("extension "+fileExtn);
                alert("upload only images files");
             }

       }
    }
  }

  /**Using regexp to find extension of the file */
  function checkFileExtension()  {
              regex = new RegExp('[^.]+$');
              console.log("RegEx"+regex);
              fileExtn = fileName.match(regex);
              return fileExtn;

   }

