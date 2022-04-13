var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "selfie")
    {
        console.log("taking selfie --");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "taking you selfie in 5 seconds"
    var utterThis = new  SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_sanpshot();
        save();
    }, 5000
    );
} 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality: 90
});

function take_sanpshot()    
{
    Webcam.snap(function(data_URI){
        document.getElementById("result1").innerHTML = '<img id="selfie_image1" src=" '+data_URI+'"/>';
        document.getElementById("result2").innerHTML = '<img id="selfie_image2" src=" '+data_URI+'"/>';
        document.getElementById("result3").innerHTML = '<img id="selfie_image3" src=" '+data_URI+'"/>';
    });   
}

function save()
{
    link = document.getElementById("link");
    image=document.getElementById("selfie_image1").src;
    image=document.getElementById("selfie_image2").src;
    image=document.getElementById("selfie_image3").src;
    link.href=image;
    link.click();
}
