// all cards count array 
let cards = ["jobs-card1", "jobs-card2", "jobs-card3","jobs-card4", "jobs-card5", "jobs-card6", "jobs-card7", "jobs-card8"];

const totalJobs= cards.length;
const total= document.getElementById("totalJob");
total.innerText=totalJobs;
const sideCount= document.getElementById("side-count");
sideCount.innerText=totalJobs;

// Interview card Array
let interviewCards = [];

const totalInterview= interviewCards.length;
const interviewTotal= document.getElementById("total-interview");
interviewTotal.innerText=totalInterview;

// Rejected Card Array
let rejectedCards = [];

const totalRejected= rejectedCards.length;
const rejectedTotal= document.getElementById("total-rejected");
rejectedTotal.innerText=totalRejected;


// <!-- Job serial 01 -->

document.getElementById('interview-click').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click');
        const jobStatus= document.getElementById('status');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        const idCard = document.getElementById("card1");
        idCard.classList.add("interview");
        idCard.classList.remove("rejected");

        if(interviewCards.includes("jobs-card1")){
            return;
        }

        else{
        interviewCards.push("jobs-card1");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        rejectedCards = rejectedCards.filter(
        item => item !== "jobs-card1"
        );
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

document.getElementById('reject-click').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click');
        const jobStatus= document.getElementById('status');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        const idCard = document.getElementById("card1");
        idCard.classList.remove("interview");
        idCard.classList.add("rejected");

        if(rejectedCards.includes("jobs-card1")){
            return;
        }

        else{
        rejectedCards.push("jobs-card1");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;

        interviewCards = interviewCards.filter(
        item => item !== "jobs-card1"
        );
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

// <!-- Job serial 02 -->

document.getElementById('interview-click2').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click2');
        const jobStatus= document.getElementById('status2');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        const idCard = document.getElementById("card2");
        idCard.classList.add("interview");
        idCard.classList.remove("rejected");

        if(interviewCards.includes("jobs-card2")){
            return;
        }

        else{
        interviewCards.push("jobs-card2");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        rejectedCards = rejectedCards.filter(
        item => item !== "jobs-card2"
        );
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

document.getElementById('reject-click2').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click2');
        const jobStatus= document.getElementById('status2');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        const idCard2 = document.getElementById("card2");
        idCard2.classList.remove("interview");
        idCard2.classList.add("rejected");

          if(rejectedCards.includes("jobs-card2")){
            return;
        }

        else{
        rejectedCards.push("jobs-card2");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;

        interviewCards = interviewCards.filter(
        item => item !== "jobs-card2"
        );
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

// <!-- Job serial 03 -->

document.getElementById('interview-click3').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click3');
        const jobStatus= document.getElementById('status3');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        const idCard = document.getElementById("card3");
        idCard.classList.add("interview");
        idCard.classList.remove("rejected");

        if(interviewCards.includes("jobs-card3")){
            return;
        }

        else{
        interviewCards.push("jobs-card3");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        rejectedCards = rejectedCards.filter(
        item => item !== "jobs-card3"
        );
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

document.getElementById('reject-click3').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click3');
        const jobStatus= document.getElementById('status3');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        const idCard = document.getElementById("card3");
        idCard.classList.remove("interview");
        idCard.classList.add("rejected");

          if(rejectedCards.includes("jobs-card3")){
            return;
        }

        else{
        rejectedCards.push("jobs-card3");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;

        interviewCards = interviewCards.filter(
        item => item !== "jobs-card3"
        );
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

// <!-- Job serial 04 -->

document.getElementById('interview-click4').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click4');
        const jobStatus= document.getElementById('status4');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

         const idCard = document.getElementById("card4");
        idCard.classList.add("interview");
        idCard.classList.remove("rejected");

        if(interviewCards.includes("jobs-card4")){
            return;
        }

        else{
        interviewCards.push("jobs-card4");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        rejectedCards = rejectedCards.filter(
        item => item !== "jobs-card4"
        );
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

document.getElementById('reject-click4').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click4');
        const jobStatus= document.getElementById('status4');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        const idCard = document.getElementById("card4");
        idCard.classList.remove("interview");
        idCard.classList.add("rejected");

          if(rejectedCards.includes("jobs-card4")){
            return;
        }

        else{
        rejectedCards.push("jobs-card4");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;

        interviewCards = interviewCards.filter(
        item => item !== "jobs-card4"
        );
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

// <!-- Job serial 05 -->

document.getElementById('interview-click5').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click5');
        const jobStatus= document.getElementById('status5');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

         const idCard = document.getElementById("card5");
        idCard.classList.add("interview");
        idCard.classList.remove("rejected");

        if(interviewCards.includes("jobs-card5")){
            return;
        }

        else{
        interviewCards.push("jobs-card5");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        rejectedCards = rejectedCards.filter(
        item => item !== "jobs-card5"
        );
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

document.getElementById('reject-click5').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click5');
        const jobStatus= document.getElementById('status5');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        const idCard = document.getElementById("card5");
        idCard.classList.remove("interview");
        idCard.classList.add("rejected");


          if(rejectedCards.includes("jobs-card5")){
            return;
        }

        else{
        rejectedCards.push("jobs-card5");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;

        interviewCards = interviewCards.filter(
        item => item !== "jobs-card5"
        );
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

// <!-- Job serial 06 -->

document.getElementById('interview-click6').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click6');
        const jobStatus= document.getElementById('status6');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        
         const idCard = document.getElementById("card6");
        idCard.classList.add("interview");
        idCard.classList.remove("rejected");

        if(interviewCards.includes("jobs-card6")){
            return;
        }

        else{
        interviewCards.push("jobs-card6");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        rejectedCards = rejectedCards.filter(
        item => item !== "jobs-card6"
        );
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

document.getElementById('reject-click6').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click6');
        const jobStatus= document.getElementById('status6');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        const idCard = document.getElementById("card6");
        idCard.classList.remove("interview");
        idCard.classList.add("rejected");

          if(rejectedCards.includes("jobs-card6")){
            return;
        }

        else{
        rejectedCards.push("jobs-card6");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;

        interviewCards = interviewCards.filter(
        item => item !== "jobs-card6"
        );
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});
// <!-- Job serial 07 -->

document.getElementById('interview-click7').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click7');
        const jobStatus= document.getElementById('status7');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        
         const idCard = document.getElementById("card7");
        idCard.classList.add("interview");
        idCard.classList.remove("rejected");

        if(interviewCards.includes("jobs-card7")){
            return;
        }

        else{
        interviewCards.push("jobs-card7");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        rejectedCards = rejectedCards.filter(
        item => item !== "jobs-card7"
        );
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

document.getElementById('reject-click7').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click7');
        const jobStatus= document.getElementById('status7');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        const idCard = document.getElementById("card7");
        idCard.classList.remove("interview");
        idCard.classList.add("rejected");

          if(rejectedCards.includes("jobs-card7")){
            return;
        }

        else{
        rejectedCards.push("jobs-card7");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;

        interviewCards = interviewCards.filter(
        item => item !== "jobs-card7"
        );
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

// <!-- Job serial 08 -->

document.getElementById('interview-click8').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click8');
        const jobStatus= document.getElementById('status8');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        
        const idCard = document.getElementById("card8");
        idCard.classList.add("interview");
        idCard.classList.remove("rejected");

        if(interviewCards.includes("jobs-card8")){
            return;
        }

        else{
        interviewCards.push("jobs-card8");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        rejectedCards = rejectedCards.filter(
        item => item !== "jobs-card8"
        );
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

document.getElementById('reject-click8').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click8');
        const jobStatus= document.getElementById('status8');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        const idCard = document.getElementById("card8");
        idCard.classList.remove("interview");
        idCard.classList.add("rejected");

          if(rejectedCards.includes("jobs-card8")){
            return;
        }

        else{
        rejectedCards.push("jobs-card8");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;

        interviewCards = interviewCards.filter(
        item => item !== "jobs-card8"
        );
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

// delete Button for card 1 

document.getElementById('delete1').addEventListener('click', function(){
        const delete1 = document.getElementById("card1");
        delete1.remove();
        
        cards = cards.filter(
        item => item !== "jobs-card1"
        );

        const totalJobs= cards.length;
        const total= document.getElementById("totalJob");
        total.innerText=totalJobs;
        const sideCount= document.getElementById("side-count");
        sideCount.innerText=totalJobs;

});
// delete Button for card 2 

document.getElementById('delete2').addEventListener('click', function(){
        const delete2 = document.getElementById("card2");
        delete2.remove();
        
        cards = cards.filter(
        item => item !== "jobs-card2"
        );

        const totalJobs= cards.length;
        const total= document.getElementById("totalJob");
        total.innerText=totalJobs;
        const sideCount= document.getElementById("side-count");
        sideCount.innerText=totalJobs;

});
// delete Button for card 3 

document.getElementById('delete3').addEventListener('click', function(){
        const delete3 = document.getElementById("card3");
        delete3.remove();
        
        cards = cards.filter(
        item => item !== "jobs-card3"
        );

        const totalJobs= cards.length;
        const total= document.getElementById("totalJob");
        total.innerText=totalJobs;
        const sideCount= document.getElementById("side-count");
        sideCount.innerText=totalJobs;

});
// delete Button for card 4 

document.getElementById('delete4').addEventListener('click', function(){
        const delete4 = document.getElementById("card4");
        delete4.remove();
        
        cards = cards.filter(
        item => item !== "jobs-card4"
        );

        const totalJobs= cards.length;
        const total= document.getElementById("totalJob");
        total.innerText=totalJobs;
        const sideCount= document.getElementById("side-count");
        sideCount.innerText=totalJobs;

});
// delete Button for card 5 

document.getElementById('delete5').addEventListener('click', function(){
        const delete5 = document.getElementById("card5");
        delete5.remove();
        
        cards = cards.filter(
        item => item !== "jobs-card5"
        );

        const totalJobs= cards.length;
        const total= document.getElementById("totalJob");
        total.innerText=totalJobs;
        const sideCount= document.getElementById("side-count");
        sideCount.innerText=totalJobs;

});
// delete Button for card 6

document.getElementById('delete6').addEventListener('click', function(){
        const delete6 = document.getElementById("card6");
        delete6.remove();
        
        cards = cards.filter(
        item => item !== "jobs-card6"
        );

        const totalJobs= cards.length;
        const total= document.getElementById("totalJob");
        total.innerText=totalJobs;
        const sideCount= document.getElementById("side-count");
        sideCount.innerText=totalJobs;

});
// delete Button for card 7 

document.getElementById('delete7').addEventListener('click', function(){
        const delete7 = document.getElementById("card7");
        delete7.remove();
        
        cards = cards.filter(
        item => item !== "jobs-card7"
        );

        const totalJobs= cards.length;
        const total= document.getElementById("totalJob");
        total.innerText=totalJobs;
        const sideCount= document.getElementById("side-count");
        sideCount.innerText=totalJobs;

});
// delete Button for card 8

document.getElementById('delete8').addEventListener('click', function(){
        const delete8 = document.getElementById("card8");
        delete8.remove();
        
        cards = cards.filter(
        item => item !== "jobs-card8"
        );

        const totalJobs= cards.length;
        const total= document.getElementById("totalJob");
        total.innerText=totalJobs;
        const sideCount= document.getElementById("side-count");
        sideCount.innerText=totalJobs;

});


// all Button
document.getElementById('all-list').addEventListener('click',function(){
        const noJobs= document.getElementById('no-jobs');
        noJobs.classList.add("hidden");
        

        const showCard1 = document.getElementsByClassName("card");

        for (let i = 0; i < showCard1.length; i++) {
        showCard1[i].classList.remove("hidden");
        }

        sideCount.innerText=totalJobs;

});

// Interview Button 
document.getElementById('interview').addEventListener('click',function(){
        

        const noJobs= document.getElementById('no-jobs');
        noJobs.classList.add("hidden");

        const showCard1 = document.getElementsByClassName("card");


        for (let i = 0; i < showCard1.length; i++) {
        showCard1[i].classList.add("hidden");
        }

        const rejected1 = document.getElementsByClassName("rejected");
         for (let i = 0; i < rejected1.length; i++) {
        rejected1[i].classList.add("hidden");
        }

        const interview1 = document.getElementsByClassName("interview");
         for (let i = 0; i < interview1.length; i++) {
        showCard1[i].classList.remove("hidden");
        }

         if(interview1.length===0)
        {
                noJobs.classList.remove("hidden");
        }


        const interviewTotal= document.getElementById("total-interview");
        const sideCount= document.getElementById("side-count");
        const totalInterview= interviewCards.length;
        sideCount.innerText=totalInterview;

});

// Reject Button
document.getElementById('rejected').addEventListener('click',function(){
      
        const noJobs= document.getElementById('no-jobs');
        noJobs.classList.add("hidden");

        const showCard1 = document.getElementsByClassName("card");


        for (let i = 0; i < showCard1.length; i++) {
        showCard1[i].classList.add("hidden");
        }

        const interview1 = document.getElementsByClassName("interview");
         for (let i = 0; i < interview1.length; i++) {
        showCard1[i].classList.add("hidden");
        }

        const rejected1 = document.getElementsByClassName("rejected");
         for (let i = 0; i < rejected1.length; i++) {
        rejected1[i].classList.remove("hidden");
        }

         if(rejected1.length===0)
        {
                noJobs.classList.remove("hidden");
        }

       
        const rejectedTotal= document.getElementById("total-rejected");
        const sideCount= document.getElementById("side-count");
        const totalRejected= rejectedCards.length;
        sideCount.innerText=totalRejected;
});