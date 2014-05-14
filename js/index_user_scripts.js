(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", "#calculateButton", function(evt)
        {
           var weight=document.getElementById("weight");
            var height=document.getElementById("height");
            if(weight.value<=0 && height.value<=0)
            {
                //document.getElementById("bmiComesHere").innerHTML="pls";
                alert("Please enter values to perform BMI evaluation");
                return;
            }
            var heightDouble=height.value*height.value;
            var bmi=weight.value/heightDouble;
            document.getElementById("bmiComesHere").innerHTML=bmi;
            g.refresh(bmi);
        });
     var g = new JustGage({
            id: "gauge",
            value: 0,
			startAnimationType: "bounce",
			refreshAnimationType: "bounce",
            title: "BMI"
        });
}
 $(document).ready(register_event_handlers);
})();
