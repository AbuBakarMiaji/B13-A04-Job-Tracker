// all cards count array 
let cards = ["jobs-card1", "jobs-card2", "jobs-card2","jobs-card1", "jobs-card2", "jobs-card2"];

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

        if(interviewCards.includes("jobs-card1")){
            return;
        }

        else{
        interviewCards.push("jobs-card1");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;

        }
});

document.getElementById('reject-click').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click');
        const jobStatus= document.getElementById('status');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

        if(rejectedCards.includes("jobs-card1")){
            return;
        }

        else{
        rejectedCards.push("jobs-card1");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

// <!-- Job serial 02 -->

document.getElementById('interview-click2').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click2');
        const jobStatus= document.getElementById('status2');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        if(interviewCards.includes("jobs-card2")){
            return;
        }

        else{
        interviewCards.push("jobs-card2");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

document.getElementById('reject-click2').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click2');
        const jobStatus= document.getElementById('status2');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

          if(rejectedCards.includes("jobs-card2")){
            return;
        }

        else{
        rejectedCards.push("jobs-card2");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

// <!-- Job serial 03 -->

document.getElementById('interview-click3').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click3');
        const jobStatus= document.getElementById('status3');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        if(interviewCards.includes("jobs-card3")){
            return;
        }

        else{
        interviewCards.push("jobs-card3");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

document.getElementById('reject-click3').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click3');
        const jobStatus= document.getElementById('status3');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

          if(rejectedCards.includes("jobs-card3")){
            return;
        }

        else{
        rejectedCards.push("jobs-card3");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

// <!-- Job serial 04 -->

document.getElementById('interview-click4').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click4');
        const jobStatus= document.getElementById('status4');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        if(interviewCards.includes("jobs-card4")){
            return;
        }

        else{
        interviewCards.push("jobs-card4");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

document.getElementById('reject-click4').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click4');
        const jobStatus= document.getElementById('status4');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

          if(rejectedCards.includes("jobs-card4")){
            return;
        }

        else{
        rejectedCards.push("jobs-card4");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

// <!-- Job serial 05 -->

document.getElementById('interview-click5').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click5');
        const jobStatus= document.getElementById('status5');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        if(interviewCards.includes("jobs-card5")){
            return;
        }

        else{
        interviewCards.push("jobs-card5");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

document.getElementById('reject-click5').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click5');
        const jobStatus= document.getElementById('status5');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

          if(rejectedCards.includes("jobs-card5")){
            return;
        }

        else{
        rejectedCards.push("jobs-card5");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});

// <!-- Job serial 06 -->

document.getElementById('interview-click6').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click6');
        const jobStatus= document.getElementById('status6');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");

        if(interviewCards.includes("jobs-card6")){
            return;
        }

        else{
        interviewCards.push("jobs-card6");
        const totalInterview= interviewCards.length;
        const interviewTotal= document.getElementById("total-interview");
        interviewTotal.innerText=totalInterview;
        }
});

document.getElementById('reject-click6').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click6');
        const jobStatus= document.getElementById('status6');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");

          if(rejectedCards.includes("jobs-card6")){
            return;
        }

        else{
        rejectedCards.push("jobs-card6");
        const totalRejected= rejectedCards.length;
        const rejectedTotal= document.getElementById("total-rejected");
        rejectedTotal.innerText=totalRejected;
        }
});


// all Button
document.getElementById('all-list').addEventListener('click',function(){
        const noJobs= document.getElementById('no-jobs');
        const allJobs= document.getElementById('all-jobs');
        noJobs.classList.add("hidden");
        allJobs.classList.remove("hidden");

        sideCount.innerText=totalJobs;

});

// Interview Button 
document.getElementById('interview').addEventListener('click',function(){
        const allJobs= document.getElementById('all-jobs');
        const noJobs= document.getElementById('no-jobs');
        allJobs.classList.add("hidden");
        noJobs.classList.remove("hidden");

        const interviewTotal= document.getElementById("total-interview");
        const sideCount= document.getElementById("side-count");
        const totalInterview= interviewCards.length;
        sideCount.innerText=totalInterview;

});

// Reject Button
document.getElementById('rejected').addEventListener('click',function(){
        const allJobs= document.getElementById('all-jobs');
        const noJobs= document.getElementById('no-jobs');
        allJobs.classList.add("hidden");
        noJobs.classList.remove("hidden");

       
        const rejectedTotal= document.getElementById("total-rejected");
        const sideCount= document.getElementById("side-count");
        const totalRejected= rejectedCards.length;
        sideCount.innerText=totalRejected;
});